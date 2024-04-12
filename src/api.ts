const COINPAPRICA_BASE = "https://api.coinpaprika.com/v1";
const NICO_BASE = "https://ohlcv-api.nomadcoders.workers.dev";

export function fetchCoins() {
  return fetch(`${COINPAPRICA_BASE}/coins`).then((res) => res.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${COINPAPRICA_BASE}/coins/${coinId}`).then((res) => res.json());
}

export function fetchCoinPrice(coinId: string) {
  return fetch(`${COINPAPRICA_BASE}/tickers/${coinId}`).then((res) =>
    res.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  return fetch(`${NICO_BASE}?coinId=${coinId}`).then((res) => res.json());
}
