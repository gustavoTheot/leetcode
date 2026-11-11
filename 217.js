/*
TEMPO DE EXECUÇÃO E USO DE MEMÓRIA

Consumo de tempo: 
- usar console.log consume muito I/O e pdoe causar time limit exeeded

*/
// var nums =  [1,2,3,1]

const arrayGigante = Array.from({ length: 50000 }, (_, i) => i);
arrayGigante.push(49999); // Forçando a duplicata no pior cenário (fim do array)

/* 
  Tempo: O(N²) - Uso de memória
  Espaõp: O (1)
  Se o array tiver 1k de itens, ele percorre cada elemento. Pode dar limite de tempo

  Base level, força bruta
*/
function forAninhado(nums) {
  for(let i = 0; i < nums.length; i++){ 
    for(let j = i+1; j < nums.length; j++){
      if (nums[i] === nums[j]){
        console.log(`${nums[i]} = ${nums[j]}`)
        return true
      } 
    }
  } 
  return false
};

/*
  Tempo: O(N log N) mais rápido que O(N²)
  Espaço: O(1) ou O(N): depende de como a linguagem imeplementa o .sort()
*/
function midLevel(nums){
  nums.sort((a, b) => a - b) // ordena

  for (let i = 0; i < nums.length - 1; i++){
    if(nums[i] === nums[i+1]){
      return true
    }
  }

  return false
}

/*
  Tempo: O(N) -> Percorre o array apenas 1x
  Espaço: O(N) -> Caso não tenha nenhuma duplicata, todos os números são salvos no array do Set, gastando memória. OBS: Trade-off

  O hasSet ele funciona como um hash mesmo, onde cada valor da tabela sem sua chave e é identificado diretamente, por isso o tradeoff de armazenar todos os dados do array em tabela hash
*/
function hashSet(nums){
  const seen = new Set() // Cria um conjunto de vistos

  for(let i = 0; i < nums.length; i++){
    
    // Se o número está no Set, acha a duplicata
    if(seen.has(nums[i])){
      return true;
    }

    // Caso constrario adicione o Set
    seen.add(nums[i])
  }
}

const oneLiner = (nums) => new Set(nums).size !== nums.length;

// 3. FUNÇÃO DE TEMPORIZAÇÃO (BENCHMARK)
function testarPerformance(nome, funcao, dados) {
  const inicio = performance.now();
  funcao(dados);
  const fim = performance.now();
  
  console.log(`[${nome}] Tempo: ${(fim - inicio).toFixed(4)} ms`);
}

// 4. EXECUTAR OS TESTES
console.log("Iniciando testes com 50.000 itens...\n");

testarPerformance("1. Força Bruta O(N²)", forAninhado, arrayGigante);
testarPerformance("2. Ordenação O(N log N)", midLevel, arrayGigante);
testarPerformance("3. HashSet O(N)", hashSet, arrayGigante);
testarPerformance("4. One-Liner (Set O(N))", oneLiner, arrayGigante);






