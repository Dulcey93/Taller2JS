export default{
    data:{
        1:[
            [90,100],
            [80,89],
            [70,79],
            [60,69],
            [1,59],
            [0,0]
        ],
        2:[
            [12,14],
            [9,11],
            [6,8],
            [3,5],
            [1,2],
            [0,0]
        ],
        letter:[
            ["A"],
            ["B"],
            ["C"],
            ["D"],
            ["E"],
            ["F"]
        ],
        3:[
            [5],
            [4],
            [3],
            [2],
            [1],
            [0]
        ],
        Proficiency:[
            ["Exceeds proficiency"],
            ["Demostrates proficiency"],
            ["Approaches proficiency"],
            ["Falls well below proficiency"],
            ["Lacks all proficiency"],
            ["No attempt made"]
        ],
        Reward:[
            ["Y el incentivo :)"],
            ["Medio incentivo"],
            ["Pa la casa mijo :("],
            ["Muchas gracias por participar"],
            ["No nos llamen nosotros lo llamamos :v"],
            [":( :( mi futuro :( :("]
        ]
    },
    Order(seleccion=1){
        let fusion = [];
        this.data[seleccion].forEach((val,id) => {
            fusion = fusion.concat(val);
        });
        return `${Math.min(...fusion)} - ${Math.max(...fusion)}`;
    },
    Validate(seleccion=1, nota=0){
        let mensaje = "";
        for (let [id, val] of Object.entries(this.data[seleccion])) {
            if(val[1]>=nota && val[0]<=nota){
                mensaje = `${this.data.letter[id]} mensaje: ${this.data.Proficiency[id]} - ${this.data.Reward[id]}`;
                break;
            }
        }
        return mensaje;
    },
    Send(){
        do{
            let opcion = Number(prompt("Selecciones el modo de calificacion\n\t1.Tradicional\n\t2.Point\n\t3.SBG"));
            let nota = Number(prompt(`Ingrese su nota, de un rango ${this.Order(opcion)}`));
            alert(this.Validate(opcion, nota))
        }while(confirm("Deseas realizar otra validacion"))
    }
}