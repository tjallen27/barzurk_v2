const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Job = require('../models/job');
const User = require('../models/user');

Job.collection.drop();
User.collection.drop();

User
  .create([{
    pubName: 'The Rise',
    address: {
      streetNumber: '49',
      street: 'Lavender Gardens',
      city: 'London',
      postcode: 'SW11 1DJ',
      country: 'UK',
      lat: '51.4633967',
      lng: '-0.16234940000003917'
    },
    email: '1@1.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    pubName: 'Tuk Cho',
    address: {
      streetNumber: '28-30',
      street: 'New Broadway',
      city: 'London',
      postcode: 'W5 2XA',
      country: 'UK',
      lat: '51.5133295',
      lng: '-0.3061314000000266'
    },
    email: '2@2.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    pubName: 'Round midnight Jazz & Blues Bar',
    address: {
      streetNumber: '13',
      street: 'Liverpool Road',
      city: 'London',
      postcode: 'N1 0RW',
      country: 'UK',
      lat: '51.5337665',
      lng: '-0.10714870000003884'
    },
    email: '3@3.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    pubName: '+venture',
    address: {
      streetNumber: '91a',
      street: 'Battersea Rise',
      city: 'London',
      postcode: 'SW11 1HW',
      country: 'UK',
      lat: '51.4606132',
      lng: '-0.1677875000000313'
    },
    email: '4@4.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    pubName: 'The +Venture',
    address: {
      streetNumber: '5',
      street: 'Fernlea Road',
      city: 'London',
      postcode: 'SW12 9RT',
      country: 'UK',
      lat: '51.4428691',
      lng: '-0.1482224999999744'
    },
    email: '5@5.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    pubName: 'The 11th Commandment',
    address: {
      streetNumber: '58',
      street: 'Carter Lane',
      city: 'London',
      postcode: 'EC4V 5EA',
      country: 'UK',
      lat: '51.5133087',
      lng: '-0.10159790000000157'
    },
    email: '6@6.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    pubName: '12 Bar Club',
    address: {
      streetNumber: '12',
      street: 'Denmark Street',
      city: 'London',
      postcode: 'WC2H 8NL',
      country: 'UK',
      lat: '51.5155965',
      lng: '-0.1292475000000195'
    },
    email: '7@7.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    pubName: '125 Church Street ',
    address: {
      streetNumber: '125',
      street: 'Church Street',
      city: 'London',
      postcode: 'N16 0UH',
      country: 'UK',
      lat: '51.56157899999999',
      lng: '-0.08104900000000725'
    },
    email: '8@8.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: '127',
    address: {
      streetNumber: '127',
      street: 'Dulwich Road',
      city: 'London',
      postcode: 'SE24 0NG',
      country: 'UK',
      lat: '51.4527756',
      lng: '-0.1030163000000357'
    },
    email: '9@9.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: '1802',
    address: {
      streetNumber: 'Museum in Docklands No. 1 Warehouse',
      street: 'West India Quay',
      city: 'London',
      postcode: 'E14 4AL',
      country: 'UK',
      lat: '51.507645',
      lng: '-0.023844199999984994'
    },
    email: '10@10.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: 'The Three Lords',
    address: {
      streetNumber: '27',
      street: 'Minories',
      city: 'London',
      postcode: 'EC3N 1DE',
      country: 'UK',
      lat: '51.51252969999999',
      lng: '-0.07531410000001415'
    },
    email: '11@11.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: '19:20',
    address: {
      streetNumber: '19-20',
      street: 'Great Sutton Street',
      city: 'London',
      postcode: 'EC1V 0NB',
      country: 'UK',
      lat: '51.52330569999999',
      lng: '-0.10142719999998917'
    },
    email: '12@12.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: '93 Feet East',
    address: {
      streetNumber: '150',
      street: 'Brick Lane',
      city: 'London',
      postcode: 'E1 6RU',
      country: 'UK',
      lat: '51.5217205',
      lng: '-0.07151029999999992'
    },
    email: '13@13.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: 'A Bar 2 Far',
    address: {
      streetNumber: '40',
      street: 'Mitcham Rd',
      city: 'London',
      postcode: 'SW17 9NA',
      country: 'UK',
      lat: '51.4268303',
      lng: '-0.16678009999998267'
    },
    email: '14@14.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: 'Abacus ',
    address: {
      streetNumber: '24',
      street: 'Cornhill',
      city: 'London',
      postcode: 'EC3V 3ND',
      country: 'UK',
      lat: '51.5132084',
      lng: '-0.08711790000006658'
    },
    email: '15@15.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: 'The Abbeville',
    address: {
      streetNumber: '67-69',
      street: 'Abbeville Rd,',
      city: 'London',
      postcode: 'SW4 9JW',
      country: 'UK',
      lat: '51.4548383',
      lng: '-0.13970659999995405'
    },
    email: '16@16.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: 'The Abbey ',
    address: {
      streetNumber: '124',
      street: 'Kentish Town Road',
      city: 'London',
      postcode: 'NW1 9QB',
      country: 'UK',
      lat: '51.5461774',
      lng: '-0.14153609999993932'
    },
    email: '17@17.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: 'The Abbey',
    address: {
      streetNumber: ' ',
      street: 'Abbey Orchard St',
      city: 'London',
      postcode: 'SW1P 2LU',
      country: 'UK',
      lat: '51.49823790000001',
      lng: '-0.1313126000000011'
    },
    email: '18@18.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: 'The Abbey Arms ',
    address: {
      streetNumber: '31',
      street: 'Wilton Road',
      city: 'London',
      postcode: 'SE2 9RH',
      country: 'UK',
      lat: '51.4903017',
      lng: '0.1210995000000139'
    },
    email: '19@19.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: 'The Absolut Ice Bar',
    address: {
      streetNumber: '31 - 33',
      street: 'Heddon Street',
      city: 'London',
      postcode: 'W1B 4BN',
      country: 'UK',
      lat: '51.5113075',
      lng: '-0.1400155999999697'
    },
    email: '20@20.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
    return Job
      .create([{
        title: 'Bar staff',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips.',
        rate: 8,
        createdBy: users[0]
      },{
        title: 'Bar staff',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips.',
        rate: 9,
        createdBy: users[1]
      },{
        title: 'Bar staff',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 12,
        createdBy: users[2]
      },{
        title: 'Bar staff',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[3]
      },{
        title: 'Bar staff',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[4]
      },{
        title: 'Bar staff',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[5]
      },{
        title: 'Bar staff',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[6]
      },{
        title: 'Waiter',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[7]
      },{
        title: 'Waiter',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[8]
      },{
        title: 'Waiter',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[9]
      },{
        title: 'Waiter',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[10]
      },{
        title: 'Waiter',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[11]
      },{
        title: 'Waiter',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[12]
      },{
        title: 'Waiter',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[13]
      },{
        title: 'Chef',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[14]
      },{
        title: 'Chef',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[15]
      },{
        title: 'Kitchen porter',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[16]
      },{
        title: 'Kitchen porter',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[17]
      },{
        title: 'Kitchen porter',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[18]
      },{
        title: 'Kitchen porter',
        description: 'We are looking for an enthusiastic bartender to provide an excellent guest drinking experience. Good bartenders will be able to create classic and innovative drinks exceeding customers’ needs and expectations. Compensation includes salary and tips. ',
        rate: 9,
        createdBy: users[19]
      }]);
  })
  .then((jobs) => console.log(`${jobs.length} jobs created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
