const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
  };
  export {getCSS}
  import { getCSS } from "./common.js";
  const data = [
    {
      x: 'nomeDasRedes',
      y: quantidadeDeUsuarios,
      type: 'bar',
      marker: {
        color: getCSS('--primary-color')
      }
    }
  ]
  const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
      text: 'Redes sociais com mais usuários no mundo',
       x: 0,
       font: {
           color: getCSS('--primary-color'),
           family: getCSS('--font'),
           size: 30
       }
    },
      xaxis: {
        title: {
            text: 'nome das redes sociais',
            font: {
                color: getCSS('--secondary-color')
            }
        }
      },
      yaxis: {
        title: {
            text: 'bilhões de usuários ativos',
            font: {
                color: getCSS('--secondary-color')
            }
        }
      }
  }

Plotly.newPlot(grafico, data, layout)
