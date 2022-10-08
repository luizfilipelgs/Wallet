/* eslint-disable sonarjs/no-duplicate-string */

const mockData2 = {
  user: {
    email: 'teste@test.com'
  },
  wallet: {
    currencies: [
      'USD',
      'CAD',
      'GBP',
      'ARS',
      'BTC',
      'LTC',
      'EUR',
      'JPY',
      'CHF',
      'AUD',
      'CNY',
      'ILS',
      'ETH',
      'XRP',
      'DOGE'
    ],
    expenses: [
      {
        value: '10',
        description: 'NuBank Conta',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        exchangeRates: {
          USD: {
            code: 'USD',
            codein: 'BRL',
            name: 'Dólar Americano/Real Brasileiro',
            high: '5.2523',
            low: '5.1957',
            varBid: '-0.0194',
            pctChange: '-0.37',
            bid: '5.201',
            ask: '5.2035',
            timestamp: '1665176396',
            create_date: '2022-10-07 17:59:56'
          },
          CAD: {
            code: 'CAD',
            codein: 'BRL',
            name: 'Dólar Canadense/Real Brasileiro',
            high: '3.8202',
            low: '3.7868',
            varBid: '-0.0092',
            pctChange: '-0.24',
            bid: '3.7868',
            ask: '3.7899',
            timestamp: '1665176393',
            create_date: '2022-10-07 17:59:53'
          },
          GBP: {
            code: 'GBP',
            codein: 'BRL',
            name: 'Libra Esterlina/Real Brasileiro',
            high: '5.8727',
            low: '5.7656',
            varBid: '-0.058',
            pctChange: '-0.99',
            bid: '5.7663',
            ask: '5.7712',
            timestamp: '1665176394',
            create_date: '2022-10-07 17:59:54'
          },
          ARS: {
            code: 'ARS',
            codein: 'BRL',
            name: 'Peso Argentino/Real Brasileiro',
            high: '0.0352',
            low: '0.0348',
            varBid: '-0.0001',
            pctChange: '-0.29',
            bid: '0.0349',
            ask: '0.0349',
            timestamp: '1665176394',
            create_date: '2022-10-07 17:59:54'
          },
          BTC: {
            code: 'BTC',
            codein: 'BRL',
            name: 'Bitcoin/Real Brasileiro',
            high: '102.814',
            low: '101.8',
            varBid: '-715',
            pctChange: '-0.7',
            bid: '101.822',
            ask: '101.849',
            timestamp: '1665264325',
            create_date: '2022-10-08 18:25:25'
          },
          LTC: {
            code: 'LTC',
            codein: 'BRL',
            name: 'Litecoin/Real Brasileiro',
            high: '280.96',
            low: '275.8',
            varBid: '1.22',
            pctChange: '0.44',
            bid: '277.09',
            ask: '278.58',
            timestamp: '1665264326',
            create_date: '2022-10-08 18:25:26'
          },
          EUR: {
            code: 'EUR',
            codein: 'BRL',
            name: 'Euro/Real Brasileiro',
            high: '5.1265',
            low: '5.0668',
            varBid: '-0.0417',
            pctChange: '-0.82',
            bid: '5.0694',
            ask: '5.073',
            timestamp: '1665176395',
            create_date: '2022-10-07 17:59:55'
          },
          JPY: {
            code: 'JPY',
            codein: 'BRL',
            name: 'Iene Japonês/Real Brasileiro',
            high: '0.03616',
            low: '0.03578',
            varBid: '-0.0002',
            pctChange: '-0.56',
            bid: '0.03579',
            ask: '0.03581',
            timestamp: '1665176386',
            create_date: '2022-10-07 17:59:46'
          },
          CHF: {
            code: 'CHF',
            codein: 'BRL',
            name: 'Franco Suíço/Real Brasileiro',
            high: '5.286',
            low: '5.2281',
            varBid: '-0.0389',
            pctChange: '-0.74',
            bid: '5.2292',
            ask: '5.234',
            timestamp: '1665176393',
            create_date: '2022-10-07 17:59:53'
          },
          AUD: {
            code: 'AUD',
            codein: 'BRL',
            name: 'Dólar Australiano/Real Brasileiro',
            high: '3.3613',
            low: '3.3087',
            varBid: '-0.0319',
            pctChange: '-0.95',
            bid: '3.3125',
            ask: '3.3151',
            timestamp: '1665176394',
            create_date: '2022-10-07 17:59:54'
          },
          CNY: {
            code: 'CNY',
            codein: 'BRL',
            name: 'Yuan Chinês/Real Brasileiro',
            high: '0.7324',
            low: '0.7312',
            varBid: '-0.0027',
            pctChange: '-0.37',
            bid: '0.7314',
            ask: '0.7315',
            timestamp: '1665176344',
            create_date: '2022-10-07 17:59:04'
          },
          ILS: {
            code: 'ILS',
            codein: 'BRL',
            name: 'Novo Shekel Israelense/Real Brasileiro',
            high: '1.4707',
            low: '1.4667',
            varBid: '-0.0122',
            pctChange: '-0.83',
            bid: '1.4675',
            ask: '1.4678',
            timestamp: '1665176346',
            create_date: '2022-10-07 17:59:06'
          },
          ETH: {
            code: 'ETH',
            codein: 'BRL',
            name: 'Ethereum/Real Brasileiro',
            high: '7.01093',
            low: '6.93066',
            varBid: '-49.36',
            pctChange: '-0.71',
            bid: '6.93212',
            ask: '6.93804',
            timestamp: '1665264324',
            create_date: '2022-10-08 18:25:24'
          },
          XRP: {
            code: 'XRP',
            codein: 'BRL',
            name: 'XRP/Real Brasileiro',
            high: '2.77',
            low: '2.67',
            varBid: '0.03',
            pctChange: '1.18',
            bid: '2.72',
            ask: '2.72',
            timestamp: '1665264232',
            create_date: '2022-10-08 18:23:52'
          },
          DOGE: {
            code: 'DOGE',
            codein: 'BRL',
            name: 'Dogecoin/Real Brasileiro',
            high: '0.325241',
            low: '0.323037',
            varBid: '-0.00034701',
            pctChange: '-0.11',
            bid: '0.323241',
            ask: '0.323241',
            timestamp: '1665264233',
            create_date: '2022-10-08 18:23:53'
          }
        },
        id: 2
      },
      {
        value: '5',
        description: 'pizza',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        exchangeRates: {
          USD: {
            code: 'USD',
            codein: 'BRL',
            name: 'Dólar Americano/Real Brasileiro',
            high: '5.2523',
            low: '5.1957',
            varBid: '-0.0194',
            pctChange: '-0.37',
            bid: '5.201',
            ask: '5.2035',
            timestamp: '1665176396',
            create_date: '2022-10-07 17:59:56'
          },
          CAD: {
            code: 'CAD',
            codein: 'BRL',
            name: 'Dólar Canadense/Real Brasileiro',
            high: '3.8202',
            low: '3.7868',
            varBid: '-0.0092',
            pctChange: '-0.24',
            bid: '3.7868',
            ask: '3.7899',
            timestamp: '1665176393',
            create_date: '2022-10-07 17:59:53'
          },
          GBP: {
            code: 'GBP',
            codein: 'BRL',
            name: 'Libra Esterlina/Real Brasileiro',
            high: '5.8727',
            low: '5.7656',
            varBid: '-0.058',
            pctChange: '-0.99',
            bid: '5.7663',
            ask: '5.7712',
            timestamp: '1665176394',
            create_date: '2022-10-07 17:59:54'
          },
          ARS: {
            code: 'ARS',
            codein: 'BRL',
            name: 'Peso Argentino/Real Brasileiro',
            high: '0.0352',
            low: '0.0348',
            varBid: '-0.0001',
            pctChange: '-0.29',
            bid: '0.0349',
            ask: '0.0349',
            timestamp: '1665176394',
            create_date: '2022-10-07 17:59:54'
          },
          BTC: {
            code: 'BTC',
            codein: 'BRL',
            name: 'Bitcoin/Real Brasileiro',
            high: '102.814',
            low: '101.8',
            varBid: '-715',
            pctChange: '-0.7',
            bid: '101.822',
            ask: '101.849',
            timestamp: '1665264325',
            create_date: '2022-10-08 18:25:25'
          },
          LTC: {
            code: 'LTC',
            codein: 'BRL',
            name: 'Litecoin/Real Brasileiro',
            high: '280.96',
            low: '275.8',
            varBid: '1.22',
            pctChange: '0.44',
            bid: '277.09',
            ask: '278.58',
            timestamp: '1665264326',
            create_date: '2022-10-08 18:25:26'
          },
          EUR: {
            code: 'EUR',
            codein: 'BRL',
            name: 'Euro/Real Brasileiro',
            high: '5.1265',
            low: '5.0668',
            varBid: '-0.0417',
            pctChange: '-0.82',
            bid: '5.0694',
            ask: '5.073',
            timestamp: '1665176395',
            create_date: '2022-10-07 17:59:55'
          },
          JPY: {
            code: 'JPY',
            codein: 'BRL',
            name: 'Iene Japonês/Real Brasileiro',
            high: '0.03616',
            low: '0.03578',
            varBid: '-0.0002',
            pctChange: '-0.56',
            bid: '0.03579',
            ask: '0.03581',
            timestamp: '1665176386',
            create_date: '2022-10-07 17:59:46'
          },
          CHF: {
            code: 'CHF',
            codein: 'BRL',
            name: 'Franco Suíço/Real Brasileiro',
            high: '5.286',
            low: '5.2281',
            varBid: '-0.0389',
            pctChange: '-0.74',
            bid: '5.2292',
            ask: '5.234',
            timestamp: '1665176393',
            create_date: '2022-10-07 17:59:53'
          },
          AUD: {
            code: 'AUD',
            codein: 'BRL',
            name: 'Dólar Australiano/Real Brasileiro',
            high: '3.3613',
            low: '3.3087',
            varBid: '-0.0319',
            pctChange: '-0.95',
            bid: '3.3125',
            ask: '3.3151',
            timestamp: '1665176394',
            create_date: '2022-10-07 17:59:54'
          },
          CNY: {
            code: 'CNY',
            codein: 'BRL',
            name: 'Yuan Chinês/Real Brasileiro',
            high: '0.7324',
            low: '0.7312',
            varBid: '-0.0027',
            pctChange: '-0.37',
            bid: '0.7314',
            ask: '0.7315',
            timestamp: '1665176344',
            create_date: '2022-10-07 17:59:04'
          },
          ILS: {
            code: 'ILS',
            codein: 'BRL',
            name: 'Novo Shekel Israelense/Real Brasileiro',
            high: '1.4707',
            low: '1.4667',
            varBid: '-0.0122',
            pctChange: '-0.83',
            bid: '1.4675',
            ask: '1.4678',
            timestamp: '1665176346',
            create_date: '2022-10-07 17:59:06'
          },
          ETH: {
            code: 'ETH',
            codein: 'BRL',
            name: 'Ethereum/Real Brasileiro',
            high: '7.01093',
            low: '6.93066',
            varBid: '-49.36',
            pctChange: '-0.71',
            bid: '6.93212',
            ask: '6.93804',
            timestamp: '1665264324',
            create_date: '2022-10-08 18:25:24'
          },
          XRP: {
            code: 'XRP',
            codein: 'BRL',
            name: 'XRP/Real Brasileiro',
            high: '2.77',
            low: '2.67',
            varBid: '0.03',
            pctChange: '1.18',
            bid: '2.72',
            ask: '2.72',
            timestamp: '1665264232',
            create_date: '2022-10-08 18:23:52'
          },
          DOGE: {
            code: 'DOGE',
            codein: 'BRL',
            name: 'Dogecoin/Real Brasileiro',
            high: '0.325241',
            low: '0.323037',
            varBid: '-0.00034701',
            pctChange: '-0.11',
            bid: '0.323241',
            ask: '0.323241',
            timestamp: '1665264233',
            create_date: '2022-10-08 18:23:53'
          }
        },
        id: 3
      }
    ],
    editor: false,
    idToEdit: 0,
    total: 78.0525,
    idGeral: 4,
    exchangeRates: {
      USD: {
        code: 'USD',
        codein: 'BRL',
        name: 'Dólar Americano/Real Brasileiro',
        high: '5.2523',
        low: '5.1957',
        varBid: '-0.0194',
        pctChange: '-0.37',
        bid: '5.201',
        ask: '5.2035',
        timestamp: '1665176396',
        create_date: '2022-10-07 17:59:56'
      },
      CAD: {
        code: 'CAD',
        codein: 'BRL',
        name: 'Dólar Canadense/Real Brasileiro',
        high: '3.8202',
        low: '3.7868',
        varBid: '-0.0092',
        pctChange: '-0.24',
        bid: '3.7868',
        ask: '3.7899',
        timestamp: '1665176393',
        create_date: '2022-10-07 17:59:53'
      },
      GBP: {
        code: 'GBP',
        codein: 'BRL',
        name: 'Libra Esterlina/Real Brasileiro',
        high: '5.8727',
        low: '5.7656',
        varBid: '-0.058',
        pctChange: '-0.99',
        bid: '5.7663',
        ask: '5.7712',
        timestamp: '1665176394',
        create_date: '2022-10-07 17:59:54'
      },
      ARS: {
        code: 'ARS',
        codein: 'BRL',
        name: 'Peso Argentino/Real Brasileiro',
        high: '0.0352',
        low: '0.0348',
        varBid: '-0.0001',
        pctChange: '-0.29',
        bid: '0.0349',
        ask: '0.0349',
        timestamp: '1665176394',
        create_date: '2022-10-07 17:59:54'
      },
      BTC: {
        code: 'BTC',
        codein: 'BRL',
        name: 'Bitcoin/Real Brasileiro',
        high: '102.649',
        low: '101.8',
        varBid: '-765',
        pctChange: '-0.75',
        bid: '101.8',
        ask: '101.8',
        timestamp: '1665264934',
        create_date: '2022-10-08 18:35:34'
      },
      LTC: {
        code: 'LTC',
        codein: 'BRL',
        name: 'Litecoin/Real Brasileiro',
        high: '280.96',
        low: '275.8',
        varBid: '2.17',
        pctChange: '0.79',
        bid: '278.17',
        ask: '278.85',
        timestamp: '1665265047',
        create_date: '2022-10-08 18:37:27'
      },
      EUR: {
        code: 'EUR',
        codein: 'BRL',
        name: 'Euro/Real Brasileiro',
        high: '5.1265',
        low: '5.0668',
        varBid: '-0.0417',
        pctChange: '-0.82',
        bid: '5.0694',
        ask: '5.073',
        timestamp: '1665176395',
        create_date: '2022-10-07 17:59:55'
      },
      JPY: {
        code: 'JPY',
        codein: 'BRL',
        name: 'Iene Japonês/Real Brasileiro',
        high: '0.03616',
        low: '0.03578',
        varBid: '-0.0002',
        pctChange: '-0.56',
        bid: '0.03579',
        ask: '0.03581',
        timestamp: '1665176386',
        create_date: '2022-10-07 17:59:46'
      },
      CHF: {
        code: 'CHF',
        codein: 'BRL',
        name: 'Franco Suíço/Real Brasileiro',
        high: '5.286',
        low: '5.2281',
        varBid: '-0.0389',
        pctChange: '-0.74',
        bid: '5.2292',
        ask: '5.234',
        timestamp: '1665176393',
        create_date: '2022-10-07 17:59:53'
      },
      AUD: {
        code: 'AUD',
        codein: 'BRL',
        name: 'Dólar Australiano/Real Brasileiro',
        high: '3.3613',
        low: '3.3087',
        varBid: '-0.0319',
        pctChange: '-0.95',
        bid: '3.3125',
        ask: '3.3151',
        timestamp: '1665176394',
        create_date: '2022-10-07 17:59:54'
      },
      CNY: {
        code: 'CNY',
        codein: 'BRL',
        name: 'Yuan Chinês/Real Brasileiro',
        high: '0.7324',
        low: '0.7312',
        varBid: '-0.0027',
        pctChange: '-0.37',
        bid: '0.7314',
        ask: '0.7315',
        timestamp: '1665176344',
        create_date: '2022-10-07 17:59:04'
      },
      ILS: {
        code: 'ILS',
        codein: 'BRL',
        name: 'Novo Shekel Israelense/Real Brasileiro',
        high: '1.4707',
        low: '1.4667',
        varBid: '-0.0122',
        pctChange: '-0.83',
        bid: '1.4675',
        ask: '1.4678',
        timestamp: '1665176346',
        create_date: '2022-10-07 17:59:06'
      },
      ETH: {
        code: 'ETH',
        codein: 'BRL',
        name: 'Ethereum/Real Brasileiro',
        high: '7.01093',
        low: '6.93066',
        varBid: '-65.12',
        pctChange: '-0.93',
        bid: '6.93211',
        ask: '6.93211',
        timestamp: '1665265031',
        create_date: '2022-10-08 18:37:11'
      },
      XRP: {
        code: 'XRP',
        codein: 'BRL',
        name: 'XRP/Real Brasileiro',
        high: '2.77',
        low: '2.67',
        varBid: '0.03',
        pctChange: '1.22',
        bid: '2.72',
        ask: '2.72',
        timestamp: '1665264892',
        create_date: '2022-10-08 18:34:52'
      },
      DOGE: {
        code: 'DOGE',
        codein: 'BRL',
        name: 'Dogecoin/Real Brasileiro',
        high: '0.325241',
        low: '0.320333',
        varBid: '-0.00298401',
        pctChange: '-0.92',
        bid: '0.320604',
        ask: '0.320604',
        timestamp: '1665265921',
        create_date: '2022-10-08 18:52:01'
      }
    }
  }
}

export default mockData2;
