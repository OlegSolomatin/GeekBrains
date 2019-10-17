function loadResult() {
    const request = new XMLHttpRequest();
    request.open('GET', `https://www.travelpayouts.com/widgets_suggest_params?q=Из%20$MOW20в%20$NCE`, false);
    request.send();
    const originIata = JSON.parse(request.response).origin.iata;
    const destinationIata = JSON.parse(request.response).destination.iata;
    const paramps = `?origin=${originIata}&destination=${destinationIata}&one_way=${document.getElementById('one_way').checked}`;
    request.open('GET', `http://min-prices.aviasales.ru/calendar_preload${paramps}`, false);
    request.send();
    const allTickets = JSON.parse(request.response)['best_prices'];
    let tickets = [];
    var cheapestTicket;
    for (let i = 0; i < allTickets.length; i++) {
        for (let j = 0; j < allTickets.length; j++) {
            if (allTickets[i].value > allTickets[j].value) {
                let a = allTickets[i];
                allTickets[i] = allTickets[j];
                allTickets[j] = a;
            }
        }
    }
    for (prop in allTickets) {
        if (parseInt((allTickets[prop].depart_date).replace(/[-]/g, '')) >= 20191015 && parseInt((allTickets[prop].depart_date).replace(/[-]/g, '')) <= 20191030) {
            tickets[prop] = allTickets[prop];
        }
    }
    cheapestTicket = tickets[tickets.length - 1];
    try {
        $('#depart_date').text(`Ближайшая дата: ${cheapestTicket.depart_date}`);
        $('#gate').text(`Где купить билет: ${cheapestTicket.gate}`);
        $('#distance').text(`Расстояние перелёта: ${cheapestTicket.distance} километров`);
        $('#value').text(`Самая низкая цена: ${cheapestTicket.value} рублей`);
    } catch {
        $('#depart_date').text('Билетов по Вашему запросу не существует');
        $('#gate').text('');
        $('#distance').text('');
        $('#value').text('');
    }
}