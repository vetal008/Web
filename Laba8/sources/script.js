const {
    timer
} = rxjs;
const {
    filter,
    map,
    switchMap
} = rxjs.operators;
const {
    fromFetch
} = rxjs.fetch;
// pk_57b5ebfc1c98439baf983eb6367db5de 
const apiBase = 'https://cloud.iexapis.com/stable';
const token = prompt("Enter Your API key : ");

function quote(symbol, field) {
    return fromFetch(`${apiBase}/stock/${symbol}/quote/${field}?token=${token}`)
        .pipe(switchMap(res => res.json()));
}

const symbols = ['ibm', 'aaon', 'kodk', 'gmed', 'hack', 'hcacw', 'tsla', 'twtr', 'icad', 'iec', 'igov', 'iim', 'goog', 'kodk', 'msft', 'nflx', 'sbux', 'tsla', 'twtr'];

console.log(quote('aapl', 'companyName'))

function main() {
    const timer$ = timer(250, 100);
    const update$ = timer$.pipe(filter(x => x % 200 == 0));

    const table = document.getElementById('my-table');

    for (const symbol of symbols) {
        const tr = document.createElement('tr');

        const tdCompanyName = document.createElement('td');
        tr.appendChild(tdCompanyName);

        const tdSymbol = document.createElement('td');
        tr.appendChild(tdSymbol);

        const tdLatestPrice = document.createElement('td');
        tr.appendChild(tdLatestPrice);

        const tdChange = document.createElement('td');
        tr.appendChild(tdChange);

        table.appendChild(tr);

        // static
        console.log(quote(symbol, 'companyName')
            .subscribe(text => tdCompanyName.innerHTML = text));
        quote(symbol, 'symbol')
            .subscribe(text => tdSymbol.innerHTML = text);

        // update
        update$.subscribe(() => {
            quote(symbol, 'latestPrice')
                .subscribe(text => tdLatestPrice.innerHTML = text);
            quote(symbol, 'change')
                .subscribe(text => tdChange.innerHTML = text);
        });
    }

    const lastUpdateElement = document.getElementById('last-update');
    let lastUpdate = 0;

    update$.subscribe(() => {
        lastUpdate = 0.0;
    });

    timer$.subscribe(x => {
        lastUpdate += 0.1;
        lastUpdateElement.innerHTML = `Last Update: ${lastUpdate.toFixed(1)}s ago`;
    });
}

main();