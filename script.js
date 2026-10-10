/* ===== BANCO DE QUESTÕES — Valores de Referência Laboratoriais ===== */
const questoes = [
  /* ----- HEMOGRAMA / ERITROGRAMA ----- */
  { categoria: "Eritrograma", pergunta: "Qual é o valor de referência aproximado da Hemoglobina em HOMENS?", opcoes: ["10–12 g/dL", "13,5–17,5 g/dL", "15–20 g/dL", "8–10 g/dL"], correta: 1 },
  { categoria: "Eritrograma", pergunta: "Qual é o valor de referência aproximado da Hemoglobina em MULHERES?", opcoes: ["12–15,5 g/dL", "10–12 g/dL", "14–18 g/dL", "9–11 g/dL"], correta: 0 },
  { categoria: "Eritrograma", pergunta: "Qual o intervalo de referência do Hematórito em homens?", opcoes: ["30–40%", "36–46%", "41–53%", "50–60%"], correta: 2 },
  { categoria: "Eritrograma", pergunta: "O VCM (Volume Corpuscular Médio) mede:", opcoes: ["Quantidade de Hb por hemácia", "Concentração de Hb nas hemácias", "Tamanho médio das hemácias", "Variação do tamanho das hemácias"], correta: 2 },
  { categoria: "Eritrograma", pergunta: "Qual é o valor de referência do VCM?", opcoes: ["50–70 fL", "80–100 fL", "100–120 fL", "27–33 fL"], correta: 1 },
  { categoria: "Eritrograma", pergunta: "O HCM (Hemoglobina Corpuscular Média) refere-se a:", opcoes: ["Tamanho médio das hemácias", "Concentração de Hb nas hemácias", "Quantidade de Hb por hemácia", "Número de reticulócitos"], correta: 2 },
  { categoria: "Eritrograma", pergunta: "Qual é o valor de referência do HCM?", opcoes: ["80–100 pg", "32–36 pg", "27–33 pg", "11,5–14,5 pg"], correta: 2 },
  { categoria: "Eritrograma", pergunta: "Qual é o valor de referência da CHCM?", opcoes: ["27–33 g/dL", "32–36 g/dL", "40–50 g/dL", "80–100 g/dL"], correta: 1 },
  { categoria: "Eritrograma", pergunta: "O RDW-CV avalia:", opcoes: ["Variação do tamanho das hemácias", "Concentração de Hb", "Número de plaquetas", "Função renal"], correta: 0 },
  { categoria: "Eritrograma", pergunta: "Qual é o valor de referência dos Reticulócitos?", opcoes: ["5–10%", "0,5–2,5%", "10–15%", "2–5%"], correta: 1 },

  /* ----- LEUCOGRAMA ----- */
  { categoria: "Leucograma", pergunta: "Qual é o valor de referência dos Leucócitos (WBC)?", opcoes: ["2.000–5.000/μL", "4.000–11.000/μL", "10.000–15.000/μL", "1.000–3.000/μL"], correta: 1 },
  { categoria: "Leucograma", pergunta: "Qual é o percentual de referência dos Neutrófilos?", opcoes: ["20–40%", "40–70%", "2–8%", "1–4%"], correta: 1 },
  { categoria: "Leucograma", pergunta: "Qual é o valor de referência dos Neutrófilos absolutos (ANC)?", opcoes: ["500–1.500/μL", "1.500–7.500/μL", "8.000–12.000/μL", "200–800/μL"], correta: 1 },
  { categoria: "Leucograma", pergunta: "Qual é o percentual de referência dos Linfócitos?", opcoes: ["40–70%", "1–4%", "20–40%", "0–1%"], correta: 2 },
  { categoria: "Leucograma", pergunta: "Qual é o percentual de referência dos Monócitos?", opcoes: ["2–8%", "10–20%", "20–40%", "0–1%"], correta: 0 },
  { categoria: "Leucograma", pergunta: "Qual é o percentual de referência dos Eosinófilos?", opcoes: ["0–1%", "2–8%", "1–4%", "5–10%"], correta: 2 },
  { categoria: "Leucograma", pergunta: "Qual é o percentual de referência dos Basófilos?", opcoes: ["1–4%", "0–1%", "2–8%", "5–10%"], correta: 1 },
  { categoria: "Leucograma", pergunta: "Os Granulócitos Imaturos (IG%) têm referência de:", opcoes: ["<1%", "2–5%", "5–10%", "1–4%"], correta: 0 },

  /* ----- PLAQUETAS ----- */
  { categoria: "Plaquetas", pergunta: "Qual é o valor de referência das Plaquetas (PLT)?", opcoes: ["50.000–100.000/μL", "150.000–450.000/μL", "450.000–900.000/μL", "100.000–200.000/μL"], correta: 1 },
  { categoria: "Plaquetas", pergunta: "O MPV (Volume Plaquetário Médio) mede:", opcoes: ["Variação do tamanho das plaquetas", "Tamanho médio das plaquetas", "Volume percentual das plaquetas", "Plaquetas jovens"], correta: 1 },
  { categoria: "Plaquetas", pergunta: "Qual é o valor de referência do MPV?", opcoes: ["1–5 fL", "7,5–12 fL", "15–20 fL", "20–30 fL"], correta: 1 },

  /* ----- FUNÇÃO RENAL ----- */
  { categoria: "Função Renal", pergunta: "Qual é o valor de referência da Creatinina sérica?", opcoes: ["0,2–0,5 mg/dL", "0,6–1,3 mg/dL", "1,5–2,5 mg/dL", "2,0–4,0 mg/dL"], correta: 1 },
  { categoria: "Função Renal", pergunta: "A TFG estimada (eGFR) normal é de:", opcoes: ["≥90 mL/min/1,73m²", "≥60 mL/min/1,73m²", "≥120 mL/min/1,73m²", "≥30 mL/min/1,73m²"], correta: 0 },
  { categoria: "Função Renal", pergunta: "Qual é o valor de referência da Ureia?", opcoes: ["5–15 mg/dL", "15–45 mg/dL", "50–80 mg/dL", "80–120 mg/dL"], correta: 1 },
  { categoria: "Função Renal", pergunta: "A relação Albumina/Creatinina urinária (UACR) normal é:", opcoes: ["<10 mg/g", "<30 mg/g", "<60 mg/g", "<100 mg/g"], correta: 1 },
  { categoria: "Função Renal", pergunta: "Qual é o valor de referência do Potássio sérico (K⁺)?", opcoes: ["2,0–3,0 mmol/L", "3,5–5,0 mmol/L", "5,5–7,0 mmol/L", "6,0–8,0 mmol/L"], correta: 1 },
  { categoria: "Função Renal", pergunta: "Qual é o valor de referência do Sódio sérico (Na⁺)?", opcoes: ["120–130 mmol/L", "135–145 mmol/L", "145–155 mmol/L", "100–120 mmol/L"], correta: 1 },
  { categoria: "Função Renal", pergunta: "Qual é o valor de referência do Cloreto sérico (Cl⁻)?", opcoes: ["80–90 mmol/L", "98–106 mmol/L", "110–120 mmol/L", "70–80 mmol/L"], correta: 1 },

  /* ----- FUNÇÃO HEPÁTICA ----- */
  { categoria: "Função Hepática", pergunta: "A ALT (TGP) é uma enzima predominantemente:", opcoes: ["Muscular", "Hepática", "Cardíaca", "Pancreática"], correta: 1 },
  { categoria: "Função Hepática", pergunta: "Qual é o valor de referência da ALT (TGP)?", opcoes: ["~7–56 U/L", "~10–40 U/L", "~40–130 U/L", "~140–280 U/L"], correta: 0 },
  { categoria: "Função Hepática", pergunta: "Qual é o valor de referência da AST (TGO)?", opcoes: ["~7–56 U/L", "~10–40 U/L", "~40–130 U/L", "~2–17 U/L"], correta: 1 },
  { categoria: "Função Hepática", pergunta: "A GGT é um marcador de:", opcoes: ["Lesão hepatocelular", "Colestase", "Função de síntese", "Hemólise"], correta: 1 },
  { categoria: "Função Hepática", pergunta: "A Fosfatase Alcalina (FA) tem valor de referência aproximado de:", opcoes: ["~10–40 U/L", "~7–56 U/L", "~40–130 U/L", "~2–17 U/L"], correta: 2 },
  { categoria: "Função Hepática", pergunta: "Qual é o valor de referência da Albumina?", opcoes: ["2,0–3,0 g/dL", "3,5–5,0 g/dL", "5,5–7,0 g/dL", "1,0–2,0 g/dL"], correta: 1 },
  { categoria: "Função Hepática", pergunta: "A Bilirrubina total normal fica entre:", opcoes: ["0,2–1,2 mg/dL", "1,5–3,0 mg/dL", "0–0,3 mg/dL", "2,0–4,0 mg/dL"], correta: 0 },
  { categoria: "Função Hepática", pergunta: "A Bilirrubina direta (conjugada) tem referência de:", opcoes: ["0–0,3 mg/dL", "0,2–0,9 mg/dL", "0,5–1,5 mg/dL", "1,0–2,0 mg/dL"], correta: 0 },
  { categoria: "Função Hepática", pergunta: "O INR normal fica aproximadamente entre:", opcoes: ["0,8–1,2", "1,5–2,5", "2,0–3,5", "0,5–0,8"], correta: 0 },

  /* ----- PERFIL LIPÍDICO ----- */
  { categoria: "Perfil Lipídico", pergunta: "O Colesterol total desejável é:", opcoes: ["<200 mg/dL", "<250 mg/dL", "<300 mg/dL", "<150 mg/dL"], correta: 0 },
  { categoria: "Perfil Lipídico", pergunta: "Os Triglicerídeos desejáveis são:", opcoes: ["<200 mg/dL", "<150 mg/dL", "<100 mg/dL", "<250 mg/dL"], correta: 1 },
  { categoria: "Perfil Lipídico", pergunta: "O HDL-colesterol deve ser:", opcoes: [">40 mg/dL (H) e >50 mg/dL (M)", "<40 mg/dL", ">20 mg/dL", "<150 mg/dL"], correta: 0 },
  { categoria: "Perfil Lipídico", pergunta: "O VLDL-colesterol tem valor de referência aproximado de:", opcoes: ["~5–40 mg/dL", "~50–100 mg/dL", "~100–150 mg/dL", "~1–10 mg/dL"], correta: 0 },
  { categoria: "Perfil Lipídico", pergunta: "Idealmente, a Lipoproteína(a) — Lp(a) — deve ser:", opcoes: ["<30 mg/dL", "<100 mg/dL", "<150 mg/dL", ">50 mg/dL"], correta: 0 },

  /* ----- ELETRÓLITOS E MINERAIS ----- */
  { categoria: "Eletrólitos", pergunta: "Qual é o valor de referência do Bicarbonato sérico?", opcoes: ["15–20 mmol/L", "22–29 mmol/L", "30–40 mmol/L", "10–15 mmol/L"], correta: 1 },
  { categoria: "Eletrólitos", pergunta: "O Cálcio total sérico tem referência de:", opcoes: ["6,0–8,0 mg/dL", "8,5–10,5 mg/dL", "10,5–12,5 mg/dL", "12–14 mg/dL"], correta: 1 },
  { categoria: "Eletrólitos", pergunta: "Qual é o valor de referência do Magnésio sérico?", opcoes: ["~0,5–1,0 mg/dL", "~1,7–2,2 mg/dL", "~3,0–4,0 mg/dL", "~5,0–6,0 mg/dL"], correta: 1 },
  { categoria: "Eletrólitos", pergunta: "Qual é o valor de referência do Fósforo sérico?", opcoes: ["~1,0–2,0 mg/dL", "~2,5–4,5 mg/dL", "~5,0–7,0 mg/dL", "~8,0–10,0 mg/dL"], correta: 1 },
  { categoria: "Eletrólitos", pergunta: "A osmolalidade plasmática normal fica entre:", opcoes: ["~200–250 mOsm/kg", "~275–295 mOsm/kg", "~300–350 mOsm/kg", "~150–200 mOsm/kg"], correta: 1 },

  /* ----- FERRO E ANEMIA ----- */
  { categoria: "Ferro e Anemia", pergunta: "O Ferro sérico tem valor de referência de:", opcoes: ["~30–60 μg/dL", "~60–170 μg/dL", "~200–300 μg/dL", "~10–30 μg/dL"], correta: 1 },
  { categoria: "Ferro e Anemia", pergunta: "A Ferritina em HOMENS tem referência aproximada de:", opcoes: ["~15–150 ng/mL", "~30–400 ng/mL", "~5–30 ng/mL", "~400–800 ng/mL"], correta: 1 },
  { categoria: "Ferro e Anemia", pergunta: "A Saturação da Transferrina (TSAT) normal é de:", opcoes: ["~5–10%", "~20–50%", "~60–80%", "~80–100%"], correta: 1 },
  { categoria: "Ferro e Anemia", pergunta: "Qual é o valor de referência da Vitamina B12?", opcoes: ["~50–100 pg/mL", "~200–900 pg/mL", "~1.000–2.000 pg/mL", "~20–80 pg/mL"], correta: 1 },
  { categoria: "Ferro e Anemia", pergunta: "O Folato sérico tem referência de:", opcoes: ["~2–20 ng/mL", "~50–100 ng/mL", "~0,1–1 ng/mL", "~100–200 ng/mL"], correta: 0 },

  /* ----- GLICEMIA ----- */
  { categoria: "Glicemia", pergunta: "A Glicemia de jejum normal é:", opcoes: ["60–99 mg/dL", "70–99 mg/dL", "100–126 mg/dL", "50–69 mg/dL"], correta: 1 },
  { categoria: "Glicemia", pergunta: "A Hemoglobina Glicada (HbA1c) normal é:", opcoes: ["<5,7%", "<6,5%", "<7,0%", "<8,0%"], correta: 0 },
  { categoria: "Glicemia", pergunta: "Na TOTG, a glicemia de 2 horas (após 75g de glicose) deve ser:", opcoes: ["<140 mg/dL", "<180 mg/dL", "<200 mg/dL", "<100 mg/dL"], correta: 0 },
  { categoria: "Glicemia", pergunta: "A Insulina sérica em jejum tem referência de:", opcoes: ["~2–25 μUI/mL", "~50–100 μUI/mL", "~0,1–1 μUI/mL", "~100–200 μUI/mL"], correta: 0 },
  { categoria: "Glicemia", pergunta: "O Peptídeo C tem valor de referência de:", opcoes: ["~0,8–3,5 ng/mL", "~5–10 ng/mL", "~0,1–0,5 ng/mL", "~10–20 ng/mL"], correta: 0 },
  { categoria: "Glicemia", pergunta: "A Frutosamina sérica tem referência de:", opcoes: ["~200–285 μmol/L", "~100–150 μmol/L", "~300–400 μmol/L", "~50–100 μmol/L"], correta: 0 },
];

/* ===== LÓGICA DO QUIZ ===== */
let indiceAtual = 0;
let pontos = 0;
let acertos = 0;
let ordemQuestoes = [];

/* Embaralha um array (Fisher-Yates) */
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function mostrarTela(id) {
  document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');
}

function iniciarQuiz() {
  ordemQuestoes = embaralhar([...questoes]);
  indiceAtual = 0;
  pontos = 0;
  acertos = 0;
  document.getElementById('pontos').textContent = 'Pontos: 0';
  mostrarTela('tela-quiz');
  mostrarQuestao();
}

function mostrarQuestao() {
  const q = ordemQuestoes[indiceAtual];

  document.getElementById('numero-questao').textContent =
    `Questão ${indiceAtual + 1} de ${ordemQuestoes.length}`;
  document.getElementById('categoria').textContent = q.categoria;
  document.getElementById('pergunta').textContent = q.pergunta;

  /* Barra de progresso */
  const progresso = (indiceAtual / ordemQuestoes.length) * 100;
  document.getElementById('barra').style.width = progresso + '%';

  /* Reseta feedback */
  const feedback = document.getElementById('feedback');
  feedback.textContent = '';
  feedback.className = 'feedback';
  document.getElementById('btn-proxima').style.display = 'none';

  /* Monta as opções (embaralhadas) */
  const container = document.getElementById('opcoes');
  container.innerHTML = '';

  const indices = embaralhar(q.opcoes.map((_, i) => i));
  indices.forEach(i => {
    const btn = document.createElement('button');
    btn.className = 'opcao';
    btn.textContent = q.opcoes[i];
    btn.onclick = () => responder(i, btn);
    btn.dataset.indice = i;
    container.appendChild(btn);
  });
}

function responder(indiceEscolhido, botaoClicado) {
  const q = ordemQuestoes[indiceAtual];
  const botoes = document.querySelectorAll('.opcao');
  const feedback = document.getElementById('feedback');

  /* Desabilita todas as opções */
  botoes.forEach(b => b.disabled = true);

  if (indiceEscolhido === q.correta) {
    botaoClicado.classList.add('certa');
    feedback.textContent = '✅ Correto! +10 pontos';
    feedback.classList.add('certa');
    pontos += 10;
    acertos++;
  } else {
    botaoClicado.classList.add('errada');
    feedback.textContent = `❌ Incorreto. A resposta correta era: ${q.opcoes[q.correta]}`;
    feedback.classList.add('errada');
    /* Destaca a resposta certa */
    botoes.forEach(b => {
      if (parseInt(b.dataset.indice) === q.correta) b.classList.add('certa');
    });
  }

  document.getElementById('pontos').textContent = `Pontos: ${pontos}`;
  document.getElementById('btn-proxima').style.display = 'inline-block';
}

function proximaQuestao() {
  indiceAtual++;
  if (indiceAtual < ordemQuestoes.length) {
    mostrarQuestao();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  mostrarTela('tela-resultado');
  const total = ordemQuestoes.length;
  const percentual = (acertos / total) * 100;

  document.getElementById('acertos').textContent =
    `${acertos} de ${total} acertos (${Math.round(percentual)}%)`;

  let emoji, mensagem;
  if (percentual === 100) {
    emoji = '🏆'; mensagem = 'PERFEITO! Você é um verdadeiro Internista Amarelo!';
  } else if (percentual >= 80) {
    emoji = '🌟'; mensagem = 'Excelente! Quase gabaritou — parabéns!';
  } else if (percentual >= 60) {
    emoji = '👍'; mensagem = 'Muito bom! Revise os temas com mais erros.';
  } else if (percentual >= 40) {
    emoji = '📚'; mensagem = 'Razoável — vale a pena revisar os valores de referência.';
  } else {
    emoji = '💪'; mensagem = 'Não desanime! Estude o material e tente novamente.';
  }

  document.getElementById('emoji-resultado').textContent = emoji;
  document.getElementById('mensagem-resultado').textContent = mensagem;
}

function voltarInicio() {
  mostrarTela('tela-inicio');
}

/* Ao carregar a página, mostra o total de questões na tela inicial */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('total-questoes').textContent = questoes.length;
});