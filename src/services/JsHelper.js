export const JsHelper = {
    // Change Format MM/dd/yyyy to dd/MM/YYY day
    changeFormatDate(date) {
        const parts = date.split('/');
        const formattedDateStr = `${parts[1]}/${parts[0]}/${parts[2]}`;
        return formattedDateStr;
    },
};
