
const SHEET_NAME = 'Registrations';

function doPost(e) {
  try {
    const data = parseRequestBody_(e);
    const record = buildSanitizedRecord_(data);

    appendToSheet_(record);
    notifyTelegram_(record);

    return jsonResponse_({ status: 'success' });
  } catch (err) {
    return jsonResponse_({ status: 'error', message: String(err) });
  }
}

function doGet() {
  return jsonResponse_({ status: 'ok', message: 'CYBERSECUPNVJT registration endpoint is live.' });
}


function parseRequestBody_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('Empty request body.');
  }
  return JSON.parse(e.postData.contents);
}

function stripDangerousChars_(value) {
  return String(value == null ? '' : value).replace(/[<>]/g, '');
}


function neutralizeFormula_(value) {
  const str = String(value == null ? '' : value);
  return /^[=+\-@]/.test(str) ? "'" + str : str;
}

function sanitize_(value) {
  return neutralizeFormula_(stripDangerousChars_(String(value == null ? '' : value).trim()));
}

function buildSanitizedRecord_(data) {
  return {
    timestamp: new Date(),
    email: sanitize_(data.email),
    fullName: sanitize_(data.fullName),
    npm: sanitize_(data.npm),
    angkatan: sanitize_(data.angkatan),
    specialization: sanitize_(data.specialization),
    whatsapp: sanitize_(data.whatsapp),
    github: sanitize_(data.github),
  };
}


function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Email', 'Full Name', 'NPM', 'Angkatan', 'Specialization', 'WhatsApp', 'GitHub']);
  }
  return sheet;
}

function appendToSheet_(record) {
  const sheet = getSheet_();
  sheet.appendRow([
    record.timestamp,
    record.email,
    record.fullName,
    record.npm,
    record.angkatan,
    record.specialization,
    record.whatsapp,
    record.github,
  ]);
}


function notifyTelegram_(record) {
  const props = PropertiesService.getScriptProperties();
  const token = props.getProperty('TELEGRAM_BOT_TOKEN');
  const chatId = props.getProperty('TELEGRAM_CHAT_ID');

  if (!token || !chatId) {
    // Notification is best-effort — don't fail the registration
    // just because Telegram isn't configured yet.
    return;
  }

  const text =
    '*New CYBERSECUPNVJT Registration*\n' +
    '\n' +
    '*Name:* ' + escapeMarkdown_(record.fullName) + '\n' +
    '*Email:* ' + escapeMarkdown_(record.email) + '\n' +
    '*NPM:* ' + escapeMarkdown_(record.npm) + '\n' +
    '*Angkatan:* ' + escapeMarkdown_(record.angkatan) + '\n' +
    '*Specialization:* ' + escapeMarkdown_(record.specialization || '-') + '\n' +
    '*WhatsApp:* ' + escapeMarkdown_(record.whatsapp) + '\n' +
    '*GitHub:* ' + escapeMarkdown_(record.github || '-');

  const url = 'https://api.telegram.org/bot' + token + '/sendMessage';

  UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'Markdown',
    }),
    muteHttpExceptions: true,
  });
}

function escapeMarkdown_(value) {
  return String(value == null ? '' : value).replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1');
}


function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
