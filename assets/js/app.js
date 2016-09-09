/**
* Application
*
* Description
*/
var app = angular.module('portfolio', []);

app.controller('ViewPortfolioController', function($scope) {
  $scope.portfolios = [
    {
      title: 'Duke Advising Network',
      img: 'du-advising.png',
      url: 'https://trinity.duke.edu/',
      type: 'drupal',
      color: '#59ABE3',
      data: {
          description: 'In order to understand student learning which occurs both in and out of the classroom, teach and guide students through an interactive process of observation and performance, allow students and mentors to work together to gather and assess artifacts and evidence of student learning, we helped Duke University launch a student advising network interactive website for the coming academic year.',
      }
    },
    {
      title: 'Stem Cells Portal',
      img: 'amp-stemcell.png',
      url: 'http://www.stemcellsportal.com/',
      type: 'drupal',
      color: '#4D8FAC',
      data: {
          description: "Articles for STEM CELLS and STEM CELLS Translational Medicine are embargoed for release until 9 a.m. Eastern U.S. time on the day the article is posted online. This policy applies to members of the media, authors, institutions' public information officers, and the public. Authors may not discuss their work with the media until 1 week before the mailing date or 1 week before online posting of the article, whichever is earlier, and must ensure that the media representatives agree to abide by the embargo policy. STEM CELLS Translational Medicine may refuse to publish a manuscript, despite acceptance for publication, if it has been prematurely released to the press.",
      }
    },
    {
      title: 'Prepare',
      img: 'pd-prepare.png',
      url: 'https://www.prepareforyourcare.org/',
      type: 'laravel',
      color: '#22A7F0',
      data: {
          description: 'All online communications via PREPARE are fully confidential. PREPARE collects personal information for use on the website. When you register with PREPARE and sign in, you are not anonymous to us. PREPARE uses information for the following general purposes: to customize the content of the website, fulfill your requests, improve our services, contact you, conduct research, and provide anonymous reporting for internal and external purposes.',
      }
    },
    {
      title: 'Mills Park Boosters',
      img: 'mpms.png',
      url: 'http://millsparkathletics.com/',
      type: 'wordpress',
      color: '#48929B',
      data: {
          description: 'Connects parents with the Mills Park Athletic Boosters Club, we developed a simple website that is completely mobile-friendly to allow parents to connect on the go.',
      }
    },
    {
      title: 'New Stone Realty',
      img: 'nsr-realty.png',
      url: 'http://newstonerealty.com/',
      type: 'HTML',
      color: '#4B77BE',
      data: {
          description: 'We build trusted partnerships - for life. We care, and it shows. Most of our new clients are referrals from past clients. Our clients return to us for advice, recommendations, and re-buying and selling because they know that we "have their back" - every step of the way.',
      }
    },
    {
      title: 'Sagpools',
      img: 'sagpools.png',
      url: 'http://sagpools.net/',
      type: 'wordpress',
      color: '#22A7F0',
      data: {
          description: 'In order to create a central website to provide a description of services and previous projects for prospective clients.',
      }
    },
    {
      title: 'Collections JA',
      img: 'collectionsja.png',
      url: 'http://zburk.x10.mx/collectionsja/',
      type: 'wordpress',
      color: '#5D8CAE',
      data: {
          description: 'A photography site for a photographer based in Cary, NC seeking to build a portfolio.',
      }
    },
    {
      title: 'Barter Street',
      img: 'barterstreet.png',
      url: 'http://zburk.x10.mx/bs-wp/',
      type: 'wordpress',
      color: '#19B5FE',
      data: {
          description: 'This is a place to sell, rent, swap and share goods and services with the other members of the marketplace.',
      }
    },
    {
      title: 'MBolden Ministries',
      img: 'mbolden.png',
      url: 'http://mboldenministries.com/',
      type: 'wordpress',
      color: '#4183D7',
      data: {
          description: "Melissa's passions are Jesus, her family, teaching math and emboldening others to walk in their God-given gifts. Melissa loves to teach on God's love, the power of grace, and who we are in Christ. She loves to empower the Body of Christ to walk in freedom from fear and depression. Melissa can often be found writing women's bible studies and leading women into a deeper revelation of the Father's love through weekly bible studies and regular speaking engagements."
      }
    },
    {
      title: 'Hope Chapel',
      img: 'hopenc.png',
      url: 'http://www.hopenc.org/',
      type: 'wordpress',
      color: '#4183D7',
      data: {
          description: ""
      }
    }
  ];
});
