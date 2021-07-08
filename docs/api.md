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
  "price": 0.0,
  "last_updated_at": null,
  "stake_participating_rate": 47.88,
  "stake_apr": 14.21,
  "data": []
}
```

```
curl $URL/coin_market_charts/dot

{
  "symbol": "DOT",
  "price": 0.0,
  "last_updated_at": null,
  "stake_participating_rate": 62.83,
  "stake_apr": 13.25,
  "data": []
}
```

```
curl $URL/coin_market_charts/apn

{
  "symbol": "APN",
  "price": 0.0,
  "last_updated_at": null,
  "stake_participating_rate": 0.0,
  "stake_apr": 0.0,
  "data": []
}
```


### campaigns 是list

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
  "announcements": [],
  "pagination": {
    "current_page": 1,
    "total_page": 1,
    "total_count": 0,
    "per_page": 20
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