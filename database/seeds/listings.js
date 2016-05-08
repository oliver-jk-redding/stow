
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('listings').del(),

    // Inserts seed entries
    knex('listings').insert({
      renter_ID: 1,
      lister_ID: 2,
      suburb:'Te Aro',
      streetName:'Taranaki',
      streetNumber:'72,80',
      city:'Wellington',
      country:'New Zealand',
      size:'1.5 * 2.5 m',
      price:10,
      description: 'a real beauty of spot',
      negotiable: true,
      url: 'https://s-media-cache-ak0.pinimg.com/736x/72/fa/2d/72fa2d3b4d0c5d631c427dd0670d49c3.jpg',
      startDate:'2016-05-05',
      endDate:'2016-05-13',
      availability:true
    }),
    knex('listings').insert({
      renter_ID: 3,
      lister_ID: 2,
      suburb:'Te Aro',
      streetName:'Taranaki',
      streetNumber:'168',
      city:'Wellington',
      country:'New Zealand',
      size:'3 * 3 m',
      price:13,
      description: 'a real beauty of spot',
      negotiable: true,
      url: 'http://hsm-prod-designs.s3.amazonaws.com/wmFeJdz8ZN/f.jpg?hsid=AKBRGE1HGPGE2JL&ptype=3d',
      startDate:'2016-05-05',
      endDate:'2016-05-13',
      availability:true
    }),
    knex('listings').insert({
      renter_ID: 3,
      lister_ID: 2,
      suburb:'Aro Valley',
      streetName:'Aro Street',
      streetNumber:'96',
      city:'Wellington',
      country:'New Zealand',
      size:'2 * 3 m',
      price:15,
      description: 'a real beauty of spot',
      negotiable: true,
      url: 'http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=85911139',
      startDate:'2016-05-05',
      endDate:'2016-05-13',
      availability:true
    }),
    knex('listings').insert({
      renter_ID: 4,
      lister_ID: 2,
      suburb:'Thorndon',
      streetName:'Newman Terrace',
      streetNumber:'21',
      city:'Wellington',
      country:'New Zealand',
      size:'1 * 3 m',
      price:14,
      description: 'a real beauty of spot',
      negotiable: true,
      url: 'http://activerain.com/image_store/uploads/7/4/8/0/7/ar124933531970847.JPG',
      startDate:'2016-05-05',
      endDate:'2016-05-13',
      availability:true
    }),
    knex('listings').insert({
      renter_ID: 5,
      lister_ID: 2,
      suburb:'Kilbirnie',
      streetName:'Rongotai Rd',
      streetNumber:'46',
      city:'Wellington',
      country:'New Zealand',
      size:'1.5 * 3 m',
      price:8,
      description: 'a real beauty of spot',
      negotiable: true,
      url: 'https://s-media-cache-ak0.pinimg.com/236x/c6/4b/01/c64b01cebf363a86e361667e3fae32b7.jpg',
      startDate:'2016-05-05',
      endDate:'2016-05-13',
      availability:true
    }),
    knex('listings').insert({
      renter_ID: 6,
      lister_ID: 2,
      suburb:'Oriental Bay',
      streetName:'Oriental Parade',
      streetNumber:'246',
      city:'Wellington',
      country:'New Zealand',
      size:'3 * 2 m',
      price:13,
      description: 'a real beauty of spot',
      negotiable: true,
      url: 'http://1.bp.blogspot.com/_7romDtwkUxo/TU3Ih3_uUXI/AAAAAAAAAus/t040B7KeFkE/s1600/1st.jpg',
      startDate:'2016-05-05',
      endDate:'2016-05-13',
      availability:true
    }),
    knex('listings').insert({
      renter_ID: 7,
      lister_ID: 2,
      suburb:'Aro Valley',
      streetName:'Aro Street',
      streetNumber:'200',
      city:'WellingtonWellington',
      country:'New ZealandNew Zealand',
      size:'2 * 3 m',
      price:10,
      description: 'a real beauty of spot',
      negotiable: true,
      url: 'http://www.qbikinsurance.com/wp-content/uploads/2013/12/bigstock-Empty-garage-with-metal-roll-u-25573682.jpg',
      availability:true
    }),
    knex('listings').insert({
      renter_ID: 8,
      lister_ID: 2,
      suburb:'Hataitai',
      streetName:'Rata Rd',
      streetNumber:'8',
      city:'Wellington',
      country:'New Zealand',
      size:'4 * 3 m',
      price:17,
      description: 'a real beauty of spot',
      negotiable: true,
      url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ01GaDrYtUpAPxNEdXCd3kj3m1t3TqaADDayuCYAxesyZZ7Q09ow',
      startDate:'2016-05-05',
      endDate:'2016-05-13',
      availability:true
    }),
    knex('listings').insert({
      renter_ID: 9,
      lister_ID: 2,
      suburb:'Mount Victoria',
      streetName:'Brougham Street',
      streetNumber:'100',
      city:'Wellington',
      country:'New Zealand',
      size:'2.5 * 2.5 m',
      price:10,
      description: 'a real beauty of spot',
      negotiable: true,
      url: 'https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAMQAAAAJDdlYTYyNzZiLTZmMzMtNDg0Zi05MmQ4LTMwZmIxMzYxYzExMg.jpg'
      startDate:'2016-05-05',
      endDate:'2016-05-13',
      availability:true
    }),
    knex('listings').insert({
      renter_ID: 10,
      lister_ID: 2,
      suburb:'Brooklyn',
      streetName:'Washington Ave',
      streetNumber:'156',
      city:'Wellington',
      country:'New Zealand',
      size:'3 * 3 m',
      price:13,
      description: 'a real beauty of spot',
      negotiable: true,
      url: 'http://i2.istockimg.com/file_thumbview_approve/69015185/5/stock-photo-69015185-blue-empty-room-with-parquet-floor.jpg',
      startDate:'2016-05-05',
      endDate:'2016-05-13',
      availability:true
    }),
    knex('listings').insert({
      renter_ID: 11,
      lister_ID: 2,
      suburb:'Mount Cook',
      streetName:'Wallace St',
      streetNumber:'82',
      city:'Wellington',
      country:'New Zealand',
      size:'2 * 3 m',
      price:13,
      description: 'a real beauty of spot',
      negotiable: true,
      url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1B6U8bHy_X75N1MtUwMiTVaKDLuCi2B07fSlgWYR8CSqtHrS9',
      startDate:'2016-05-05',
      endDate:'2016-05-13',
      availability:true
    }),
    knex('listings').insert({
      renter_ID: 12,
      lister_ID: 2,
      suburb:'Mount Cook',
      streetName:'Tasman St',
      streetNumber:'165',
      city:'Wellington',
      country:'New Zealand',
      size:'2 * 5 m',
      price:13,
      description: 'a real beauty of spot',
      negotiable: true,
      url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSVMewHMPxQhyeebK9JLI-cWkIcL7gjdZWASiy0VzKjKw8ddf0P',
      startDate:'2016-05-05',
      endDate:'2016-05-13',
      availability:true
    }),
    knex('listings').insert({
      renter_ID: 13,
      lister_ID: 2,
      suburb:'Oriental Bay',
      streetName:'Oriental Parad',
      streetNumber:'322',
      city:'Wellington',
      country:'New Zealand',
      size:'1 * 3 m',
      price:7,
      description: 'a real beauty of spot',
      negotiable: true,
      url: 'http://il6.picdn.net/shutterstock/videos/13970903/thumb/1.jpg',
      startDate:'2016-05-05',
      endDate:'2016-05-13',
      availability:true
    }),
    knex('listings').insert({
      renter_ID: 14,
      lister_ID: 2,
      suburb:'Hataitai',
      streetName:'Belvedere Rd',
      streetNumber:'5',
      city:'Wellington',
      country:'New Zealand',
      size:'2 * 3 m',
      price:15,
      description: 'a real beauty of spot',
      negotiable: true,
      url: 'https://sizzlesays.files.wordpress.com/2012/06/empty-room.jpg',
      startDate:'2016-05-05',
      endDate:'2016-05-13',
      availability:true
    })
  );
};
