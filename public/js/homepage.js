$(document).ready(function () {
    // set global variables
    var dateTime = luxon.DateTime;
    const DateTime = luxon.DateTime;
    let dt2;

    const currURL = new URL(window.location.href);
    const currPath = currURL.pathname;
    const newString = currPath.replace('/dashboard/', '');
    formatDate(newString);

    function subtractFromDate(passDate) {
        newDate = DateTime.fromISO(passDate).minus({ days: 1 }).toISODate();
        return newDate;
    }

    function addToDate(passDate) {
        newDate = DateTime.fromISO(passDate).plus({ days: 1 }).toISODate();
        return newDate;
    }

    // // function to generate and populate the current date on the main index page
    function formatDate(passDate) {
        if (!passDate || passDate === "today") {
            var fullDate = dateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' });
            var day = dateTime.local().toLocaleString({ day: '2-digit' });
            var year = dateTime.local().toLocaleString({ year: 'numeric' });
            var daySuffix = getDayNumberSuffix(day);
            fullDate += daySuffix + ', ' + year;
            dt2 = DateTime.fromJSDate(new Date()).toFormat('yyyy-MM-dd');
        } else {
            var convertedDate = DateTime.fromISO(passDate).toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' });
            fullDate = convertedDate;
            var day = dateTime.fromISO(passDate).toLocaleString({ day: '2-digit' });
            var year = dateTime.fromISO(passDate).toLocaleString({ year: 'numeric' });
            var daySuffix = getDayNumberSuffix(day);
            fullDate += daySuffix + ', ' + year;
            dt2 = passDate;
        };

        // populate the date on the html page
        $("#search-date").text(fullDate);
        $("#search-date").attr('data-date', dt2);

        // sub function to generate the day suffix for the full date
        function getDayNumberSuffix(day) {
            // if the day is 11, 12 or 13 then the day suffix must be "th"
            if (day >= 11 && day <= 13) {
                return "th";
            }
            // work out the day suffix text
            switch (day % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        }
    }

    const leftBtnHandler = async (event) => {
        event.preventDefault();
        const screenDateDataValue = $("#search-date").attr('data-date');
        dateBack = subtractFromDate(screenDateDataValue);
        formatDate(dateBack);
        const newURL = '/dashboard/' + dateBack;
        window.location.replace(newURL);
    };

    const rightBtnHandler = async (event) => {
        event.preventDefault();
        const screenDateDataValue = $("#search-date").attr('data-date');
        dateBack = addToDate(screenDateDataValue);
        formatDate(dateBack);
        const newURL = '/dashboard/' + dateBack;
        window.location.replace(newURL);
    };

    const searchForCustomer = async (event) => {
        const searchValue = $('#searchValue').val();
        const response = await fetch(`/api/customers/phone/${searchValue}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        returnData = await response.json();
        if (response.ok) {
            custId = returnData.custData.id;
            document.location.replace(`/customer/${custId}`);
        } else {
            alert(response.statusText);
        }
    };

    document
        .querySelector('#show-date-left')
        .addEventListener('click', leftBtnHandler);

    document
        .querySelector('#show-date-right')
        .addEventListener('click', rightBtnHandler);

    document
        .querySelector('#search-customer')
        .addEventListener('click', searchForCustomer);

});