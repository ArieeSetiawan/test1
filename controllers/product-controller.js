exports.getProduct = (req, res) => {
    res.status(200).json([
        {id: '001',
        name : "Indomie Goreng Original",
        price : 1900},
        {id: '002',
        name : "Indomie Rebus Original",
        price : 1500,} ,
        {id: '003',
        name : "Indomie Goreng Rasa Soto Bebek",
        price : 2000,},
        {id: '004',
        name : "Indomie Goreng Rasa Nasi Goreng",
        price : 2000,},
        {id: '005',
        name : "Indomie Rebus Rasa Mie Rebus",
        price : 1800,},
        {id: '006',
        name : "Indomie Goreng Rasa Nano-Nano",
        price : 2000,},
        
    ])
  }