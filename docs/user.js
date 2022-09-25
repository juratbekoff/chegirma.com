
User =  [
   
   Register = {
         id:1,
         avatar: "https://chegirma.com/storage/app/uploads/public/5f5/cd5/6a7/thumb_613_250_250_0_0_auto.jpg",
         name: "Juratbek Xudayberganov",
         lastname: " Xudayberganov",
         username: "juratbek",
         password: "juratali",
         created_at: "2022-10-09, 20:19",
         updated_at: "2022-10-09, 20:19"
   },

   Create_order = {
         id: 1,
         userID: 2,
         productId: 3,
         fullname: "Juratbek Xudayberganov",
         mobile_phone: +998934671270,
         addresss: "Xorazm"
   },

   GetMyOrders = [
      {
         id: 1,
         userID: 2,
         productId: 3,
         fullname: "Juratbek Xudayberganov",
         mobile_phone: +998934671270,
         address: "Xorazm"
      },
      {
         id: 2,
         userID: 2,
         productId: 5,
         fullname: "Juratbek Xudayberganov",
         mobile_phone: +998934671270,
         address: "Xorazm"
      }
   ]
]

Ceo = [

   Auth = [

      // POST
      login = {
            username: "juratbek",
            password: "juratali",
            last_login: "2022-10-09, 20:19"
      },
   ],

   Dashboard = {
      newOrders: 122,
      accptedOrders: 124,
      delivering: 1421,
      deliveredOrders: 1354,
      cancelledOrders: 1242,
      dailyIncome: 12333,
      weeklyIncome: 1_200_000,
      monthlyIncome: 12_321_211, 
      yearlyIncome: 123_412_131,
      totatlIncome: 132_412_323,
      usersCount: 1234,
      operatorsCount: 12,
      sellersCount: 123,
   },

   Products = [

      Add_product = {
         categoryId: 2,
         userID: 3,
         product_name: "Kirmashina",
         descr: "Ushbu mahsulot temirdan ishlangan, bla bla bka",
         quantity: 123,
         ads_link: "https://t.me/chegirmacom/123",
         cost: 150000,
         admin_bonus: 40000, 
         operator_bonus: 5000,
         isActive: true,
         main_image: "https://t.me/chegirmacom/123",
         images: [
            "https://chegirma.com/storage/app/uploads/public/5f5/cd5/6a7/thumb_613_250_250_0_0_auto.jpg",
            "https://chegirma.com/storage/app/uploads/public/5f5/cd5/6a7/thumb_613_250_250_0_0_auto.jpg",
            "https://chegirma.com/storage/app/uploads/public/5f5/cd5/6a7/thumb_613_250_250_0_0_auto.jpg"
         ],
         videos: [
            "https://chegirma.com/storage/app/uploads/public/5f5/cd5/6a7/thumb_613_250_250_0_0_auto.mp4",
            "https://chegirma.com/storage/app/uploads/public/5f5/cd5/6a7/thumb_613_250_250_0_0_auto.mp4"
         ],
      },

      GetAddedProducts = [
         {
            id: 1,
            categoryId: 2,
            userID: 3,
            product_name: "Kirmashina",
            descr: "Ushbu mahsulot temirdan ishlangan, bla bla bka",
            quantity: 123,
            ads_link: "https://t.me/chegirmacom/123",
            cost: 150000,
            admin_bonus: 40000, 
            operator_bonus: 5000,
            isActive: true,
            main_image: "https://t.me/chegirmacom/123",
            images: [
               "https://chegirma.com/storage/app/uploads/public/5f5/cd5/6a7/thumb_613_250_250_0_0_auto.jpg",
               "https://chegirma.com/storage/app/uploads/public/5f5/cd5/6a7/thumb_613_250_250_0_0_auto.jpg",
               "https://chegirma.com/storage/app/uploads/public/5f5/cd5/6a7/thumb_613_250_250_0_0_auto.jpg"
            ],
            videos: [
               "https://chegirma.com/storage/app/uploads/public/5f5/cd5/6a7/thumb_613_250_250_0_0_auto.mp4",
               "https://chegirma.com/storage/app/uploads/public/5f5/cd5/6a7/thumb_613_250_250_0_0_auto.mp4"
            ],
         },
         {
            id: 2,
            categoryId: 2,
            userID: 3,
            product_name: "Kirmashina",
            descr: "Ushbu mahsulot temirdan ishlangan, bla bla bka",
            quantity: 123,
            ads_link: "https://t.me/chegirmacom/123",
            cost: 150000,
            admin_bonus: 40000, 
            operator_bonus: 5000,
            isActive: true,
            main_image: "https://t.me/chegirmacom/123",
            images: [
               "https://chegirma.com/storage/613_250_250_0_0_auto.jpg",
               "https://chegirma.com/storage/613_250_250_0_0_auto.jpg",
               "https://chegirma.com/storage/613_250_250_0_0_auto.jpg"
            ],
            videos: [
               "https://chegirma.com/storage/613_250_250_0_0_auto.mp4",
               "https://chegirma.com/storage/613_250_250_0_0_auto.mp4"
            ],
         }
      ],

      deleteProductById = {

      },

      uodateProductById = {

      }
   ],
   
   Categories = [
      
      createCategory = {
         userID: 2,
         name: "Mashinalar uchun",   
      },

      getAllCategories = [
         {
            id: 1,
            userID: 2,
            name: "Avtomobillar uchun",   
         },
         {
            id: 2,
            userID: 2,
            name: "Kitoblar",   
         }
      ],

      deleteCategoryById = {
         
      },

      updateCategoryById = {

      }
   ],

   Orders = [
      {
            id: 1,
            userID: 2,
            productId: 3,
            fullname: "Juratbek Xudayberganov",
            mobile_phone: +998934671270,
            address: "Xorazm",
      },
      {
            id: 2,
            userID: 2,
            productId: 5,
            fullname: "Juratbek Xudayberganov",
            mobile_phone: +998934671270,
            address: "Xorazm", 
      }
   ],

   Users = [
      {
         id: 1,
         avatar: "https://chegirma.com/storage/app/uploads/public/5f5/cd5/6a7/thumb_613_250_250_0_0_auto.jpg",
         name: "Juratbek",
         lastname: "Xudayberganov",
         username: "juratbek",
         password: "juratali",
         created_at: "2022-10-09, 20:19",
         updated_at: "2022-10-09, 20:19"
      }   
   
   ],

   Logins = [
      createUser = {
         username: "juratbek",
         password: "123jurat",
         role: "OPERATOR"
      },

      getAllCreatedUsers = [
         {
            id: 1,
            username: "juratbek",
            password: "123jurat",
            role: "OPERATOR"
         },
         {
            id: 2,
            username: "juratbek",
            password: "123jurat",
            role: "OPERATOR"
         }
      ] 
   ]
]

Seller = [
  
   getProducts= [
      {
         id:1,
         main_image: "https://img/chegirmacom",
         name: "Blender",
         cost: 123_000,
         admin_bonus: 30_000,
         quantity: 123,
         ads_link: "https://t.me/chegirmacom/123"
      }
   ],

   createFlow = {
      sellerID: 2,
      productId: 1,
      flow_name: "Test uchun",
   },


]
