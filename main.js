window.onload = function(){
    const frame = document.createDocumentFragment();
    const lista = function(){
        return new Promise((resolve,reject)=>{
            const nodo = document.createElement("li");
            const data = document.createTextNode();
            for (let i = 0; i < 1000; i++) {
                const element = array[i];
            }
        })
    }
     const saludar = function(){
         return new Promise((resolve, reject)=>{
             console.log(`Hola Mundo. Soy ${this.name}. Que tengas un buen día.`);
             resolve({maquina : maquina.call(data),servidor: servidor.call(data)});
         })
     }
     const maquina = function(){
         return new Promise((resolve, reject)=>{
             resolve(`Hola ${this.name}. Soy ${this.intel}. Que tengas un buen día.`);
         })
     }
     const servidor = function(){
         return new Promise((resolve, reject)=>{
             resolve(`Hola ${this.name} y ${this.intel}. Soy el servidor ${this.tiempo}. Estoy en ejecución.`);
         })
     }
     const data = new Object();
     document.getElementById("promesas").addEventListener("click", function(){
         data.name = document.getElementById("inputUsuario").value;
         data.intel = document.getElementById("inputMaquina").value;
         data.tiempo = document.getElementById("inputServidor").value;
         saludar.call(data)
         .then(res =>{
             return res;
         })
         .then(res =>{
             res.maquina.then(console.log);
             return res;
         }).then(res =>{
             res.servidor.then(console.log);
         }).catch(res =>{
             console.log(res);
         })
     })
}