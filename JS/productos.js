const products = [
 
    {    id: "1",
         description: "Lo último en la moda llego. Las nuevas Air Trainer ofrecen comodidad en su uso. Ofrecen plataforma de 2cm de altura. ",
         name: "AIR TRAINER",
         price: 5000,
         sizes: [36 ,37, 38, 39],
         img: "https://camilocartii.github.io/img-jss/img/air%20trainer.webp"
    },
    {    id: "2",
         description: "Las Jordan Retro. Las zapatillas más formales que encontrarás. Ideales para ir a encuentros importantes.",
         name: "JORDAN RETRO",
         price: 6500,
         sizes: [36 ,37, 38, 39],
         img: "https://camilocartii.github.io/img-jss/img/jordan%20retro.webp"
    },
    {    id: "3",
         description: "Está nueva versión de Nike ofrece al usuario comodidad y un diseño exclusivo. Ofrece una platarforma de 3cm de altura.",
         name: "DRUNK",
         price: "4700",
         sizes: [36 ,37, 38, 39],
         img: "https://camilocartii.github.io/img-jss/img/Nike%20dunk.webp"
    },  
    {    id: "4",
         description: "Zapatillas ideales para un día de verano. Ofrecen comodidad en su uso sobre todo para caminar por lugares mojados.",
         name: "INFINITY",
         price: 5500,
         sizes: [36 ,37, 38, 39],
         img: "https://camilocartii.github.io/img-jss/img/nike%20infinity.webp"
    },
    {    id: "5",
         description: "Las nuevas Air Classic son una nueva versión de las zapatillas Air. Las mismas vienen en formato bota. Ofrecen plataforma de 2.5cm de altura.",
         name: "AIR CLASSIC",
         price: 6000,
         sizes: [36 ,37, 38, 39],
         img: "https://camilocartii.github.io/img-jss/img/zapatilla%20air.webp"
    },
    {    id: "6",
         description: "Las nuevas Jordan, inspiradas en el famoso jugador de Basket, son lo último a la moda. Ofrecen plataforma de 2cm de altura.",
         name: "JORDAN",
         price: 7000,
         sizes: [36 ,37, 38, 39],
         img: "https://camilocartii.github.io/img-jss/img/zapatilla%20jordan.webp"
    },
    {    id: "7",
         description: "Zapatillas Lebron, su nombre viene del juegador de Basket LEBRON JAMES, ofrecen mayor comodidad y diseño exclusivo. Plataforma estilo Camara de Aire.",
         name: "LEBRON",
         price: 6000,
         sizes: [36 ,37, 38, 39],
         img: "https://camilocartii.github.io/img-jss/img/zapatilla%20lebron.webp"
    },
    {    id: "8",
         description: "Esta zapatilla con nombre haciendo referencia a la mitología griega, ofrece comodidad para entrenar. Ofrece plataforma de 3cm de altura ",
         name: "PEGASUS",
         price: 4500,
         sizes: [36 ,37, 38, 39],
         img: "https://camilocartii.github.io/img-jss/img/zapatilla%20sport.webp"
    }
]

//Stock de talle por modelo

let sizeStock = [{36:10, 37:10, 38:10, 39:10}]


//USE SPREAD PARA AGREGAR FUTUROS NUEVOS PRODUCTOS y TALLES.

//new products
function addProducts(){
const addProduct = [...products, { id: "undefined" , description: "undefined", name:"sin definir ", price: "sin definir", sizes: [36 ,37, 38, 39], img:""  }]
console.log(addProduct)
}
addProducts()

//new sizes
function addSizes(){
const addSize = [...sizeStock,{"undefined": 10}]
console.log(addSize)
}
addSizes()