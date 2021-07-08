## url

URL=http://x.x.x.x:3000/

## api

### ping
curl $URL/ping

{
  "scanned_kusama_block_number": 7687000,
  "latest_scan_kusama_at": "2021-07-05T09:02:48.781Z",
  "latest_fetch_coin_price_at": null
}

### coin_market_charts 价格曲线

```
curl $URL/coin_market_charts/ksm

{
  "symbol": "KSM",
  "price": 214.8381,
  "last_updated_at": "2021-07-08T08:00:00.000Z",
  "stake_participating_rate": 47.88,
  "stake_apr": 14.21,
  "data": [
    ["2021-06-24T09:00:00.000Z", 193.2729],
    ["2021-06-24T10:00:00.000Z", 195.6996],
    ["2021-07-08T08:00:00.000Z", 214.8381]
  ]
}
```

```
curl $URL/coin_market_charts/dot

{
  "symbol": "DOT",
  "price": 15.4464,
  "last_updated_at": "2021-07-08T08:00:00.000Z",
  "stake_participating_rate": 62.83,
  "stake_apr": 13.25,
  "data": [
    ["2021-06-24T09:00:00.000Z", 15.7872],
    ["2021-07-08T07:00:00.000Z", 15.8741],
    ["2021-07-08T08:00:00.000Z", 15.4464]
  ]
}
```

```
curl $URL/coin_market_charts/apron

{
  "symbol": "APRON",
  "price": 0.0769,
  "last_updated_at": "2021-07-08T08:00:00.000Z",
  "stake_participating_rate": 0.0,
  "stake_apr": 0.0,
  "data": [
    ["2021-06-24T09:00:00.000Z", 0.0808],
    ["2021-06-24T10:00:00.000Z", 0.0818],
    ["2021-07-08T08:00:00.000Z", 0.0769]
  ]
}
```

### campaigns

```
curl $URL/campaigns

{
  "campaigns": [{
    "id": 1,
    "name": "Apron Kusama crowdloan",
    "parachain_id": "2004",
    "cap": 150000.0,
    "hard_cap": 150000000.0,
    "start_block": 7687000,
    "end_block": 100000000,
    "total_reward_amount": "100,000,000 PHA",
    "raised_amount": 0.0
  }, {
    "id": 2,
    "name": "Apron test crowdloan",
    "parachain_id": "2000",
    "cap": 15000.0,
    "hard_cap": 100000.0,
    "start_block": 1,
    "end_block": 22000,
    "total_reward_amount": "100,000,000 PHA",
    "raised_amount": 0.0
  }]
}
```

```
curl $URL/campaigns/1

{
  "campaign": {
    "id": 1,
    "name": "Apron Kusama crowdloan",
    "parachain_id": "2004",
    "cap": 150000.0,
    "hard_cap": 150000000.0,
    "start_block": 7687000,
    "end_block": 100000000,
    "total_reward_amount": "100,000,000 PHA",
    "raised_amount": 0.0
  },
  "meta": {
    "milestones": [],
    "total_invited_count": 0,
    "early_bird_until": "2021-06-23",
    "estimate_first_releasing_in": "2021-08-01",
    "estimate_end_releasing_in": "2022-07-01",
    "first_releasing_percentage": 34,
    "estimate_releasing_days_interval": 30,
    "estimate_releasing_percentage_per_interval": 5.9281,
    "contribution_chart": []
  }
}
```

```
curl $URL/campaigns/1/competitors

{
  "competitors": [],
  "meta": {
    "raised_amount": 0.0
  }
}
```

```
curl $URL/campaigns/1/announcements

{
  "meta": {},
  "announcements": [{
    "id": 1,
    "title": "demmmmmmo",
    "link": "http://apron.network/",
    "body": "DECENTRALIZED INFRASTRUCTURE SERVICE NETWORK",
    "locale": "en",
    "published_at": "2021-07-07 17:07:27 +0800"
  }, {
    "id": 3,
    "title": "mmm1",
    "link": "so.com",
    "body": "qwertyuiop",
    "locale": "en",
    "published_at": "2021-07-07 17:07:27 +0800"
  }],
  "pagination": {
    "current_page": 1,
    "total_page": 1,
    "total_count": 2,
    "per_page": 2
  }
}
```

```
curl $URL/campaigns/1/announcements?locale=zh

{
  "meta": {},
  "announcements": [{
    "id": 2,
    "title": "123",
    "link": "https://www.so.com/",
    "body": "123",
    "locale": "zh",
    "published_at": "2021-07-07 17:08:47 +0800"
  }],
  "pagination": {
    "current_page": 1,
    "total_page": 1,
    "total_count": 1,
    "per_page": 1
  }
}
```

```
curl $URL/campaigns/1/contributions

{
  "meta": {},
  "contributions": [],
  "pagination": {
    "current_page": 1,
    "total_page": 1,
    "total_count": 0,
    "per_page": 20
  }
}
```

```
curl $URL/campaigns/1/contributors

{
  "meta": {},
  "contributors": [],
  "pagination": {
    "current_page": 1,
    "total_page": 1,
    "total_count": 0,
    "per_page": 20
  }
}
```

```
curl $URL/campaigns/1/contributors/1

no data
```