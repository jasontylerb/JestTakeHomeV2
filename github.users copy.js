//  src:
const applyHospitalPaymentReturn = require('./src/applyHospitalPayment.js');
const getAllHospitalStatementsReturn = require('./src/getAllHospitalStatements.js');
const getAllStatementsReturn = require('./src/getAllStatements.js');
const getBalanceAndStatementReturn = require('./src/getBalanceAndStatement.js');
const getHospitalVisitsReturn = require('./src/getHospitalVisits.js');
const getInvoiceDetailReturn = require('./src/getInvoiceDetail.js');
const getInvoiceListReturn = require('./src/getInvoiceList.js');
const getPatientDocumentsReturn = require('./src/getPatientDocuments.js');
const getVisitDetailV2Return = require('./src/getVisitDetailV2.js');
const getYearlyPaymentReportReturn = require('./src/getYearlyPaymentReport.js');

//  src/_unused:
const applyPaymentReturn = require('./src/_unused/applyPayment.js');
const getVisitDetailReturn = require('./src/_unused/getVisitDetail.js');
const isPaymentAllowedReturn = require('./src/_unused/isPaymentAllowed.js');
const processBillPayQueueReturn = require('./src/_unused/processBillPayQueue.js');
const processHospitalBillPayQueueReturn = require('./src/_unused/processHospitalBillPayQueue.js');
const shcn = 111999036;
module.exports = {
  BillPay: {
    BillPaySOAP: {
      getInvoiceList: function (args, callback, headers, req) {
        console.log('Results for: getInvoiceList');
        return getInvoiceListReturn;
      },
      applyHospitalPayment: function (args, callback, headers, req) {
        console.log('Trigger applyHospitalPayment');
        return applyHospitalPayment;
      },
      applyPayment: function (args, callback, headers, req) {
        console.log('Results for: applyPayment');
        return applyPaymentReturn;
      },
      getBalanceAndStatement: function (args, callback, headers, req) {
        console.log('Results for: getBalanceAndStatement');
        return getBalanceAndStatementReturn;
      },
      getInvoiceDetail: function (args, callback, headers, req) {
        console.log('Results for: getInvoiceDetail');
        return getInvoiceDetailReturn;
      },
      isPaymentAllowed: function (args, callback, headers, req) {
        console.log('Results for: isPaymentAllowed');
        return isPaymentAllowedReturn;
      },
      processBillPayQueue: function (args, callback, headers, req) {
        console.log('Results for: processBillPayQueue');
        return processBillPayQueueReturn;
      },
      getAllStatements: function (args, callback, headers, req) {
        console.log('Results for: getAllStatements');
        return getAllStatementsReturn;
      },
      getAllHospitalStatements: function (args, callback, headers, req) {
        return getAllHospitalStatementsReturn;
      },
      getHospitalVisits: function (args, callback, headers, req) {
        console.log('Results for: getHospitalVisits');
        return getHospitalVisitsReturn[shcn];
      },
      getYearlyPaymentReport: function (args, callback, headers, req) {
        console.log('Results for: getYearlyPaymentReport');
        return getYearlyPaymentReportReturn;
      },
      applyHospitalPayment: function (args, callback, headers, req) {
        console.log('Results for: applyHospitalPayment');
        return applyHospitalPaymentReturn;
      },
      processHospitalBillPayQueue: function (args, callback, headers, req) {
        console.log('Results for: processHospitalBillPayQueue');
        return processHospitalBillPayQueueReturn;
      },
      getVisitDetail: function (args, callback, headers, req) {
        console.log('Results for: getVisitDetail');
        return getVisitDetailReturn;
      },
      getVisitDetailV2: function (args, callback, headers, req) {
        console.log('getVisitDetailV2')
        return getVisitDetailV2Return;
      },
      getPatientDocuments: function (args, callback, headers, req) {
        console.log('Results for: getPatientDocuments');
        return getPatientDocumentsReturn;
      }
    }
  }
}