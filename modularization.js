function bike() {
            let bikes = [];
            let marcas = ["CALOI", "SCOTT", "CANONDALE"];
            var totalPreco = 0.0;
            let caloi = [];
            let maisAntigas = [];
            let maiorQuadro = {};
          
              criarObj(bikes, marcas) 
              verificarMarca(bikes, caloi);
              maisAntiga(maisAntigas, bikes);
              quadroMaior(maiorQuadro, bikes);

              function criarObj(bikes, marcas){
                for (let i = 0; i < 10; i++) {
                    var obj = {
                      marca: prompt(`Entre a marca da bicicleta`).toUpperCase(),
                      modelo: prompt(`Entre o modelo da bicicleta`),
                      quadro: Number(prompt(`Entre o quadro da bicicleta`)),
                      aro: Number(prompt(`Entre o aro da bicicleta`)),
                      ano: Number(prompt(`Entre o ano da bicicleta`)),
                      preco: Number(prompt(`Entre o preço da bicicleta`)),
                    };
          
              while (!marcas.includes(obj.marca)) {
                obj.marca = prompt("Insira uma marca válida!").toUpperCase();
              }
          
              precoTotal(obj, totalPreco);
              inserirBikes(bikes, obj)
                }
              }

            function inserirBikes(bikes, obj){
                //só não tenho certeza se o escopo acerta
              bikes.push(obj);
            }
             function precoTotal(obj, totalPreco){
                totalPreco += obj.preco;
             } 
             function verificarMarca(obj, caloi){
                if (obj.marca === "CALOI") {
                    caloi.push(obj);
                  }
              }
          
              function maisAntiga(maisAntigas, obj){
                if (!maisAntigas.length || obj.ano < maisAntigas[0].ano) {
                    maisAntigas = [obj];
                  } else if (obj.ano === maisAntigas[0].ano) {
                    maisAntigas.push(obj);
                  }
              }
          
              function quadroMaior(maiorQuadro, obj){
                if (!maiorQuadro.quadro || obj.quadro > maiorQuadro.quadro) {
                    maiorQuadro = obj;
                  }
              }
            
          
            console.log(`A média dos preços é de: ${totalPreco / bikes.length}`);
          
            console.log("As bicicletas mais antigas são:");
            maisAntigas.forEach((bicicleta) => console.log(bicicleta));
          
            console.log("Bicicletas da marca Caloi:");
            caloi.forEach((bicicleta) => console.log(bicicleta));
          
            let aro29 = bikes.filter((bicicleta) => bicicleta.aro === 29).length;
            console.log(`Quantidade de bikes com aro 29: ${aro29}`);
          
            console.log(`A bicicleta com o maior quadro: ${maiorQuadro}`);
          }
  bike();
