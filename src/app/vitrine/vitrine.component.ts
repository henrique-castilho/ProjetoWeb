import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})

export class VitrineComponent {
  public mensagem: string = "Todos os produtos"
  public lista: Produto[] = [
    {codigo: 1, nome: "Geladeira Brastemp Frost Free Duplex",
      descritivo: "A Geladeira Brastemp Frost Free Duplex BRM44 375 litros conta com design sofisticado e grande capacidade para armazenar os alimentos. Vem com Painel Eletrônico, compartimento Latas e Long Necks e compartimento Extra frio. Tem design sofisticado e grande capacidade para armazenar os alimentos. O compartimento Latas e Long Necks se encaixa perfeitamente no freezer ou na geladeira e possibilita gelar as bebidas de forma eficaz. Já o compartimento extra frio, gela as bebidas mais rápido e conserva melhor frios e laticínios. Tem também o compartimento Temperos, para guardar e deixar eles sempre à mão. E o espaço Acesso Rápido para armazenar os itens que você mais usa.",
      valor:  3254.10, quantidade: 7, keywords: "Geladeira"
    },
    {codigo: 2, nome: "Frigobar 93L INOX 220V Midea",
      descritivo: "Frigobar com 93L, ideal para dormitórios, escritórios e pequenos apartamentos, com dimensões de 45,0 x 47,2 x 86,0 cm Conta com compartimento de resfriamento rápido, prateleiras de vidro para latas e garrafas, além de gaveta organizadora. Possui termostato ajustável e selo Procel com classificação 'A' para economia de energia. Acompanha manual do usuário e tem 1 ano de garantia no produto e 10 anos no compressor.",
      valor: 1049.00, quantidade: 4, keywords: "Frigobar"
    },
    {codigo: 3, nome: "Micro-ondas Electrolux 23L",
      descritivo: "O micro-ondas Electrolux prata 23L Efficient ME23S é ideal para facilitar sua rotina. Com descongelamento assistido, ele garante resultados uniformes ao avisar quando mexer ou virar os alimentos. Seu painel inteligente oferece quatro modos automáticos: derreter, desidratar, cozinhar rápido e cozinhar delicado. A Função Desidratar permite fazer chips de frutas e vegetais, enquanto a Função Cozinhar Delicado é indicada para alimentos macios, como peixes. Além disso, o aparelho mantém os alimentos aquecidos e conta com a função Tira Odor, que elimina odores após o uso.", 
      valor: 664.05, quantidade: 10, keywords: "Micro-ondas"
    },
    {codigo: 4, nome: "Fogão Atlas 5 Bocas preto Mônaco Top Glass",
      descritivo: "Fogão com mesa de vidro temperado, oferecendo sofisticação e praticidade na limpeza, além de um design moderno. Possui queimadores potentes: 2 de 1,7kW, 2 de 2,0kW e 1 Mega Chama de 3,0kW, garantindo versatilidade no preparo. O forno espaçoso de 86,5 litros conta com um amplo visor para acompanhar o cozimento sem abrir a porta. As grades individuais com 6 pontos de apoio e o puxador robusto oferecem estabilidade. O modelo inclui acendimento automático, botões removíveis e acabamento Limpa Fácil para maior praticidade no uso e manutenção.",
      valor: 1199.90, quantidade: 2, keywords: "Fogão"
    },
    {codigo: 5, nome: "Cooktop 5 bocas CTG-02 da Mondial",
      descritivo: "Fogão com acendimento automático para mais conforto e agilidade na cozinha. Sua mesa de vidro temperado tem 7mm de espessura, garantindo maior segurança. Detalhes em aço inox trazem um toque moderno. Conta com dois queimadores ultrarrápidos, um rápido e dois semirrápidos. Disponível nas cores preto e inox, utiliza gás GLP e é bivolt, funcionando em 110V ou 220V.As trempes individuais esmaltadas oferecem resistência, enquanto a mesa facilita a limpeza com seu material prático e elegante.",
      valor: 518.39, quantidade: 8, keywords: "Cooktop"
    },
    {codigo: 6, nome: "Forno Elétrico de Embutir Electrolux de Convecção",
      descritivo: "Equipado com a tecnologia PerfectCook360, que combina Cavidade Selada e Convecção, este forno cozinha até 30% "+ 
      "mais rápido e de maneira uniforme. A Cavidade Selada melhora o isolamento térmico, mantendo a temperatura interna, enquanto " +
      "o ventilador interno da Convecção circula o ar quente, garantindo uma temperatura homogênea. Com um Timer Digital, você pode " + 
      "programar o tempo de cozimento e o forno desligará automaticamente ao final. Além disso, possui a Função Gratinar e Dourar, "+ 
      "com quatro Modos de Assar: Convecção, Massas, Tradicional e Lento, proporcionando resultados ideais para diversos tipos de "+
      "alimentos.",
      valor: 1785.05, quantidade: 4 , keywords: "Forno",
    },
    {codigo: 7, nome: "Coifa e Depurador Philco Pco60g Glass",
      descritivo: "Elimine o cheiro de fumaça, gordura, com muito mais praticidade e qualidade para seu ambiente.Possui dupla função, exaustor e depurador, com design moderno e acabamento em inox e vidro temperado. Contém lâmpada de LED, prática para iluminar o fogão, além de 3 velocidades que possibilita o ajuste de acordo com a quantidade de fumaça a ser absorvida. É equipada com regulagem de altura para que você realize o ajuste mais adequado à altura da sua cozinha. Seu filtro de alumínio e de carvão ativo garantem muito mais absorção de gordura e fumaça. Com 60 cm, é indicada para fogões de até 4 bocas. Facilite sua vida e melhore o ambiente da sua casa com a COIFA GLASS 60 PCO60G Philco.",
      valor: 693.50, quantidade: 10, keywords: "Coifa" 
    },
    {codigo: 8, nome: "A Máquina de Lavar 15kg Electrolux Essential Care",
      descritivo: "A Máquina de Lavar 15kg Electrolux Essential Care (LED15) facilita sua rotina com cesto em inox e design sofisticado. O dispenser com tecnologia Jet&Clean garante diluição eficiente do sabão e amaciante, evitando manchas. O Ultra Filter Pega Fiapos retém 8 vezes mais sujeira, enquanto os Ciclos Rápidos otimizam o tempo de lavagem, mantendo a eficiência. A função de Reutilização de água permite reaproveitar a água para outras tarefas, promovendo economia e sustentabilidade. Cuidar das suas roupas ficou mais fácil e eficiente com a Electrolux LED15.",
      valor: 2099.00, quantidade:5 , keywords: "Maquina"
    },
    {codigo: 9, nome: "Secadora de Roupas Electrolux Essential Care",
      descritivo: "A Secadora Essential Care 11kg Prata da Electrolux proporciona tecnologia e cuidado para secar suas roupas com menos rugas. A Função Passa Fácil deixa as roupas ligeiramente úmidas, facilitando o passar. Com a função Adiar Início, você pode programar a secagem rapidamente e atender outras tarefas sem preocupação. A Função Antirrugas mantém as roupas girando com ar frio após o ciclo, reduzindo significativamente as rugas. Com 16 programas de secagem e 4 funções especiais, você pode adaptar a secadora conforme suas necessidades, garantindo que suas peças fiquem sempre secas e conservadas.",
      valor: 2434.00, quantidade: 7, keywords: "Secadora"
    },
    {codigo: 10, nome: "Aspirador água pó Electrolux A10N1",
      descritivo: "O Aspirador de Água e Pó A10N1 traz barril com capacidade para 10L e aspira sólidos e líquidos, perfeito para realizar uma limpeza completa. Limpe os cantos mais difíceis com um raio de ação maior: 6,2 metros de alcance e bocal para cantos e frestas, projetado para aspirar locais de difícil acesso. Ainda vem com bocal para pisos, próprio para usar em carpetes, tapetes e pisos frios. Os tubos prolongadores servem para aumentar o alcance do aspirador em pisos, tetos e cortinas.", 
      valor: 259.00, quantidade: 0, keywords: "Aspirador"
    }
  ]

  public detalhe(item:Produto){
    localStorage.setItem("produto", JSON.stringify(item))
    window.location.href="./detalhe";
  }

  public adicionaCarrinho(obj: Produto) {
    let json = localStorage.getItem("cesta");
    let jsonCliente = localStorage.getItem("cadastro")
    let cesta: Cesta = new Cesta();
    let item: Item = new Item();
    if(json==null) {
      item.codigo = obj.codigo;
      item.produto= obj;
      item.quantidade=1;
      item.valor = obj.valor
      cesta.codigo = 1;
      cesta.total = obj.valor;
      cesta.itens.push(item);
      if(jsonCliente!=null) cesta.cliente = JSON.parse(jsonCliente);
    } else {
      let achou = false
      cesta = JSON.parse(json);
      for(let i=0; i<cesta.itens.length; i++){
        if(cesta.itens[i].codigo == obj.codigo) {
          cesta.itens[i].quantidade = cesta.itens[i].quantidade + 1;
          cesta.itens[i].valor = cesta.itens[i].quantidade * cesta.itens[i].produto.valor;
          achou = true
          break
        }
      }
      if (!achou) {
        item.codigo = obj.codigo;
        item.produto= obj;
        item.quantidade=1;
        item.valor = obj.valor
        cesta.itens.push(item);
      }
    }

    cesta.total = 0;
    for(let i=0; i<cesta.itens.length; i++){
      cesta.total = cesta.itens[i].valor + cesta.total;
    }
    localStorage.setItem("cesta", JSON.stringify(cesta));
    window.location.href="./cesta"
  }
  
}
