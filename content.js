// StudyOS — Pre-built content (content.js)
// Loaded before index script. Provides CLASES, EXAMENES_UNIDAD, EXAMENES_FINALES, updateQuimicaMateria()

// ── checkpoint helper ─────────────────────────────────────────────────────
window.cpAns = function(btnEl, correct, feedEl, okMsg, failMsg) {
  var el = document.getElementById(feedEl);
  if (!el) return;
  el.style.display = 'block';
  if (correct) { el.style.color = '#22c55e'; el.innerHTML = '✅ ' + okMsg; }
  else { el.style.color = '#ef4444'; el.innerHTML = '❌ ' + failMsg; }
};

// ── solution toggle ───────────────────────────────────────────────────────
window.toggleSol = function(btn) {
  var s = btn.nextElementSibling;
  s.style.display = s.style.display === 'block' ? 'none' : 'block';
  btn.textContent = s.style.display === 'block' ? 'Ocultar solución' : 'Ver solución';
};

// ── shared micro-styles injected once ────────────────────────────────────
(function(){
  if (document.getElementById('cls-styles')) return;
  var s = document.createElement('style');
  s.id = 'cls-styles';
  s.textContent = `
    .cls{font-family:Inter,sans-serif;color:var(--text);line-height:1.75;max-width:760px}
    .cls h2{font-family:Syne,sans-serif;font-size:17px;margin:22px 0 8px;color:var(--text)}
    .cls h3{font-size:14px;font-weight:700;margin:16px 0 6px;color:var(--text)}
    .cls p{margin:0 0 10px;font-size:14px}
    .cls code{background:rgba(124,106,247,0.12);color:var(--accent);padding:1px 5px;border-radius:3px;font-size:13px;font-family:monospace}
    .cls pre{background:var(--bg2);border:1px solid var(--border);border-radius:6px;padding:14px;overflow-x:auto;font-size:12.5px;line-height:1.6;font-family:monospace;color:var(--text);margin:10px 0}
    .cls .hero{background:linear-gradient(135deg,rgba(124,106,247,0.1),rgba(124,106,247,0.03));border-radius:10px;padding:18px 22px;margin-bottom:20px}
    .cls .hero-label{font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:var(--accent);font-weight:700;margin-bottom:5px}
    .cls .hero h1{margin:0 0 6px;font-family:Syne,sans-serif;font-size:20px;font-weight:800}
    .cls .hero p{margin:0;font-size:13px;color:var(--text2)}
    .cls .cp{background:rgba(124,106,247,0.07);border-left:3px solid var(--accent);padding:13px 16px;border-radius:0 6px 6px 0;margin:18px 0}
    .cls .cp-q{font-size:13px;font-weight:600;margin-bottom:9px}
    .cls .cp-btn{background:var(--bg2);border:1px solid var(--border);color:var(--text);border-radius:5px;padding:6px 13px;font-size:12px;cursor:pointer;margin:3px;font-family:inherit}
    .cls .cp-btn:hover{background:rgba(124,106,247,0.15);border-color:var(--accent)}
    .cls .cp-fb{font-size:12px;margin-top:8px;display:none;line-height:1.5}
    .cls .ej-section{margin-top:24px}
    .cls .ej-card{background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin:10px 0}
    .cls .ej-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px}
    .cls .ej-label.easy{color:#22c55e} .cls .ej-label.med{color:var(--accent2)} .cls .ej-label.hard{color:#ef4444}
    .cls .ej-text{font-size:13px;margin-bottom:8px}
    .cls .ej-sol{display:none;background:rgba(34,197,94,0.07);border-left:2px solid #22c55e;padding:8px 12px;border-radius:0 4px 4px 0;font-size:12.5px;margin-top:6px}
    .cls .ej-show{background:none;border:1px solid var(--border);color:var(--text2);border-radius:4px;padding:4px 10px;font-size:11px;cursor:pointer;font-family:inherit}
    .cls .ej-show:hover{color:var(--accent);border-color:var(--accent)}
    .cls .sumtable{width:100%;border-collapse:collapse;margin-top:16px;font-size:12.5px}
    .cls .sumtable th{background:rgba(124,106,247,0.12);padding:7px 10px;text-align:left;font-weight:700;border-bottom:1px solid var(--border)}
    .cls .sumtable td{padding:6px 10px;border-bottom:1px solid rgba(255,255,255,0.05)}
    .cls .box{background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:13px 16px;margin:12px 0;font-size:13px}
    .cls .warn{background:rgba(251,191,36,0.08);border-left:3px solid #fbbf24;padding:10px 14px;border-radius:0 6px 6px 0;margin:12px 0;font-size:13px}
    .cls .formula{text-align:center;font-size:15px;padding:10px;letter-spacing:0.5px;font-family:Georgia,serif}
    .cls .sum{width:100%;border-collapse:collapse;margin-top:16px;font-size:12.5px}
    .cls .sum th{background:rgba(124,106,247,0.12);padding:7px 10px;text-align:left;font-weight:700;border-bottom:1px solid var(--border)}
    .cls .sum td{padding:6px 10px;border-bottom:1px solid rgba(255,255,255,0.05)}
  `;
  document.head.appendChild(s);
})();

// ═══════════════════════ CLASES ═══════════════════════
const CLASES = {

// ── Cálculo Elemental ────────────────────────────────────────────────────
  101: { estimated_hours: 2, difficulty: 1, html: `<div class="cls">
<div class="hero"><div class="hero-label">Cálculo Elemental · U1</div>
<h1>Variables, funciones, dominio e imagen</h1>
<p>Sin dominio no hay función. Todo límite, derivada e integral parte de saber exactamente dónde vive la función.</p></div>
<h2>¿Qué es una función?</h2>
<p>f: A→B asigna a cada x de A exactamente un f(x). Si un x produce dos y distintos, no es función (prueba de la recta vertical).</p>
<h2>Dominio: las tres restricciones</h2>
<div class="box">1. Denominador ≠ 0 &nbsp; f(x)=1/(x−3) → Dom=ℝ\\{3}<br>
2. Radicando ≥ 0 &nbsp;&nbsp; f(x)=√(x−2) → Dom=[2,+∞)<br>
3. Logaritmo &gt; 0 &nbsp;&nbsp; f(x)=ln(x+1) → Dom=(−1,+∞)</div>
<p>Con varias restricciones se toma la intersección.</p>
<div class="cp"><div class="cp-q">🔍 Checkpoint — Dom de f(x)=√(x+4)/(x−1)</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp101a','[−4,+∞) \\ {1}: raíz pide x≥−4, denominador pide x≠1.','')">[-4,+∞) \\ {1}</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp101a','','x=1 hace el denominador 0: hay que excluirlo.')">x ≥ −4</button>
<div class="cp-fb" id="cp101a"></div></div>
<h2>Imagen</h2>
<p>Todos los valores que realmente toma f. Para encontrarla: despejá x en y=f(x) y determiná qué y permiten solución. Ej: f(x)=x² → Im=[0,+∞).</p>
<h2>Paridad</h2>
<div class="box">Par: f(−x)=f(x). Simétrica en eje y. Ej: x², cos(x).<br>Impar: f(−x)=−f(x). Simétrica en origen. Ej: x³, sen(x).</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — f(x)=x³−x: ¿par, impar o ninguna?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp101b','Impar: f(−x)=−x³+x=−(x³−x)=−f(x).','')">Impar</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp101b','','f(−x)=−f(x), no f(x). Es impar.')">Par</button>
<div class="cp-fb" id="cp101b"></div></div>
<h2>Función inversa</h2>
<p>Solo las biyectivas tienen inversa. Cálculo: despejá x en y=f(x), luego intercambiá x e y.</p>
<p>Ej: f(x)=2x+3 → f⁻¹(x)=(x−3)/2. La gráfica de f⁻¹ es reflejo de f sobre y=x.</p>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Dom de f(x)=ln(2x−6)+1/(x+1).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">ln: 2x−6&gt;0 → x&gt;3. Denom: x≠−1. Como x&gt;3 ya excluye −1, Dom=(3,+∞).</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">f(x)=|x|/x (x≠0): ¿par o impar? ¿Cuál es la imagen?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">f(−x)=−|x|/x=−f(x) → impar. La función vale 1 si x&gt;0 y −1 si x&lt;0. Im={−1,1}.</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">f(x)=(x+2)/(x−1): encontrá f⁻¹(x) y verificá f(f⁻¹(x))=x.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">y=(x+2)/(x−1) → y(x−1)=x+2 → x(y−1)=y+2 → x=(y+2)/(y−1). Entonces f⁻¹(x)=(x+2)/(x−1)=f(x). Verificación directa confirma f(f⁻¹(x))=x.</div></div></div>
<table class="sum"><tr><th>Concepto</th><th>Definición</th><th>Ejemplo</th></tr>
<tr><td>Dominio</td><td>x donde f está definida</td><td>√(x−2): [2,+∞)</td></tr>
<tr><td>Imagen</td><td>Valores que toma f</td><td>x²: [0,+∞)</td></tr>
<tr><td>Par/Impar</td><td>f(−x)=±f(x)</td><td>cos/sen</td></tr>
<tr><td>Biyectiva</td><td>Inyectiva+suryectiva</td><td>Condición para f⁻¹</td></tr>
</table></div>` },

  102: { estimated_hours: 2, difficulty: 1, html: `<div class="cls">
<div class="hero"><div class="hero-label">Cálculo Elemental · U1</div>
<h1>Operaciones entre funciones y composición</h1>
<p>La composición es la operación detrás de la regla de la cadena, la derivada más usada del curso.</p></div>
<h2>Operaciones algebraicas</h2>
<div class="box">(f±g)(x)=f(x)±g(x) · Dom = Dom(f)∩Dom(g)<br>
(f·g)(x)=f(x)·g(x) · Dom = Dom(f)∩Dom(g)<br>
(f/g)(x)=f(x)/g(x) · Dom = Dom(f)∩Dom(g), g≠0</div>
<h2>Composición f∘g</h2>
<p>(f∘g)(x)=f(g(x)): primero g, después f sobre el resultado.</p>
<div class="box">Dom(f∘g) = {x ∈ Dom(g) : g(x) ∈ Dom(f)}</div>
<p>Ej: f(x)=√x, g(x)=x−3. (f∘g)(x)=√(x−3), Dom=[3,+∞). (g∘f)(x)=√x−3, Dom=[0,+∞). No conmuta.</p>
<div class="cp"><div class="cp-q">🔍 Checkpoint — f(x)=1/x, g(x)=x²−4. Dom(f∘g)=?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp102a','ℝ \\ {−2,2}: g(x)=0 en x=±2 hace f(g(x))=1/0, indefinido.','')">ℝ \\ {−2, 2}</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp102a','','g(x)=0 en x=±2 → f(g(x)) indefinido. Hay que excluirlos.')">ℝ completo</button>
<div class="cp-fb" id="cp102a"></div></div>
<h2>Crecimiento y decrecimiento</h2>
<p>f creciente en I: x₁&lt;x₂ ⟹ f(x₁)&lt;f(x₂). Decreciente: lo inverso. (Con derivadas: creciente ↔ f'≥0.)</p>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">f(x)=x+1, g(x)=x². Calculá (f+g)(2), (f·g)(−1) y (f/g)(3).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">(f+g)(2)=3+4=7. (f·g)(−1)=0·1=0. (f/g)(3)=4/9.</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">f(x)=√(x+1), g(x)=x²−2x. Calculá (f∘g)(x) y Dom.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">(f∘g)(x)=√(x²−2x+1)=√(x−1)²=|x−1|. Dom=ℝ (el cuadrado siempre es ≥0).</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Encontrá f,g t.q. (f∘g)(x)=ln(x²−4) y (g∘f)(x)=(ln x)²−4.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">f(x)=ln(x), g(x)=x²−4. Verificación: f(g(x))=ln(x²−4)✓. g(f(x))=(ln x)²−4✓. Confirma que f∘g≠g∘f en general.</div></div></div>
</div>` },

  103: { estimated_hours: 3, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Cálculo Elemental · U1</div>
<h1>Funciones elementales: trigonométricas, exponencial y logaritmo</h1>
<p>El vocabulario obligatorio del cálculo. Cada derivada, integral y límite usa alguna de estas funciones.</p></div>
<h2>Funciones trigonométricas</h2>
<div class="box">sen(x): Dom=ℝ, Im=[−1,1], período 2π.<br>cos(x): Dom=ℝ, Im=[−1,1], período 2π.<br>tan(x): Dom=ℝ\\{π/2+kπ}, Im=ℝ, período π.</div>
<p>Valores clave: sen(π/6)=1/2, sen(π/4)=√2/2, sen(π/3)=√3/2, sen(π/2)=1.<br>Identidad: sen²x+cos²x=1.</p>
<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Cuánto vale sen(π/3)?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp103a','√3/2 ≈ 0.866. Triángulo 30-60-90: lados 1, √3, 2. Sen del ángulo de 60° = opuesto/hipotenusa = √3/2.','')">√3/2</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp103a','','Ese es sen(π/4). π/3 = 60°.')">√2/2</button>
<div class="cp-fb" id="cp103a"></div></div>
<h2>Función exponencial</h2>
<div class="box">f(x)=aˣ, a&gt;0, a≠1. Dom=ℝ, Im=(0,+∞). Pasa por (0,1).<br>a&gt;1: creciente. 0&lt;a&lt;1: decreciente. Asíntota y=0.</div>
<p>La base más importante: e≈2.71828. Propiedades: eˣ⁺ʸ=eˣ·eʸ, e⁻ˣ=1/eˣ.</p>
<h2>Función logaritmo</h2>
<div class="box">logₐ(x) es la inversa de aˣ: logₐ(x)=y ↔ aʸ=x. Dom=(0,+∞), Im=ℝ. Pasa por (1,0). Asíntota x=0.</div>
<p>Propiedades clave: ln(xy)=ln x+ln y · ln(x/y)=ln x−ln y · ln(xⁿ)=n·ln x.</p>
<div class="cp"><div class="cp-q">🔍 Checkpoint — Dom de f(x)=ln(4−x²)</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp103b','(−2,2): necesitamos 4−x²&gt;0 → x²&lt;4 → −2&lt;x&lt;2.','')">(-2, 2)</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp103b','','En x=±2 el argumento es 0, y ln(0) no existe.')">[-2, 2]</button>
<div class="cp-fb" id="cp103b"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Simplificá: ln(e³)+ln(1/e)−ln(e²).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">3+(−1)−2=0.</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Resolvé e²ˣ−3eˣ+2=0.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">u=eˣ: u²−3u+2=0 → (u−1)(u−2)=0. eˣ=1→x=0; eˣ=2→x=ln2.</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Resolvé ln(x)+ln(x−2)=ln(3) y verificá el dominio.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">ln(x(x−2))=ln3 → x²−2x−3=0 → x=3 o x=−1. Dom requiere x&gt;0 y x&gt;2, solo x=3. Verificación: ln3+ln1=ln3 ✓</div></div></div>
</div>` },

  104: { estimated_hours: 3, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Cálculo Elemental · U2</div>
<h1>Definición y tipos de límite</h1>
<p>El límite es la herramienta con la que el cálculo se asoma a puntos sin estar en ellos. Sin límites no hay derivada ni integral.</p></div>
<h2>Definición intuitiva</h2>
<p>lim<sub>x→a</sub> f(x)=L: cuando x se acerca a a (sin llegar), f(x) se acerca a L. No importa el valor de f(a).</p>
<div class="box">Ej: f(x)=(x²−1)/(x−1). En x=1: 0/0. Pero (x+1)(x−1)/(x−1)=x+1 para x≠1. lim<sub>x→1</sub>=2.</div>
<h2>Límites laterales</h2>
<p>lim<sub>x→a⁻</sub>: x se acerca desde la izquierda. lim<sub>x→a⁺</sub>: desde la derecha.<br>
El bilateral existe ↔ los dos laterales coinciden.</p>
<div class="cp"><div class="cp-q">🔍 Checkpoint — f(x)=|x|/x, x≠0. ¿Existe lim<sub>x→0</sub>?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp104a','No existe: lim⁻=−1 ≠ lim⁺=+1. Los laterales son distintos.','')">No existe</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp104a','','lim⁻=−1 ≠ lim⁺=1. No coinciden.')">Sí, vale 0</button>
<div class="cp-fb" id="cp104a"></div></div>
<h2>Límites en el infinito y límites infinitos</h2>
<div class="box">Límite en infinito: lim<sub>x→∞</sub>f(x)=L → asíntota horizontal y=L.<br>
Límite infinito: lim<sub>x→a</sub>f(x)=±∞ → asíntota vertical x=a.</div>
<p>Técnica para racionales: dividir por la mayor potencia del denominador.<br>
lim<sub>x→∞</sub>(3x²+x)/(2x²−5) = lim(3+1/x)/(2−5/x²) = 3/2.</p>
<div class="cp"><div class="cp-q">🔍 Checkpoint — lim<sub>x→∞</sub>(5x³−2x)/(x³+1)</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp104b','5: dividir por x³ → (5−2/x²)/(1+1/x³) → 5.','')">5</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp104b','','Dividí por x³, la mayor potencia. El cociente de coeficientes es 5/1=5.')">+∞</button>
<div class="cp-fb" id="cp104b"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Calculá lim<sub>x→2</sub>(x²−4)/(x−2).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Factor: (x+2)(x−2)/(x−2)=x+2. Límite=4.</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Hallá las asíntotas de f(x)=(2x²+1)/(x²−9).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Horiz: lim<sub>x→±∞</sub>=2 → y=2. Vert: x=±3 (denom=0, lim=±∞).</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Analizá lim<sub>x→0⁺</sub>x·ln(x). ¿Es forma 0·(−∞)?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Sí: 0·(−∞). Reescribir: ln(x)/(1/x). L'Hôpital: (1/x)/(−1/x²)=−x→0. Límite=0.</div></div></div>
</div>` },

  105: { estimated_hours: 3, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Cálculo Elemental · U2</div>
<h1>Operaciones con límites e indeterminaciones</h1>
<p>La mayoría de los límites se resuelven con una de estas técnicas de desbloqueo. Reconocer la forma es la mitad del trabajo.</p></div>
<h2>Álgebra de límites</h2>
<div class="box">Si lim f=L y lim g=M (finitos):<br>lim(f±g)=L±M · lim(f·g)=L·M · lim(f/g)=L/M (M≠0)</div>
<h2>Indeterminaciones</h2>
<p>Las formas 0/0, ∞/∞, 0·∞, ∞−∞, 0⁰, 1^∞, ∞⁰ no se calculan directamente: hay que transformarlas.</p>
<div class="box"><strong>0/0 por factorización:</strong> lim<sub>x→1</sub>(x²−1)/(x−1)=lim(x+1)=2<br>
<strong>0/0 por racionalización:</strong> lim<sub>x→4</sub>(√x−2)/(x−4): multiplicar por (√x+2)/(√x+2) → 1/(√x+2)|₄=1/4<br>
<strong>∞/∞:</strong> dividir por la mayor potencia.</div>
<h2>Límites fundamentales</h2>
<div class="box">lim<sub>x→0</sub>sen(x)/x=1 · lim<sub>x→0</sub>(1−cosx)/x²=1/2<br>lim<sub>x→0</sub>(eˣ−1)/x=1 · lim<sub>x→0</sub>ln(1+x)/x=1<br>lim<sub>x→∞</sub>(1+1/x)ˣ=e</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — lim<sub>x→0</sub>sen(x)/x</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp105a','1 — límite fundamental trigonométrico. Se usa en la derivada del seno por definición.','')">1</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp105a','','Es 0/0 pero el límite vale 1, no 0.')">0</button>
<div class="cp-fb" id="cp105a"></div></div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — lim<sub>x→0</sub>(e^(3x)−1)/x</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp105b','3: sea u=3x, la expresión es 3·(e^u−1)/u → 3·1=3.','')">3</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp105b','','No es 1 directamente. El exponent es 3x, no x: multiplicás por 3.')">1</button>
<div class="cp-fb" id="cp105b"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Calculá lim<sub>x→3</sub>(x²−9)/(x−3).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Factor: (x−3)(x+3)/(x−3)=x+3. Límite=6.</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Calculá lim<sub>x→∞</sub>(3x³−x²+2)/(5x³+x−1).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Dividir por x³: (3−1/x+2/x³)/(5+1/x²−1/x³)→3/5.</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Calculá lim<sub>x→0</sub>(1−cos x)/(x·sen x).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Multiplicar y dividir: [(1−cosx)/x²]·[x/sen x]. Los límites fundamentales dan (1/2)·1=1/2.</div></div></div>
</div>` },

  106: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Cálculo Elemental · U3</div>
<h1>Continuidad de funciones</h1>
<p>Formaliza "dibujar sin levantar el lápiz". Es el requisito mínimo para que la derivada tenga sentido.</p></div>
<h2>Definición: tres condiciones simultáneas</h2>
<div class="box">1. f(a) existe.<br>2. lim<sub>x→a</sub>f(x) existe.<br>3. lim<sub>x→a</sub>f(x) = f(a).</div>
<h2>Tipos de discontinuidad</h2>
<div class="box"><strong>Evitable:</strong> el límite existe pero ≠ f(a), o f(a) no existe. Se puede "reparar" redefiniendo f(a).<br>
<strong>De salto:</strong> los laterales existen pero son distintos.<br>
<strong>Esencial (infinita):</strong> lim=±∞.</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — f(x)=(x²−4)/(x−2) en x=2: tipo de discontinuidad</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp106a','Evitable: el límite existe (=4) pero f(2) no está definida. Redefiniendo f(2)=4, queda continua.','')">Evitable</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp106a','','No hay salto: lim⁻=lim⁺=4.')">De salto</button>
<div class="cp-fb" id="cp106a"></div></div>
<h2>Teorema del Valor Intermedio (TVI)</h2>
<div class="box">Si f continua en [a,b] y k está entre f(a) y f(b), existe c∈(a,b) con f(c)=k.</div>
<p>Consecuencia directa: si f(a)&lt;0 y f(b)&gt;0, hay raíz en (a,b).</p>
<div class="cp"><div class="cp-q">🔍 Checkpoint — f(x)=x³−x−1. f(1)=−1, f(2)=5. ¿Qué garantiza el TVI?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp106b','Al menos una raíz en (1,2): existe c∈(1,2) con f(c)=0.','')">Hay raíz en (1,2)</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp106b','','El TVI garantiza existencia, no unicidad.')">Hay exactamente una raíz</button>
<div class="cp-fb" id="cp106b"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">¿Es f(x)=1/(x²−1) continua en x=±1?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Discontinuidades esenciales en x=±1 (denom=0, límite=∞).</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">f(x)={x² si x≤1; ax+b si x&gt;1}. Hallá a,b para que sea continua en x=1.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Continuidad: lim⁻=1, lim⁺=a+b, f(1)=1. Necesitamos a+b=1. (Con diferenciabilidad adicional: a=2, b=−1.)</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Demostrá con el TVI que x⁵+x−1=0 tiene raíz en (0,1).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">f(x)=x⁵+x−1 es continua en ℝ. f(0)=−1&lt;0. f(1)=1&gt;0. TVI garantiza c∈(0,1) con f(c)=0.</div></div></div>
</div>` },

  107: { estimated_hours: 3, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Cálculo Elemental · U4</div>
<h1>Definición de derivada y recta tangente</h1>
<p>La derivada es la tasa de cambio instantánea: el límite de las tasas de cambio promedio cuando el intervalo se achica a cero.</p></div>
<h2>Definición por límite</h2>
<div class="box" style="text-align:center;font-size:15px">f'(a) = lim<sub>h→0</sub> [f(a+h) − f(a)] / h</div>
<p>Geométricamente: pendiente de la recta tangente a la gráfica de f en (a, f(a)).</p>
<h2>Recta tangente y normal</h2>
<div class="box">Tangente en (a,f(a)): y − f(a) = f'(a)·(x − a)<br>Normal (perpendicular): pendiente = −1/f'(a)</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — Pendiente de la tangente a f(x)=x² en x=3</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp107a','6: [f(3+h)−f(3)]/h=[(3+h)²−9]/h=(6h+h²)/h=6+h→6.','')">6</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp107a','','f(3)=9, pero la pendiente de la tangente es f\'(3), no f(3).')">9</button>
<div class="cp-fb" id="cp107a"></div></div>
<h2>Derivabilidad y continuidad</h2>
<div class="box">Derivable en a → Continua en a (el recíproco es FALSO).<br>|x| es continua en 0 pero no derivable: las tangentes laterales tienen pendientes diferentes (±1).</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — f(x)=|x| en x=0: ¿derivable?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp107b','No: lim⁻[|h|/h]=−1 ≠ lim⁺[|h|/h]=+1. No existe la derivada.','')">No es derivable</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp107b','','Los límites laterales no coinciden: −1 ≠ +1.')">Sí, f'(0)=0</button>
<div class="cp-fb" id="cp107b"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Por definición: f'(2) si f(x)=3x²−1.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">f(2+h)=3(4+4h+h²)−1=11+12h+3h². [(11+12h+3h²)−11]/h=12+3h→12.</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Ecuación de la tangente a f(x)=√x en x=4.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">f(4)=2. f'(x)=1/(2√x) → f'(4)=1/4. Tangente: y−2=(1/4)(x−4) → y=x/4+1.</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Por definición: f'(x) si f(x)=1/(x+1).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">[1/(x+h+1)−1/(x+1)]/h=[−h/((x+h+1)(x+1))]/h=−1/((x+h+1)(x+1))→−1/(x+1)².</div></div></div>
</div>` },

  108: { estimated_hours: 3, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Cálculo Elemental · U4</div>
<h1>Reglas de derivación</h1>
<p>La definición sirve para entender. Las reglas sirven para derivar rápido. Hay que internalizarlas hasta que sean automáticas.</p></div>
<h2>Tabla de derivadas básicas</h2>
<table class="sum"><tr><th>f(x)</th><th>f'(x)</th><th>f(x)</th><th>f'(x)</th></tr>
<tr><td>c</td><td>0</td><td>eˣ</td><td>eˣ</td></tr>
<tr><td>xⁿ</td><td>nxⁿ⁻¹</td><td>ln(x)</td><td>1/x</td></tr>
<tr><td>sen(x)</td><td>cos(x)</td><td>aˣ</td><td>aˣ·ln(a)</td></tr>
<tr><td>cos(x)</td><td>−sen(x)</td><td>tan(x)</td><td>sec²(x)</td></tr>
</table>
<h2>Reglas de combinación</h2>
<div class="box">(f±g)'=f'±g' · (c·f)'=c·f'<br>(f·g)'=f'g+fg' &nbsp;<strong>(producto)</strong><br>(f/g)'=(f'g−fg')/g² &nbsp;<strong>(cociente)</strong></div>
<h2>Regla de la cadena</h2>
<div class="box">[f(g(x))]' = f'(g(x))·g'(x)<br>"Derivada de afuera (con adentro sin cambio) por derivada de adentro"</div>
<p>Ej: (sen(x³))'=cos(x³)·3x² · (e^(x²+1))'=e^(x²+1)·2x · (ln(3x+1))'=3/(3x+1)</p>
<div class="cp"><div class="cp-q">🔍 Checkpoint — (x²·eˣ)'</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp108a','eˣ(x²+2x): producto → 2x·eˣ+x²·eˣ=eˣ(2x+x²).','')">eˣ(x²+2x)</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp108a','','Regla del producto: (fg)\'=f\'g+fg\'. Faltan dos términos.')">2x·eˣ</button>
<div class="cp-fb" id="cp108a"></div></div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — (cos(5x²))'</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp108b','−10x·sen(5x²): afuera=cos→−sen, adentro=5x²→10x.','')">−10x·sen(5x²)</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp108b','','Falta multiplicar por la derivada del argumento (10x).')">−sen(5x²)</button>
<div class="cp-fb" id="cp108b"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Derivá f(x)=3x⁴−2x²+5x−7.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">f'(x)=12x³−4x+5.</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Derivá f(x)=ln(x²+1)·sen(2x).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Producto+cadena: [2x/(x²+1)]·sen(2x)+ln(x²+1)·2cos(2x).</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Derivá f(x)=e^(√(sen(x²))) usando cadena múltiple.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">f'=e^(√sen(x²))·[1/(2√sen(x²))]·cos(x²)·2x = xe^(√sen(x²))·cos(x²)/√sen(x²).</div></div></div>
</div>` },

  109: { estimated_hours: 3, difficulty: 3, html: `<div class="cls">
<div class="hero"><div class="hero-label">Cálculo Elemental · U5</div>
<h1>Extremos y teoremas del valor medio</h1>
<p>Estos teoremas conectan el comportamiento local (en un punto) con el global (en todo un intervalo). Base teórica de la optimización.</p></div>
<h2>Teorema de Fermat y puntos críticos</h2>
<div class="box">Si f tiene extremo local en a y es derivable en a → f'(a)=0.<br>Los puntos con f'(a)=0 o f'(a) no existe son candidatos a extremo.</div>
<div class="warn">f'(0)=0 no garantiza extremo. Ej: f(x)=x³ tiene f'(0)=0 pero x=0 no es extremo (es inflexión).</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — Puntos críticos de f(x)=x³−3x</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp109a','x=±1: f\'(x)=3x²−3=3(x−1)(x+1)=0 → x=±1.','')">x = ±1</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp109a','','f\'(0)=−3≠0. No es punto crítico.')">x = 0</button>
<div class="cp-fb" id="cp109a"></div></div>
<h2>Teoremas del valor medio</h2>
<div class="box"><strong>Rolle:</strong> f continua en [a,b], derivable en (a,b), f(a)=f(b) → ∃c: f'(c)=0.<br>
<strong>Lagrange:</strong> f continua en [a,b], derivable en (a,b) → ∃c: f'(c)=[f(b)−f(a)]/(b−a).</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — f(x)=x² en [1,3]. El c de Lagrange es:</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp109b','c=2: f\'(c)=[f(3)−f(1)]/(3−1)=(9−1)/2=4. f\'(c)=2c=4→c=2∈(1,3)✓.','')">c = 2</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp109b','','[9−1]/[3−1]=4, y 2c=4→c=2.')">c = 1</button>
<div class="cp-fb" id="cp109b"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Encontrá los puntos críticos de f(x)=x³−6x²+9x+1.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">f'=3x²−12x+9=3(x−1)(x−3)=0 → x=1, x=3.</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Aplicá Rolle a f(x)=x²−4x+3 en [1,3].</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">f(1)=0=f(3)✓. f'=2x−4=0→c=2∈(1,3)✓</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Demostrá que x³+x−1=0 tiene exactamente una raíz real.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Existencia: f(0)=−1&lt;0, f(1)=1&gt;0, TVI→raíz. Unicidad: f'(x)=3x²+1&gt;0 siempre → f estrictamente creciente → a lo sumo una raíz.</div></div></div>
</div>` },

  110: { estimated_hours: 3, difficulty: 3, html: `<div class="cls">
<div class="hero"><div class="hero-label">Cálculo Elemental · U5</div>
<h1>Polinomio de Taylor y L'Hôpital</h1>
<p>Taylor aproxima funciones complejas con polinomios. L'Hôpital resuelve las indeterminaciones que no se pueden factorizar.</p></div>
<h2>Polinomio de Taylor</h2>
<div class="box">T_n(x)=f(a)+f'(a)(x−a)+f''(a)/2!(x−a)²+...+f⁽ⁿ⁾(a)/n!(x−a)ⁿ</div>
<p>Series de Maclaurin (a=0) más usadas:</p>
<div class="box">eˣ = 1+x+x²/2!+x³/3!+...<br>sen(x) = x−x³/3!+x⁵/5!−...<br>cos(x) = 1−x²/2!+x⁴/4!−...<br>ln(1+x) = x−x²/2+x³/3−... &nbsp;|x|&lt;1</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — T₂(x) de eˣ centrado en 0</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp110a','1+x+x²/2. Primeros tres términos: f(0)=1, f\'(0)=1, f\'\'(0)=1→f\'\'/2!=1/2.','')">1 + x + x²/2</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp110a','','T₂ incluye hasta el término de grado 2: x²/2.')">1 + x</button>
<div class="cp-fb" id="cp110a"></div></div>
<h2>Regla de L'Hôpital</h2>
<div class="box">Si lim f/g da 0/0 o ∞/∞: lim f/g = lim f'/g'.<br>Hipótesis: f,g derivables, g'≠0 cerca de a, y el nuevo límite existe.</div>
<div class="warn">Solo aplicar cuando hay forma indeterminada. Siempre verificar primero.</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — lim<sub>x→0</sub>(eˣ−1−x)/x²</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp110b','1/2: L\'H dos veces. 1ra: (eˣ−1)/2x → 0/0. 2da: eˣ/2 → 1/2.','')">1/2</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp110b','','Aplicá L\'H dos veces. Cada vez es 0/0.')">0</button>
<div class="cp-fb" id="cp110b"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Calculá T₃(x) de sen(x) centrado en 0.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">T₃(x)=x−x³/6.</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">L'Hôpital: lim<sub>x→0</sub>x·cot(x).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">x·cos(x)/sen(x)=(x/sen(x))·cos(x). lim(x/sen(x))=1, lim cos(x)=1. Resultado: 1.</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">lim<sub>x→0⁺</sub>x^x.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">ln(x^x)=x·ln(x)=ln(x)/(1/x). L'H: (1/x)/(−1/x²)=−x→0. x^x→e⁰=1.</div></div></div>
</div>` },

  111: { estimated_hours: 4, difficulty: 3, html: `<div class="cls">
<div class="hero"><div class="hero-label">Cálculo Elemental · U5</div>
<h1>Estudio completo de funciones</h1>
<p>El análisis completo unifica todo el cálculo diferencial. La gráfica final es la síntesis de dominio, asíntotas, extremos y concavidad.</p></div>
<h2>Protocolo en 4 pasos</h2>
<div class="box"><strong>1. Dominio y características globales:</strong> Dom, paridad, raíces, signos.<br>
<strong>2. Asíntotas:</strong> verticales (denom=0), horizontales (lim<sub>±∞</sub>), oblicuas.<br>
<strong>3. f'(x):</strong> puntos críticos, crecimiento (f'&gt;0), decrecimiento (f'&lt;0), extremos locales.<br>
<strong>4. f''(x):</strong> cóncava arriba (f''&gt;0), cóncava abajo (f''&lt;0), puntos de inflexión (f''=0 con cambio de signo).</div>
<h2>Ejemplo: f(x)=x³−3x</h2>
<p>Dom=ℝ. Impar. Raíces: 0, ±√3. f'=3x²−3=3(x−1)(x+1): creciente en (−∞,−1)∪(1,+∞), decreciente en (−1,1). Máx local (−1,2), mín local (1,−2). f''=6x: cóncava ↑ para x&gt;0, ↓ para x&lt;0. Inflexión en (0,0).</p>
<div class="cp"><div class="cp-q">🔍 Checkpoint — f(x)=x³−3x. Inflexión en:</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp111a','x=0: f\'\'=6x=0 y cambia de negativo a positivo.','')">x = 0</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp111a','','x=±1 son extremos locales (f\'=0), no inflexiones (f\'\'≠0 allí).')">x = ±1</button>
<div class="cp-fb" id="cp111a"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Crecimiento, decrecimiento y extremos de f(x)=x²−4x+3.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">f'=2x−4=0→x=2. Decreciente (−∞,2), creciente (2,+∞). Mín absoluto en x=2: f(2)=−1.</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Análisis completo de f(x)=x/(x²+1).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Dom=ℝ. Impar. Asíntota horiz y=0. f'=(1−x²)/(x²+1)²=0→x=±1. Máx(1,1/2), mín(−1,−1/2). Inflexiones en x=0,±√3.</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Optimización: rectángulo con perímetro 100m, maximizar área.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">2(x+y)=100→y=50−x. A=x(50−x). A'=50−2x=0→x=25. Cuadrado 25×25m, área=625m².</div></div></div>
</div>` },

  112: { estimated_hours: 4, difficulty: 3, html: `<div class="cls">
<div class="hero"><div class="hero-label">Cálculo Elemental · U6 ⭐</div>
<h1>Primitivas y métodos de integración</h1>
<p>Integrar es la operación inversa de derivar. Los métodos son imprescindibles para el final.</p></div>
<h2>Primitiva e integral indefinida</h2>
<p>F es primitiva de f si F'(x)=f(x). ∫f(x)dx=F(x)+C incluye todas las primitivas.</p>
<table class="sum"><tr><th>∫f dx</th><th>Resultado</th><th>∫f dx</th><th>Resultado</th></tr>
<tr><td>∫xⁿdx</td><td>xⁿ⁺¹/(n+1)+C</td><td>∫eˣdx</td><td>eˣ+C</td></tr>
<tr><td>∫1/x dx</td><td>ln|x|+C</td><td>∫sen x dx</td><td>−cos x+C</td></tr>
<tr><td>∫cos x dx</td><td>sen x+C</td><td>∫sec²x dx</td><td>tan x+C</td></tr>
</table>
<h2>Sustitución (cambio de variable)</h2>
<div class="box">∫f(g(x))g'(x)dx: sea u=g(x), du=g'(x)dx → ∫f(u)du.</div>
<p>Ej: ∫2x·cos(x²)dx. u=x², du=2x dx → ∫cos(u)du=sen(u)+C=sen(x²)+C.</p>
<div class="cp"><div class="cp-q">🔍 Checkpoint — ∫3x²/(x³+1)dx</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp112a','ln|x³+1|+C: u=x³+1, du=3x²dx → ∫du/u=ln|u|+C.','')">ln|x³+1| + C</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp112a','','Es tipo logarítmico. Usá sustitución u=x³+1.')">1/(x³+1)+C</button>
<div class="cp-fb" id="cp112a"></div></div>
<h2>Integración por partes</h2>
<div class="box">∫u dv = u·v − ∫v du. Elegir u por prioridad LIATE: Log, Inv-trig, Algebraica, Trig, Exp.</div>
<p>Ej: ∫x·eˣdx. u=x, dv=eˣdx → du=dx, v=eˣ. → xeˣ−∫eˣdx=eˣ(x−1)+C.</p>
<div class="cp"><div class="cp-q">🔍 Checkpoint — ∫ln(x)dx. ¿Qué elegís como u?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp112b','u=ln(x), dv=dx. Resultado: x·ln(x)−x+C.','')">u = ln(x)</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp112b','','Si u=1 necesitás la primitiva de ln, que es lo que buscás.')">u = 1</button>
<div class="cp-fb" id="cp112b"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Calculá ∫(3x²−2x+4)dx.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">x³−x²+4x+C.</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">∫x·sen(x)dx por partes.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">u=x, dv=sen(x)dx → du=dx, v=−cos(x). → −x·cos(x)+∫cos(x)dx=−x·cos(x)+sen(x)+C.</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">∫eˣ·sen(x)dx (requiere partes dos veces).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">I=∫eˣsen x dx. Partes 1→−eˣcos x+∫eˣcos x dx. Partes 2→−eˣcos x+eˣsen x−∫eˣsen x dx=−eˣcos x+eˣsen x−I. 2I=eˣ(sen x−cos x). I=eˣ(sen x−cos x)/2+C.</div></div></div>
</div>` },

  113: { estimated_hours: 4, difficulty: 3, html: `<div class="cls">
<div class="hero"><div class="hero-label">Cálculo Elemental · U7 ⭐</div>
<h1>Integral definida y Teorema Fundamental del Cálculo</h1>
<p>El TFC es el resultado más poderoso del cálculo: conecta la derivada (cambio instantáneo) con la integral (acumulación).</p></div>
<h2>Integral de Riemann</h2>
<p>∫ₐᵇf(x)dx = lim<sub>n→∞</sub>Σf(xᵢ)Δx. Área con signo entre la curva y el eje x en [a,b].</p>
<div class="box">Si f≥0: la integral es el área. Si f&lt;0: la integral es negativa.<br>Propiedad aditiva: ∫ₐᵇ+∫ᵦᶜ=∫ₐᶜ</div>
<h2>Teorema Fundamental del Cálculo</h2>
<div class="box"><strong>Parte 1:</strong> G(x)=∫ₐˣf(t)dt → G'(x)=f(x).<br>
<strong>Parte 2 (Barrow):</strong> ∫ₐᵇf(x)dx=F(b)−F(a) donde F'=f.</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — ∫₁³ 2x dx</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp113a','8: F(x)=x². F(3)−F(1)=9−1=8.','')">8</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp113a','','F(x)=x². Barrow: F(3)−F(1)=9−1=8.')">6</button>
<div class="cp-fb" id="cp113a"></div></div>
<h2>Integrales impropias</h2>
<div class="box">∫ₐ^(+∞)f(x)dx = lim<sub>t→+∞</sub>∫ₐᵗf(x)dx. Converge si el límite es finito.</div>
<p>Ej: ∫₁^∞1/x²dx=[−1/x]₁^∞=0−(−1)=1. Converge. Ej: ∫₁^∞1/x dx=[ln x]₁^∞=∞. Diverge.</p>
<div class="cp"><div class="cp-q">🔍 Checkpoint — ∫₁^∞ 1/x dx</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp113b','Diverge: [ln x]₁^∞=∞−0=∞.','')">Diverge</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp113b','','[ln x]₁^t=ln t→∞. No converge.')">Converge a 1</button>
<div class="cp-fb" id="cp113b"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">∫₀^π sen(x)dx.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">[−cos x]₀^π=−cos π+cos 0=1+1=2.</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">G(x)=∫₀^x t²eᵗdt. Calculá G'(x) y G'(2).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">TFC Parte 1: G'(x)=x²eˣ. G'(2)=4e².</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Estudia convergencia de ∫₀¹ 1/√x dx.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">lim<sub>ε→0⁺</sub>∫ε¹x^(−1/2)dx=[2√x]ε¹=2−2√ε→2. Converge a 2.</div></div></div>
</div>` },

  114: { estimated_hours: 3, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Cálculo Elemental · U7 ⭐</div>
<h1>Aplicaciones de la integral: áreas y volúmenes</h1>
<p>La integral definida mide áreas con signo. La diferencia ∫(f−g) entre dos curvas es la aplicación geométrica más directa.</p></div>
<h2>Área entre dos curvas</h2>
<div class="box">Si f(x)≥g(x) en [a,b]: A=∫ₐᵇ[f(x)−g(x)]dx.<br>
Paso 1: encontrá intersecciones (f=g).<br>Paso 2: verificá cuál está arriba.<br>Paso 3: integrá la diferencia.</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — Área entre f(x)=x² y g(x)=x en [0,1]</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp114a','1/6: en [0,1] g≥f. ∫₀¹(x−x²)dx=[x²/2−x³/3]₀¹=1/2−1/3=1/6.','')">1/6</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp114a','','∫₀¹(x−x²)dx=1/2−1/3=1/6, no 1/2.')">1/2</button>
<div class="cp-fb" id="cp114a"></div></div>
<h2>Volumen de revolución</h2>
<div class="box">Método del disco: V=π∫ₐᵇ[f(x)]²dx (rotación alrededor del eje x).</div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Área entre f(x)=4−x² y el eje x.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Raíces x=±2. A=∫₋₂²(4−x²)dx=[4x−x³/3]₋₂²=32/3.</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Área entre f(x)=x² y g(x)=2x.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Intersecciones x=0,2. A=∫₀²(2x−x²)dx=[x²−x³/3]₀²=4−8/3=4/3.</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Volumen del sólido al rotar y=√x, 0≤x≤4, alrededor del eje x.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">V=π∫₀⁴x dx=π[x²/2]₀⁴=8π.</div></div></div>
</div>` },

  115: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Cálculo Elemental · U8 ⭐</div>
<h1>Sucesiones y su límite</h1>
<p>Una sucesión es una lista ordenada infinita. Su límite se calcula con las mismas técnicas que los límites al infinito.</p></div>
<h2>Definición y ejemplos</h2>
<div class="box">aₙ=1/n: 1, 1/2, 1/3, ... → lim=0 (converge)<br>aₙ=n²/(n+1): ... → lim=∞ (diverge)<br>aₙ=(−1)ⁿ: −1,1,−1,1,... → no existe (oscila)</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — lim<sub>n→∞</sub>(3n²+1)/(n²−5n)</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp115a','3: dividir por n²: (3+1/n²)/(1−5/n) → 3/1=3.','')">3</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp115a','','El grado del num y denom es 2. Dividí por n².')">+∞</button>
<div class="cp-fb" id="cp115a"></div></div>
<h2>Sucesiones monótonas y acotadas</h2>
<div class="box">Monótona creciente: aₙ₊₁≥aₙ. Acotada: |aₙ|≤M para todo n.<br>Teorema: toda sucesión monótona y acotada converge.</div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">lim<sub>n→∞</sub>(2n³−5n)/(3n³+1).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Dividir por n³: 2/3.</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Mostrá que aₙ=n/(n+1) es creciente y acotada. ¿A qué converge?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">aₙ₊₁−aₙ=1/[(n+2)(n+1)]&gt;0 → creciente. 0&lt;aₙ&lt;1 → acotada. lim=1.</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">lim<sub>n→∞</sub> n^(1/n).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">bₙ=ln(n)/n. L'H como función continua: (1/x)/1=1/x→0. Entonces n^(1/n)→e⁰=1.</div></div></div>
</div>` },

  116: { estimated_hours: 3, difficulty: 3, html: `<div class="cls">
<div class="hero"><div class="hero-label">Cálculo Elemental · U8 ⭐</div>
<h1>Series y criterios de convergencia</h1>
<p>Una serie suma infinitos términos. La pregunta es si esa suma es finita (converge) o infinita (diverge).</p></div>
<h2>Condición necesaria y serie geométrica</h2>
<div class="box">Si Σaₙ converge → aₙ→0. (El recíproco es FALSO: Σ1/n diverge aunque 1/n→0.)<br>Serie geométrica Σrⁿ: converge a 1/(1−r) si |r|&lt;1, diverge si |r|≥1.</div>
<h2>Criterios de convergencia</h2>
<div class="box"><strong>Cociente (D'Alembert):</strong> L=lim|a<sub>n+1</sub>/aₙ|. L&lt;1→converge. L&gt;1→diverge. L=1→no decide.<br>
<strong>Raíz (Cauchy):</strong> L=lim|aₙ|^(1/n). Mismas reglas.<br>
<strong>Comparación:</strong> 0≤aₙ≤bₙ y Σbₙ converge → Σaₙ converge.</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — Σ(1/2)ⁿ para n=0 a ∞. ¿Converge?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp116a','Converge a 2: serie geométrica r=1/2&lt;1. Suma=1/(1−1/2)=2.','')">Sí, suma=2</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp116a','','r=1/2&lt;1 → converge. Suma=1/(1−1/2)=2.')">No converge</button>
<div class="cp-fb" id="cp116a"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Σ(2/3)ⁿ para n=0 a ∞. ¿A qué converge?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">r=2/3&lt;1. Suma=1/(1−2/3)=3.</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Criterio del cociente para Σn!/2ⁿ.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">|a<sub>n+1</sub>/aₙ|=(n+1)/2→∞&gt;1. Diverge.</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Radio de convergencia de Σnxⁿ.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">cₙ=n. R=1/lim(n+1)/n=1. Converge en (−1,1). En x=±1 diverge (nxⁿ↛0).</div></div></div>
</div>` },

// ── Informática General ──────────────────────────────────────────────────
  201: { estimated_hours: 2, difficulty: 1, html: `<div class="cls">
<div class="hero"><div class="hero-label">Informática General · U1</div>
<h1>La computadora y las etapas de resolución de problemas</h1>
<p>Antes de escribir una sola línea de código hay que entender qué hace la máquina y cómo se estructura el pensamiento algorítmico.</p></div>
<h2>Componentes de la computadora</h2>
<div class="box"><strong>Hardware:</strong> CPU (procesa), RAM (memoria volátil), disco (almacenamiento persistente), E/S (teclado, pantalla).<br>
<strong>Software:</strong> SO (administra recursos), aplicaciones, código fuente → compilador/intérprete → código ejecutable.</div>
<h2>Las 6 etapas de resolución de un problema</h2>
<div class="box">1. <strong>Análisis:</strong> entender qué se pide (entradas, salidas, restricciones).<br>
2. <strong>Diseño:</strong> planificar el algoritmo (pseudocódigo, diagrama de flujo).<br>
3. <strong>Codificación:</strong> traducir el diseño a un lenguaje de programación.<br>
4. <strong>Compilación/interpretación:</strong> convertir a código ejecutable.<br>
5. <strong>Prueba:</strong> ejecutar con casos representativos y verificar resultados.<br>
6. <strong>Documentación:</strong> comentarios, manual de uso.</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿En qué etapa se detectan errores de lógica?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp201a','Prueba: los errores de lógica (el programa corre pero da resultados incorrectos) se detectan ejecutando casos de prueba.','')">Prueba</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp201a','','Compilación detecta errores de sintaxis, no de lógica.')">Compilación</button>
<div class="cp-fb" id="cp201a"></div></div>
<h2>Python como lenguaje interpretado</h2>
<p>Python es interpretado: el intérprete ejecuta línea a línea sin compilar a binario nativo. Ventaja: rápido para probar. Desventaja: más lento que C en ejecución.</p>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">¿Cuál es la diferencia entre RAM y disco duro?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">RAM: volátil, acceso rápido, almacena lo que está en ejecución. Disco: persistente, acceso más lento, almacena archivos aunque se apague el equipo.</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Describí en pseudocódigo las etapas para calcular el promedio de 5 notas.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">INICIO → leer n1,n2,n3,n4,n5 → promedio=(n1+n2+n3+n4+n5)/5 → mostrar promedio → FIN.</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">¿Qué es un algoritmo? ¿Cuáles son sus propiedades necesarias?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Un algoritmo es una secuencia finita, ordenada y no ambigua de pasos que resuelve un problema. Propiedades: finito (termina), definitivo (no ambiguo), entradas/salidas definidas, efectivo (cada paso es ejecutable).</div></div></div>
</div>` },

  202: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Informática General · U1</div>
<h1>Sistemas numéricos y conversión de bases</h1>
<p>La computadora solo trabaja con 0 y 1. Entender binario, octal y hexadecimal es clave para comprender cómo se almacenan datos.</p></div>
<h2>Bases numéricas</h2>
<div class="box">Decimal (base 10): dígitos 0-9. Posición i vale dígito × 10ⁱ.<br>
Binario (base 2): dígitos 0,1. Posición i vale dígito × 2ⁱ.<br>
Octal (base 8): dígitos 0-7. Hexadecimal (base 16): 0-9, A-F.</div>
<h2>Conversiones</h2>
<div class="box"><strong>Decimal → Binario:</strong> dividir por 2, tomar restos de abajo hacia arriba.<br>
Ej: 13 → 13÷2=6r1, 6÷2=3r0, 3÷2=1r1, 1÷2=0r1 → 1101₂<br>
<strong>Binario → Decimal:</strong> sumar potencias de 2.<br>
1101₂ = 8+4+0+1 = 13<br>
<strong>Hex → Binario:</strong> cada dígito hex = 4 bits. A=1010, F=1111.</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Cuánto vale 1010₂ en decimal?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp202a','10: 1×8+0×4+1×2+0×1=10.','')">10</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp202a','','No es 1010 decimal. En binario: 8+0+2+0=10.')">1010</button>
<div class="cp-fb" id="cp202a"></div></div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — 255 en hexadecimal</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp202b','FF: 255=15×16+15. F=15. → FF.','')">FF</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp202b','','255÷16=15 resto 15. Ambos dígitos son F=15.'>">EF</button>
<div class="cp-fb" id="cp202b"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Convertí 42 (decimal) a binario.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">42÷2=21r0, 21÷2=10r1, 10÷2=5r0, 5÷2=2r1, 2÷2=1r0, 1÷2=0r1 → 101010₂.</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Convertí 3A₁₆ a decimal y a binario.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">3A₁₆: 3×16+10=58. Binario: 3=0011, A=1010 → 00111010₂.</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Sumá 1011₂ + 1101₂ en binario y verificá en decimal.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">1011+1101: columna a columna con acarreo → 11000₂=24. Decimal: 11+13=24 ✓.</div></div></div>
</div>` },

  203: { estimated_hours: 2, difficulty: 1, html: `<div class="cls">
<div class="hero"><div class="hero-label">Informática General · U1</div>
<h1>Python: variables, tipos y operadores</h1>
<p>Los tres pilares de cualquier programa. Sin entender tipos no se puede depurar, sin entender operadores no se puede calcular.</p></div>
<h2>Variables y asignación</h2>
<p>Una variable es un nombre que apunta a un valor en memoria. En Python no se declara el tipo: se infiere del valor asignado.</p>
<pre>nombre = "Ana"
edad = 20
altura = 1.65
activo = True</pre>
<h2>Tipos de datos básicos</h2>
<div class="box"><strong>int:</strong> enteros. 5, −3, 0.<br>
<strong>float:</strong> decimales. 3.14, −0.5, 1e10.<br>
<strong>str:</strong> cadenas de texto. "hola", 'mundo'.<br>
<strong>bool:</strong> True o False.</div>
<p>Funciones útiles: <code>type(x)</code> — tipo de x. <code>int("5")</code>, <code>float("3.2")</code>, <code>str(42)</code> — conversión.</p>
<h2>Operadores</h2>
<div class="box">Aritméticos: + − * / // % **<br>
Nota: / siempre devuelve float. // es división entera. % es resto. ** es potencia.<br>
Comparación: == != &lt; &gt; &lt;= &gt;= → devuelven bool.<br>
Lógicos: and, or, not.</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué devuelve 17 // 5 en Python?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp203a','3: división entera (piso). 17÷5=3.4, la parte entera es 3.','')">3</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp203a','','// es división entera, no división decimal.')">3.4</button>
<div class="cp-fb" id="cp203a"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">¿Qué imprime?: x=10; y=3; print(x%y, x//y, x**y)</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">1 3 1000. (10%3=1, 10//3=3, 10**3=1000)</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Escribí código que pida el nombre y edad del usuario e imprima "Hola [nombre], en 10 años tendrás [edad+10]".</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">nombre=input("Nombre: "); edad=int(input("Edad: ")); print("Hola "+nombre+", en 10 años tendrás "+str(edad+10))</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">¿Qué imprime?: print(type(5/2), type(5//2), type(5.0//2))</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">&lt;class 'float'&gt; &lt;class 'int'&gt; &lt;class 'float'&gt;. La / siempre da float. // con enteros da int; con float da float.</div></div></div>
</div>` },

  204: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Informática General · U2</div>
<h1>Funciones propias: parámetros y retorno</h1>
<p>Las funciones son el mecanismo central de reutilización de código. Dominarlas es el salto de "escribir código" a "programar".</p></div>
<h2>Definición y llamada</h2>
<pre>def saludar(nombre):
    mensaje = "Hola, " + nombre
    return mensaje

resultado = saludar("Ana")   # llama y guarda el retorno
print(resultado)              # Hola, Ana</pre>
<div class="box"><strong>def:</strong> define la función. <strong>parámetros:</strong> variables locales que reciben los argumentos. <strong>return:</strong> devuelve un valor (sin return → devuelve None).</div>
<h2>Alcance (scope)</h2>
<div class="box">Variables dentro de la función son <strong>locales</strong>: no existen fuera.<br>
Variables fuera de la función son <strong>globales</strong>: visibles pero no modificables (sin global).</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué imprime?<br>def f(x): return x*2<br>print(f(3)+f(4))</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp204a','14: f(3)=6, f(4)=8, 6+8=14.','')">14</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp204a','','f devuelve el doble del argumento. f(3)=6, f(4)=8.')">7</button>
<div class="cp-fb" id="cp204a"></div></div>
<h2>Parámetros por defecto</h2>
<pre>def potencia(base, exp=2):
    return base ** exp

print(potencia(3))    # 9 (exp=2 por defecto)
print(potencia(2,3))  # 8</pre>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Escribí una función <code>area_rectangulo(base, altura)</code> que devuelva el área.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def area_rectangulo(base, altura): return base * altura</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Escribí <code>es_par(n)</code> que devuelva True si n es par, False si no.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def es_par(n): return n % 2 == 0</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Escribí <code>maximo3(a,b,c)</code> que devuelva el máximo de tres números sin usar max().</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def maximo3(a,b,c):<br>&nbsp;&nbsp;m=a<br>&nbsp;&nbsp;if b&gt;m: m=b<br>&nbsp;&nbsp;if c&gt;m: m=c<br>&nbsp;&nbsp;return m</div></div></div>
</div>` },

  205: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Informática General · U2</div>
<h1>Funciones booleanas y uso de bibliotecas</h1>
<p>Las funciones que retornan bool son el puente entre los datos y las decisiones. Las bibliotecas evitan reinventar la rueda.</p></div>
<h2>Funciones booleanas</h2>
<pre>def es_primo(n):
    if n &lt; 2: return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0: return False
    return True</pre>
<div class="box">Una función booleana retorna True o False. Se usan directamente en condiciones: <code>if es_primo(17):</code></div>
<h2>Biblioteca math</h2>
<div class="box">import math<br>
math.sqrt(x) — raíz cuadrada<br>
math.floor(x) — piso | math.ceil(x) — techo<br>
math.pi — π≈3.14159 | math.e — e≈2.71828<br>
math.log(x) — logaritmo natural | math.log(x,b) — log base b</div>
<h2>Biblioteca random</h2>
<div class="box">import random<br>
random.randint(a,b) — entero aleatorio en [a,b]<br>
random.random() — float en [0,1)<br>
random.choice(lista) — elemento aleatorio de una lista</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué hace math.floor(3.9)?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp205a','Devuelve 3: piso es el mayor entero ≤ x. math.ceil(3.9)=4.','')">3</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp205a','','floor es piso (redondea hacia abajo). ceil sería 4.')">4</button>
<div class="cp-fb" id="cp205a"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Usá math para calcular la hipotenusa de un triángulo con catetos 3 y 4.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">import math; h=math.sqrt(3**2+4**2); print(h)  # 5.0</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Escribí una función <code>simular_dado()</code> que simule un dado de 6 caras.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">import random; def simular_dado(): return random.randint(1,6)</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Escribí <code>contar_primos(n)</code> que cuente cuántos primos hay entre 2 y n usando la función es_primo().</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def contar_primos(n):<br>&nbsp;&nbsp;cont=0<br>&nbsp;&nbsp;for i in range(2,n+1):<br>&nbsp;&nbsp;&nbsp;&nbsp;if es_primo(i): cont+=1<br>&nbsp;&nbsp;return cont</div></div></div>
</div>` },

  206: { estimated_hours: 3, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Informática General · U3</div>
<h1>Lógica proposicional y estructuras condicionales</h1>
<p>El condicional es la bifurcación del flujo. Con if/elif/else el programa toma decisiones según el estado de los datos.</p></div>
<h2>Operadores lógicos y tabla de verdad</h2>
<div class="box">and: True solo si ambos True.<br>
or: True si al menos uno True.<br>
not: invierte el valor.</div>
<table class="sum"><tr><th>A</th><th>B</th><th>A and B</th><th>A or B</th><th>not A</th></tr>
<tr><td>T</td><td>T</td><td>T</td><td>T</td><td>F</td></tr>
<tr><td>T</td><td>F</td><td>F</td><td>T</td><td>F</td></tr>
<tr><td>F</td><td>T</td><td>F</td><td>T</td><td>T</td></tr>
<tr><td>F</td><td>F</td><td>F</td><td>F</td><td>T</td></tr>
</table>
<h2>if / elif / else</h2>
<pre>nota = int(input("Nota: "))
if nota &gt;= 90:
    print("Excelente")
elif nota &gt;= 70:
    print("Aprobado")
elif nota &gt;= 60:
    print("Regular")
else:
    print("Reprobado")</pre>
<div class="cp"><div class="cp-q">🔍 Checkpoint — x=5, y=3. ¿Qué vale x&gt;3 and y&lt;5?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp206a','True: x&gt;3 es True (5&gt;3), y&lt;5 es True (3&lt;5). True and True = True.','')">True</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp206a','','Ambas condiciones son True. True and True = True.')">False</button>
<div class="cp-fb" id="cp206a"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Escribí código que lea un número y diga si es positivo, negativo o cero.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">n=float(input()); if n&gt;0: print("positivo") elif n&lt;0: print("negativo") else: print("cero")</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Clasificá un año como bisiesto (divisible por 4, excepto centenarios a menos que sean divisibles por 400).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">a=int(input()); if (a%4==0 and a%100!=0) or a%400==0: print("bisiesto") else: print("no bisiesto")</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Dado un triángulo con lados a,b,c: clasificalo (equilátero/isósceles/escaleno) y verificá si es válido (desigualdad triangular).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Válido: a+b&gt;c and b+c&gt;a and a+c&gt;b. Si válido: equilátero si a==b==c; isósceles si a==b or b==c or a==c; sino escaleno.</div></div></div>
</div>` },

  207: { estimated_hours: 3, difficulty: 3, html: `<div class="cls">
<div class="hero"><div class="hero-label">Informática General · U3</div>
<h1>Algoritmos de búsqueda y selección con condicionales</h1>
<p>Encontrar el máximo, mínimo o un valor específico son los algoritmos más frecuentes. La clave es el patrón de "mejor candidato actual".</p></div>
<h2>Algoritmo del máximo</h2>
<pre>def maximo(a, b, c, d):
    m = a            # candidato inicial
    if b &gt; m: m = b  # actualizar si encontramos mejor
    if c &gt; m: m = c
    if d &gt; m: m = d
    return m</pre>
<div class="box">Patrón: inicializar con el primer elemento, recorrer actualizando si se encuentra uno mejor.</div>
<h2>Búsqueda lineal con flag</h2>
<pre>def contiene(a, b, c, objetivo):
    encontrado = False
    if a == objetivo: encontrado = True
    if b == objetivo: encontrado = True
    if c == objetivo: encontrado = True
    return encontrado</pre>
<div class="cp"><div class="cp-q">🔍 Checkpoint — maximo(3,7,2,9) devuelve:</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp207a','9: al comparar d=9 con m=7, 9&gt;7 → m=9.','')">9</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp207a','','El algoritmo actualiza m cada vez que encuentra un valor mayor.')">7</button>
<div class="cp-fb" id="cp207a"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Escribí <code>minimo(a,b,c)</code> que devuelva el mínimo de tres valores.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def minimo(a,b,c):<br>&nbsp;&nbsp;m=a<br>&nbsp;&nbsp;if b&lt;m: m=b<br>&nbsp;&nbsp;if c&lt;m: m=c<br>&nbsp;&nbsp;return m</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Escribí <code>entre(x,a,b)</code> que devuelva True si a ≤ x ≤ b.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def entre(x,a,b): return a &lt;= x &lt;= b</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Dados cuatro números a,b,c,d: devolvé el segundo mayor (sin sort).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Encontrá el máximo m1. Luego buscá el máximo entre los que son distintos de m1 (o excluí el índice del primero). Alternativa: ordenar con comparaciones y devolver el segundo.</div></div></div>
</div>` },

  208: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Informática General · U4</div>
<h1>Ciclos: for, while y range()</h1>
<p>Los ciclos son la automatización de la repetición. Sin ellos, procesar 1000 datos requeriría 1000 líneas de código.</p></div>
<h2>El ciclo for con range()</h2>
<pre>for i in range(5):        # i = 0,1,2,3,4
    print(i)

for i in range(1, 11, 2): # i = 1,3,5,7,9 (inicio, fin excluido, paso)
    print(i)</pre>
<div class="box">range(n): 0 a n−1. range(a,b): a a b−1. range(a,b,paso): con incremento.</div>
<h2>El ciclo while</h2>
<pre>n = int(input("n: "))
while n &lt;= 0:            # repite mientras la condición sea True
    n = int(input("Ingresá un positivo: "))
print("OK:", n)</pre>
<div class="warn">Cuidado con el bucle infinito: la condición debe poder volverse False.</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — range(2, 10, 3) genera:</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp208a','2, 5, 8: empieza en 2, suma 3 cada vez, para antes de 10.','')">2, 5, 8</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp208a','','El paso es 3. 2→5→8→11 (fuera de rango).')">2, 4, 6, 8</button>
<div class="cp-fb" id="cp208a"></div></div>
<h2>break y continue</h2>
<div class="box">break: sale del ciclo inmediatamente.<br>continue: salta al siguiente paso del ciclo, sin ejecutar el resto del cuerpo.</div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Imprimí los primeros 10 múltiplos de 7 usando for.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">for i in range(1,11): print(7*i)</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Con while, leé números del usuario hasta que ingrese 0. Imprimí cuántos ingresó.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">cont=0; n=int(input()); while n!=0: cont+=1; n=int(input()); print(cont)</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Imprimí un triángulo de asteriscos de altura n (n=4: *, **, ***, ****).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">n=4; for i in range(1,n+1): print('*'*i)</div></div></div>
</div>` },

  209: { estimated_hours: 3, difficulty: 3, html: `<div class="cls">
<div class="hero"><div class="hero-label">Informática General · U4</div>
<h1>Algoritmos con ciclos: acumuladores, contadores y flags</h1>
<p>La mayoría de los algoritmos reales combinan estos tres patrones. Reconocerlos ahorra horas de diseño.</p></div>
<h2>Patrones fundamentales</h2>
<div class="box"><strong>Acumulador:</strong> suma (o producto) de valores.<br>
<code>total = 0; for x in ...: total += x</code><br>
<strong>Contador:</strong> cuenta cuántos cumplen una condición.<br>
<code>cont = 0; for x in ...: if condicion: cont += 1</code><br>
<strong>Flag (bandera):</strong> detecta si algo ocurrió.<br>
<code>encontrado = False; for x in ...: if x==objetivo: encontrado=True; break</code></div>
<h2>Máximo y mínimo con ciclos</h2>
<pre>def maximo_lista(nums):
    m = nums[0]                # primer elemento como candidato
    for x in nums[1:]:
        if x &gt; m: m = x
    return m</pre>
<div class="cp"><div class="cp-q">🔍 Checkpoint — suma de 1 a 100 con for</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp209a','5050: total=0; for i in range(1,101): total+=i → 5050. (Gauss: 100×101/2)','')">5050</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp209a','','range(1,101) incluye 1 pero excluye 101. La suma es 5050.')">5000</button>
<div class="cp-fb" id="cp209a"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Calculá el factorial de n con un ciclo (n! = 1×2×...×n).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">n=5; fact=1; for i in range(1,n+1): fact*=i; print(fact)</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Leé 10 notas y calculá promedio, máximo y cuántas son mayores al promedio.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">notas=[]; for _ in range(10): notas.append(float(input())); prom=sum(notas)/10; mx=max(notas); sup=sum(1 for n in notas if n&gt;prom); print(prom,mx,sup)</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Verificá si un número es perfecto (igual a la suma de sus divisores propios). Ej: 6=1+2+3.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def es_perfecto(n): return n==sum(i for i in range(1,n) if n%i==0)</div></div></div>
</div>` },

  210: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Informática General · U5</div>
<h1>Strings: acceso, slices y operaciones</h1>
<p>Los strings son inmutables y secuenciales. Dominar indexación y slicing es básico para cualquier procesamiento de texto.</p></div>
<h2>Indexación</h2>
<div class="box">s = "Python"<br>
s[0]='P', s[1]='y', ..., s[5]='n'<br>
s[-1]='n', s[-2]='o' (índices negativos: desde el final)<br>
len(s) = 6</div>
<h2>Slicing</h2>
<div class="box">s[inicio:fin] → desde inicio hasta fin-1<br>
s[1:4] = "yth" · s[:3] = "Pyt" · s[3:] = "hon" · s[::2] = "Pto"<br>
s[::-1] = "nohtyP" (cadena invertida)</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — s="abcdef". ¿Qué devuelve s[1:4]?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp210a','"bcd": índices 1,2,3. El índice 4 (e) no se incluye.','')">bcd</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp210a','','El fin es excluido. s[1:4] toma posiciones 1, 2, 3.')">bcde</button>
<div class="cp-fb" id="cp210a"></div></div>
<h2>Métodos de string</h2>
<div class="box">s.upper() · s.lower() · s.strip() — quitar espacios<br>
s.split(',') → lista · ','.join(lista) → string<br>
s.replace('a','@') · s.find('x') → índice o -1<br>
s.startswith('P') · s.endswith('n') → bool</div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">¿Qué imprime?: s="Hola Mundo"; print(s[5:], len(s), s.upper())</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Mundo 10 HOLA MUNDO</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Escribí una función que cuente cuántas veces aparece una vocal en un string.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def contar_vocales(s): return sum(1 for c in s.lower() if c in 'aeiou')</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Verificá si un string es palíndromo ignorando mayúsculas y espacios.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def palindromo(s): s2=s.lower().replace(' ',''); return s2==s2[::-1]</div></div></div>
</div>` },

  211: { estimated_hours: 3, difficulty: 3, html: `<div class="cls">
<div class="hero"><div class="hero-label">Informática General · U5</div>
<h1>Algoritmos de procesamiento de strings</h1>
<p>Recorrer un string carácter a carácter combina todo lo anterior: ciclos, condicionales y acumuladores aplicados a texto.</p></div>
<h2>Recorrido carácter a carácter</h2>
<pre>def solo_digitos(s):
    resultado = ""
    for c in s:
        if c.isdigit():
            resultado += c
    return resultado

print(solo_digitos("abc123def45"))  # "12345"</pre>
<div class="box">Métodos de clasificación: c.isdigit(), c.isalpha(), c.isalnum(), c.isupper(), c.islower(), c.isspace()</div>
<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué devuelve "A3b".isalpha()?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp211a','False: "3" no es letra. isalpha() requiere que TODOS los caracteres sean letras.','')">False</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp211a','','isalpha() devuelve True solo si TODOS los caracteres son letras. "3" no lo es.')">True</button>
<div class="cp-fb" id="cp211a"></div></div>
<h2>Construcción de strings</h2>
<p>Concatenar dentro de un ciclo es ineficiente para strings muy largos. Mejor usar una lista y join al final:</p>
<pre>partes = []
for c in s:
    if c.isalpha(): partes.append(c.upper())
resultado = ''.join(partes)</pre>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Escribí una función que cuente letras mayúsculas en un string.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def contar_mayus(s): return sum(1 for c in s if c.isupper())</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Escribí <code>cifrar_cesar(s, k)</code>: desplazá cada letra k posiciones (solo letras, preservá mayúsculas).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def cifrar_cesar(s,k):<br>&nbsp;&nbsp;r=""; for c in s:<br>&nbsp;&nbsp;&nbsp;&nbsp;if c.isalpha():<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b=ord('A') if c.isupper() else ord('a')<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;r+=chr((ord(c)-b+k)%26+b)<br>&nbsp;&nbsp;&nbsp;&nbsp;else: r+=c<br>&nbsp;&nbsp;return r</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Dado un texto, devolvé un diccionario con la frecuencia de cada carácter.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def frecuencias(s):<br>&nbsp;&nbsp;d={}<br>&nbsp;&nbsp;for c in s: d[c]=d.get(c,0)+1<br>&nbsp;&nbsp;return d</div></div></div>
</div>` },

  212: { estimated_hours: 3, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Informática General · U6</div>
<h1>Listas, tuplas y diccionarios</h1>
<p>Las colecciones son estructuras que agrupan múltiples valores. Elegir la correcta depende de si los datos cambian y de cómo se acceden.</p></div>
<h2>Listas: mutables y ordenadas</h2>
<pre>nums = [3, 1, 4, 1, 5]
nums.append(9)         # [3,1,4,1,5,9]
nums.insert(0, 0)      # [0,3,1,4,1,5,9]
nums.remove(1)         # elimina primera ocurrencia
del nums[0]            # elimina por índice
nums.sort()            # ordena in-place
len(nums)              # cantidad de elementos</pre>
<h2>Tuplas: inmutables</h2>
<div class="box">punto = (3, 4). No se puede modificar. Más eficientes que listas.<br>
Desempaquetado: x, y = punto</div>
<h2>Diccionarios: clave-valor</h2>
<pre>persona = {"nombre": "Ana", "edad": 20}
persona["edad"] = 21       # modificar
persona["carrera"] = "Ing" # agregar
del persona["edad"]        # eliminar
"nombre" in persona        # True
for clave, valor in persona.items(): ...</pre>
<div class="cp"><div class="cp-q">🔍 Checkpoint — d={"a":1,"b":2}. ¿Qué devuelve d.get("c", 0)?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp212a','0: "c" no está en el dict, get devuelve el valor por defecto (0).','')">0</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp212a','','get no lanza error si la clave no existe: devuelve el default.')">Error KeyError</button>
<div class="cp-fb" id="cp212a"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Dada una lista de números, devolvé una nueva lista con los cuadrados de los pares.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def cuadrados_pares(nums): return [x**2 for x in nums if x%2==0]</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Dado un string, devolvé un diccionario con la frecuencia de cada letra (sin contar espacios).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def freq(s):<br>&nbsp;&nbsp;d={}<br>&nbsp;&nbsp;for c in s:<br>&nbsp;&nbsp;&nbsp;&nbsp;if c!=' ': d[c]=d.get(c,0)+1<br>&nbsp;&nbsp;return d</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Invertí un diccionario {clave:valor} → {valor:clave}. ¿Qué pasa si hay valores repetidos?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def invertir(d): return {v:k for k,v in d.items()}. Si hay valores repetidos, solo sobrevive la última clave asignada a ese valor.</div></div></div>
</div>` },

  213: { estimated_hours: 3, difficulty: 3, html: `<div class="cls">
<div class="hero"><div class="hero-label">Informática General · U6</div>
<h1>Matrices y listas de listas</h1>
<p>Una matriz es una lista de listas. Recorrerla requiere ciclos anidados, y entender filas vs columnas es crítico.</p></div>
<h2>Representación</h2>
<pre>matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(matriz[1][2])  # 6 (fila 1, columna 2)
filas = len(matriz)
cols = len(matriz[0])</pre>
<h2>Recorrido por filas y columnas</h2>
<pre>def sumar_fila(matriz, f):
    total = 0
    for j in range(len(matriz[f])):
        total += matriz[f][j]
    return total

def traspuesta(m):
    n, p = len(m), len(m[0])
    t = [[0]*n for _ in range(p)]
    for i in range(n):
        for j in range(p):
            t[j][i] = m[i][j]
    return t</pre>
<div class="cp"><div class="cp-q">🔍 Checkpoint — matriz=[[1,2],[3,4]]. ¿Qué devuelve matriz[0][1]+matriz[1][0]?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp213a','5: matriz[0][1]=2, matriz[1][0]=3. 2+3=5.','')">5</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp213a','','[0][1] es la columna 1 de la fila 0 = 2. [1][0] es la columna 0 de la fila 1 = 3.')">6</button>
<div class="cp-fb" id="cp213a"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Calculá la suma de todos los elementos de una matriz n×m.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def suma_total(m): return sum(m[i][j] for i in range(len(m)) for j in range(len(m[0])))</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Encontrá el máximo de cada fila y devolvélos en una lista.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def maximos_filas(m): return [max(fila) for fila in m]</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Multiplicá dos matrices A (n×k) y B (k×m) y devolvé la matriz resultado (n×m).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">def mult(A,B):<br>&nbsp;&nbsp;n,k,m=len(A),len(B),len(B[0])<br>&nbsp;&nbsp;C=[[0]*m for _ in range(n)]<br>&nbsp;&nbsp;for i in range(n):<br>&nbsp;&nbsp;&nbsp;&nbsp;for j in range(m):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for l in range(k): C[i][j]+=A[i][l]*B[l][j]<br>&nbsp;&nbsp;return C</div></div></div>
</div>` },

  214: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Informática General · U7</div>
<h1>Archivos de texto y CSV</h1>
<p>Los archivos permiten persistir datos entre ejecuciones. Leer y escribir archivos es habilidad obligatoria para cualquier programa real.</p></div>
<h2>Operaciones básicas con archivos de texto</h2>
<pre>with open("datos.txt", "r") as f:   # r=leer, w=escribir, a=append
    contenido = f.read()             # todo el archivo como string

with open("datos.txt", "r") as f:
    for linea in f:                  # recorre línea por línea
        print(linea.strip())

with open("salida.txt", "w") as f:
    f.write("Hola mundo\n")          # escribe (borra si existe)</pre>
<div class="box">Usá siempre <code>with</code>: garantiza que el archivo se cierra aunque ocurra un error.</div>
<h2>Archivos CSV con el módulo csv</h2>
<pre>import csv
with open("notas.csv", "r") as f:
    lector = csv.reader(f)
    for fila in lector:
        print(fila)     # fila es una lista de strings

with open("salida.csv","w",newline='') as f:
    w = csv.writer(f)
    w.writerow(["nombre","nota"])
    w.writerow(["Ana", 9.5])</pre>
<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Por qué usar "with open(...) as f" en lugar de open() solo?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp214a','El with garantiza que f.close() se llame automáticamente, incluso si ocurre una excepción. Evita dejar archivos abiertos.','')">Cierra el archivo automáticamente</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp214a','','La diferencia clave es el cierre automático con manejo de errores.')">Es más rápido</button>
<div class="cp-fb" id="cp214a"></div></div>
<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Escribí código que lea un archivo "numeros.txt" (un número por línea) y calcule la suma.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">total=0; with open("numeros.txt") as f:<br>&nbsp;&nbsp;for l in f: total+=float(l.strip()); print(total)</div></div>
<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Leé un CSV con columnas "nombre,nota" y mostrá el promedio de notas.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">import csv; notas=[]; <br>with open("notas.csv") as f:<br>&nbsp;&nbsp;r=csv.DictReader(f)<br>&nbsp;&nbsp;for row in r: notas.append(float(row["nota"]))<br>print(sum(notas)/len(notas))</div></div>
<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Escribí un programa que copie un archivo de texto invirtiendo el orden de las líneas.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">with open("entrada.txt") as f: lineas=f.readlines()<br>with open("salida.txt","w") as f: f.writelines(reversed(lineas))</div></div></div>
</div>` },

// ── FILOSOFÍA ────────────────────────────────────────────────

  301: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Filosofía · U1</div>
<h1>Viktor Frankl: sentido, libertad y responsabilidad</h1>
<p>El siglo XX produjo filósofos en campos de concentración. Frankl fue uno de ellos. Su logoterapia no es solo psicología: es una filosofía del ser humano que responde a la pregunta más radical: ¿para qué vivir?</p></div>

<h2>La logoterapia y su origen</h2>
<p>Viktor Frankl (1905-1997) fue psiquiatra y filósofo vienés. Sobrevivió cuatro campos de concentración nazis, incluyendo Auschwitz y Dachau. En ese contexto extremo observó algo que ningún experimento de laboratorio podría replicar: la sobrevivencia dependía menos del estado físico que de si el prisionero encontraba sentido a su sufrimiento. "El que tiene un para qué soportar puede soportar casi cualquier cómo" (Nietzsche, citado por Frankl).</p>
<p>La <strong>logoterapia</strong> (del griego <em>logos</em> = sentido) es una psicoterapia centrada en la voluntad de sentido como motivación primaria. A diferencia del psicoanálisis freudiano (motivación = placer) y la psicología adleriana (motivación = poder), Frankl coloca el sentido en el centro del ser humano.</p>

<h2>El sentido como motivación primaria</h2>
<p>Para Frankl el hombre no busca fundamentalmente placer ni poder: busca <strong>sentido</strong>. El <em>vacío existencial</em> es el sufrimiento de quien no lo encuentra. Este vacío genera la <em>neurosis noógena</em>: una neurosis que no tiene origen psicodinámico sino existencial, es decir, brota de la ausencia de sentido, no de conflictos de pulsiones.</p>
<div class="box">El sentido no se inventa: se descubre. Es único para cada persona en cada situación. No hay una respuesta universal a "¿cuál es el sentido de mi vida?": hay una respuesta personal e intransferible.</div>

<h2>La libertad de actitud</h2>
<p>El aporte más radical de Frankl: el ser humano conserva siempre una libertad irredimible, la libertad de elegir su <strong>actitud</strong> ante cualquier situación dada. Aunque no podamos elegir lo que nos pasa, siempre podemos elegir cómo respondemos. En el campo observó que entre el estímulo y la respuesta hay un espacio —y en ese espacio está la libertad humana.</p>
<p>Esto no es optimismo naïve. Frankl vio morir a su esposa, sus padres y su hermano. No dice que todo sufrimiento tenga sentido dado: dice que podemos encontrar sentido incluso en el sufrimiento inevitable, no para justificarlo sino para trascenderlo.</p>

<h2>Responsabilidad y las tres vías del sentido</h2>
<p>Si el ser humano es libre —incluso en condiciones extremas— también es <strong>responsable</strong>. Frankl vincula directamente libertad y responsabilidad: ser libre significa ser responsable del uso de esa libertad. Sugería que a la Estatua de la Libertad debería corresponderle una Estatua de la Responsabilidad.</p>
<p>Las tres vías para encontrar sentido: <strong>(1) creación</strong> — lo que damos al mundo, un trabajo, una obra; <strong>(2) experiencia</strong> — lo que recibimos del mundo: el amor, la belleza, la verdad; <strong>(3) sufrimiento</strong> — la actitud ante el sufrimiento inevitable. Esta tercera vía es la más difícil y la más radicalmente humana.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Cuál es la diferencia entre la "voluntad de placer" de Freud y la "voluntad de sentido" de Frankl?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp301a','Correcto. Para Freud la motivación primaria es el placer (principio de placer); para Frankl es el sentido. La frustración de la voluntad de placer produce neurosis psicodinámicas; la frustración de la voluntad de sentido produce neurosis noógenas. Son sistemas distintos con distinta visión del hombre.','')">Para Freud la motivación es el placer; para Frankl es el sentido. Son sistemas distintos con distinta visión del hombre</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp301a','','Incorrecto. Frankl critica explícitamente al psicoanálisis. La logoterapia no es una variante del freudismo sino un enfoque radicalmente diferente.')">Son sinónimos: Frankl retoma a Freud con otras palabras</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp301a','','Incorrecto. Frankl distingue claramente tres sistemas: Freud (placer), Adler (poder), Frankl (sentido). No los combina.')">Frankl combina voluntad de placer y de poder en un sistema único</button>
<div class="cp-fb" id="cp301a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Por qué la experiencia en Auschwitz es evidencia para la teoría de Frankl?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp301b','','Incorrecto. Frankl fue prisionero, no experimentador. La observación fue clínica-existencial, no un experimento controlado.')">Porque Auschwitz fue un laboratorio para experimentos psicológicos controlados</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp301b','','Incorrecto. Frankl observó sobrevivientes religiosos y no religiosos; el sentido puede ser secular: familia, misión, amor.')">Porque todos los sobrevivientes eran personas religiosas que encontraban sentido en su fe</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp301b','Correcto. En el campo observó que la sobrevivencia dependía más de si el prisionero encontraba sentido a su sufrimiento que de su estado físico. Quienes tenían un "para qué" resistían más que quienes habían perdido toda razón de seguir. Frankl lo verificó en sí mismo y en cientos de codetenidos.','')">Porque observó que la sobrevivencia dependía más de encontrar sentido que del estado físico; quien tenía un "para qué" resistía más</button>
<div class="cp-fb" id="cp301b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Explicá con tus palabras qué es el "vacío existencial" según Frankl y dá un ejemplo de cómo podría manifestarse en un estudiante universitario de primer año.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">El vacío existencial es el estado de quien no encuentra un sentido profundo a su vida. No equivale a tristeza ni depresión: puede aparecer en personas exitosas y sanas. En un estudiante podría manifestarse como sensación de estudiar "por obligación" o "porque es lo que se espera", sin saber realmente para qué. El alumno tiene actividades pero siente que están vacías de propósito. Frankl lo describe como un aburrimiento existencial. El riesgo es llenarlo con sustitutos: consumo compulsivo, exceso de actividad, fanatismo. La solución frankliana no es hallar un sentido universal sino descubrir el sentido propio y único de cada situación concreta.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Frankl dice que "entre el estímulo y la respuesta existe siempre un espacio de libertad". ¿En qué medida esta afirmación desafía al determinismo psicológico? ¿Es compatible con lo que sabemos sobre el comportamiento humano?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">El determinismo radical (conductismo extremo) sostiene que la conducta es enteramente determinada por estímulos y condicionamiento previo. Para Frankl esto es insuficiente: niega la dimensión noética del hombre (auto-distanciamiento y auto-trascendencia). Frankl no niega que los estímulos influyen; dice que entre estímulo y respuesta hay un margen de elección, por pequeño que sea. Esta posición no es incompatible con la neurociencia moderna: los experimentos de Libet sobre la precedencia neural de los actos voluntarios son debatidos y no demuestran que la libertad no exista. Lo que sí es compatible con la evidencia es que los humanos pueden modificar respuestas habituales mediante la reflexión —esto es lo que hace la terapia cognitivo-conductual. La libertad actitudinal de Frankl puede interpretarse como esa capacidad de intervenir en el espacio entre el impulso automático y la acción.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Analizá críticamente la tercera vía de sentido de Frankl: encontrar sentido en el sufrimiento inevitable. ¿Es una postura filosófica genuina o una racionalización del mal? ¿Puede criticarse desde una ética de la justicia?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">La crítica más seria: si el esclavo puede encontrar sentido en su esclavitud, ¿para qué cambiar el sistema? La logoterapia podría funcionar como ideología de reconciliación con la injusticia. Frankl responde implícitamente con la distinción entre sufrimiento evitable e inevitable: la logoterapia no dice que haya que aceptar el sufrimiento evitable ni renunciar a luchar contra la injusticia. Solo dice que ante el sufrimiento que no puede eliminarse (enfermedad terminal, pérdida irreparable), el ser humano puede encontrar sentido en cómo lo enfrenta. Esta distinción es filosóficamente importante pero prácticamente difícil: en muchos casos no es obvio cuándo el sufrimiento es "inevitable". Una ética de la justicia (rawlsiana, por ejemplo) añadiría: antes de preguntarle al individuo cómo enfrenta su sufrimiento, preguntemos qué estructuras lo producen y si son justas. Frankl y Rawls no son incompatibles: son respuestas a preguntas distintas —la primera sobre cómo vivir dignamente; la segunda sobre cómo organizar una sociedad justa.</div></div></div>

<table class="sum"><tr><th>Concepto</th><th>Definición</th><th>Autor/Contexto</th></tr>
<tr><td>Logoterapia</td><td>Psicoterapia centrada en la voluntad de sentido como motivación primaria humana</td><td>Frankl (Viena, S.XX)</td></tr>
<tr><td>Vacío existencial</td><td>Estado de frustración por ausencia de sentido; genera neurosis noógena</td><td>Frankl</td></tr>
<tr><td>Libertad de actitud</td><td>Capacidad irredimible de elegir cómo responder ante cualquier situación dada</td><td>Frankl (experiencia en Auschwitz)</td></tr>
<tr><td>Responsabilidad</td><td>Correlato necesario de la libertad: ser libre implica ser responsable del uso de esa libertad</td><td>Frankl</td></tr>
<tr><td>Tres vías de sentido</td><td>Creación, experiencia y sufrimiento: caminos para descubrir sentido en la vida</td><td>Frankl</td></tr>
</table>
</div>` },

  302: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Filosofía · U1</div>
<h1>Fe y Razón: Fides et Ratio</h1>
<p>En 1998 Juan Pablo II publicó una encíclica que puso en diálogo dos tradiciones que el mundo moderno había separado radicalmente. La fe y la razón no son enemigas: son dos alas con las que el espíritu humano se eleva hacia la verdad.</p></div>

<h2>La encíclica y su contexto</h2>
<p><em>Fides et Ratio</em> (Fe y Razón) es una encíclica del Papa Juan Pablo II publicada en 1998. Su propósito es reflexionar sobre la relación entre la fe cristiana y la razón filosófica. El documento parte de la constatación de que la modernidad ha tendido a oponer estos dos ámbitos: la razón se pretende autosuficiente, y la fe se repliega al ámbito privado o sentimental.</p>
<p>La metáfora central del documento es de una elocuencia filosófica notable: "La fe y la razón son como las dos alas con las cuales el espíritu humano se eleva hacia la contemplación de la verdad." Las dos alas son necesarias: con una sola no se vuela.</p>

<h2>La filosofía como búsqueda de la verdad</h2>
<p>La encíclica defiende la vocación de la filosofía hacia la verdad. Filosofar genuinamente es preguntarse por las cuestiones últimas: el sentido de la existencia, el bien, la libertad, la muerte. Esta vocación sapidencial (de sabiduría) es lo que distingue a la filosofía de los saberes técnicos o científicos.</p>
<p>Juan Pablo II valora especialmente la tradición filosófica que va de los griegos (Platón, Aristóteles) a la Escolástica medieval (Agustín, Tomás de Aquino) y hasta la filosofía moderna. No rechaza la modernidad: la critica cuando se cierra sobre sí misma y pierde el horizonte de la verdad.</p>

<h2>Las crisis de la filosofía contemporánea</h2>
<p>La encíclica diagnostica tres grandes patologías de la filosofía contemporánea:</p>
<p><strong>Nihilismo:</strong> la negación de que haya verdades objetivas. Si todo es perspectiva y no hay verdad, la razón pierde su sentido. El nihilismo no libera: paraliza.</p>
<p><strong>Relativismo:</strong> la convicción de que la verdad es relativa a la cultura, el individuo o el momento histórico. Pariente del nihilismo, niega que haya algo en común entre todas las búsquedas humanas de verdad.</p>
<p><strong>Eclecticismo y pragmatismo:</strong> en lugar de buscar la verdad, la filosofía se ocupa solo de lo útil, lo funcional, lo que "sirve". Pierde así su horizonte propio.</p>

<h2>Fe y razón: distintas pero no opuestas</h2>
<p>La tesis central de la encíclica es que fe y razón tienen <em>objetos distintos</em> pero no <em>contrarios</em>. La razón natural puede conocer algunas verdades (la existencia de Dios, la ley moral natural) por sus propios medios. La fe revela verdades que la razón sola no puede alcanzar (la Trinidad, la Encarnación). Pero ninguna de las dos puede contradecirse sin mentirse a sí misma.</p>
<div class="box">La doble verdad (fe dice A y razón dice no-A) es filosóficamente insostenible para Juan Pablo II. Si la razón llega a una conclusión que contradice la fe, hay un error en algún lado: o la razón no razonó bien, o la fe fue mal interpretada.</div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Cuál es el diagnóstico central de Fides et Ratio sobre la filosofía contemporánea?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp302a','Correcto. La encíclica identifica nihilismo, relativismo y eclecticismo como las patologías de la filosofía contemporánea. Todas tienen en común haber abandonado la búsqueda de la verdad como horizonte de la razón. Sin ese horizonte, la filosofía se vuelve estéril o se pone al servicio de intereses particulares.','')">Que la filosofía contemporánea ha abandonado la búsqueda de la verdad, cayendo en nihilismo, relativismo y eclecticismo</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp302a','','Incorrecto. La encíclica no rechaza la filosofía moderna en bloque. Valora sus aportes pero señala sus patologías cuando se cierra sobre sí misma.')">Que toda la filosofía moderna es errónea y debe volver a la Escolástica medieval</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp302a','','Incorrecto. Juan Pablo II no plantea la ciencia como problema. Su diagnóstico es sobre la filosofía, no sobre las ciencias naturales.')">Que el avance de las ciencias naturales ha hecho obsoleta la filosofía</button>
<div class="cp-fb" id="cp302a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué significa la metáfora de las "dos alas" en Fides et Ratio?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp302b','','Incorrecto. La metáfora dice exactamente lo contrario: ambas alas son necesarias; con una sola no se puede volar hacia la verdad.')">Que fe y razón son alternativas: cada persona usa la que prefiere</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp302b','Correcto. Las "dos alas" expresan que fe y razón son complementarias e igualmente necesarias para la búsqueda plena de la verdad. No son rivales sino co-principios del conocimiento humano integral. Separadas, ambas quedan limitadas: la fe sin razón cae en fideísmo; la razón sin fe cierra el horizonte de las verdades últimas.','')">Que fe y razón son complementarias y ambas necesarias: separadas, el espíritu humano no puede elevarse plenamente a la verdad</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp302b','','Incorrecto. La encíclica no establece jerarquía entre alas: son igualmente necesarias para el vuelo. La fe ilumina a la razón y la razón protege a la fe del fideísmo.')">Que la fe es superior a la razón y debe guiarla siempre que haya conflicto</button>
<div class="cp-fb" id="cp302b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Definí con tus palabras las tres patologías filosóficas que identifica Fides et Ratio (nihilismo, relativismo, eclecticismo) y dá un ejemplo cotidiano de cada una.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Nihilismo: negación de que existan verdades objetivas. Ejemplo cotidiano: "la vida no tiene sentido en sí misma, cada uno le da el que quiere, o ninguno". Relativismo: convicción de que la verdad depende del punto de vista individual o cultural. Ejemplo: "lo que está bien para vos puede estar mal para mí, y los dos tenemos razón al mismo tiempo". Eclecticismo: tomar ideas sueltas de distintos sistemas sin coherencia interna. Ejemplo: en una discusión filosófica, decir "un poco de Nietzsche, un poco de budismo y un poco de lo que dice mi terapeuta" sin ninguna articulación conceptual. La encíclica no critica tener influencias diversas sino la falta de rigor en la búsqueda de verdad.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Explicá la posición de Fides et Ratio sobre la "doble verdad". ¿Por qué la encíclica la rechaza? ¿Qué implicancias tiene eso para la relación entre ciencia y fe?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">La teoría de la "doble verdad" (atribuida a averroístas medievales como Siger de Brabante) afirma que algo puede ser verdadero en filosofía y falso en teología, o viceversa, sin que haya contradicción. La encíclica la rechaza porque para el pensamiento cristiano la verdad es una: si algo es verdadero, es verdadero en todos los órdenes. La aparente contradicción entre fe y razón es, para Juan Pablo II, siempre el resultado de un error en uno u otro lado: o la razón razonó mal, o la revelación fue mal interpretada. Para la relación ciencia-fe, esto implica que no puede haber contradicción definitiva entre una ciencia bien conducida y una fe bien comprendida. Los conflictos históricos (Galileo, evolución) se explican por errores de interpretación —bíblica o científica— no por incompatibilidad estructural.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">¿Es posible defender la posición de Fides et Ratio sobre fe y razón desde una perspectiva filosófica laica, es decir, sin aceptar los presupuestos del catolicismo? ¿Qué de la argumentación podría aceptar un filósofo no creyente?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Varios elementos de la argumentación de la encíclica son defendibles desde una perspectiva filosófica laica. Primero, la crítica al nihilismo y al relativismo extremo: la mayoría de los filósofos contemporáneos, incluidos los no creyentes (Habermas, Nagel, Putnam), defienden alguna forma de objetivismo o realismo mínimo. El nihilismo es filosóficamente inestable: afirmar que "no hay verdades" es ya hacer una afirmación pretendidamente verdadera. Segundo, la defensa de la vocación sapiencial de la filosofía: el filósofo laico Iris Murdoch, por ejemplo, defiende que la filosofía tiene una vocación hacia la verdad y el bien que la distingue de los saberes puramente técnicos. Tercero, la crítica al pragmatismo extremo puede hacerse sin fe religiosa: Peirce o Dewey, padres del pragmatismo, no reducían la verdad a lo meramente útil. Lo que el filósofo laico no puede aceptar sin más son los presupuestos teológicos específicos: que la fe cristiana revela verdades a las que la razón sola no llega. Pero la estructura del argumento —que hay una verdad a la que se accede por múltiples caminos que no deben contradecirse— es filosóficamente discutible en términos puramente racionales.</div></div></div>

<table class="sum"><tr><th>Concepto</th><th>Definición</th><th>Autor/Fuente</th></tr>
<tr><td>Fides et Ratio</td><td>Encíclica de Juan Pablo II (1998) sobre la relación entre fe y razón filosófica</td><td>Juan Pablo II, 1998</td></tr>
<tr><td>Nihilismo</td><td>Negación de que existan verdades objetivas; patología de la filosofía contemporánea</td><td>Fides et Ratio</td></tr>
<tr><td>Relativismo</td><td>Convicción de que la verdad es relativa al individuo o la cultura; niega lo universal</td><td>Fides et Ratio</td></tr>
<tr><td>Doble verdad</td><td>Tesis rechazada: que algo pueda ser verdad filosófica y falso teológico (o viceversa)</td><td>Averroísmo medieval; rechazado por Tomás y JP II</td></tr>
<tr><td>Vocación sapiencial</td><td>Orientación propia de la filosofía hacia la verdad y las preguntas últimas sobre la existencia</td><td>Fides et Ratio</td></tr>
</table>
</div>` },

  303: { estimated_hours: 2, difficulty: 1, html: `<div class="cls">
<div class="hero"><div class="hero-label">Filosofía · U1</div>
<h1>Historia y definición de Filosofía</h1>
<p>¿Qué es la filosofía? La pregunta no es trivial: una disciplina que no puede definirse a sí misma está en problemas. Pero la filosofía tampoco puede definirse desde afuera, porque cualquier definición ya presupone una postura filosófica. Así comienza el círculo hermenéutico de la filosofía.</p></div>

<h2>El origen griego: φιλοσοφία</h2>
<p>La palabra filosofía proviene del griego <em>φιλοσοφία</em> (philosophía): amor (<em>phileîn</em>) a la sabiduría (<em>sophía</em>). No es posesión de sabiduría —eso sería arrogancia— sino amor, búsqueda, movimiento hacia ella. La leyenda atribuye a Pitágoras (S.VI a.C.) el uso del término para describir al que busca la sabiduría sin pretender ser sabio.</p>
<p>En sentido amplio, la filosofía nació en Grecia entre los siglos VII y VI a.C. con los llamados presocráticos (Tales, Anaximandro, Heráclito), quienes por primera vez intentaron explicar la realidad mediante el <em>logos</em> (la razón) en lugar del <em>mythos</em> (el mito). Este giro del mito al logos es el acto fundacional de la filosofía occidental.</p>

<h2>Etapas históricas principales</h2>
<p><strong>Filosofía antigua (S.VI a.C. – S.V d.C.):</strong> desde los presocráticos hasta el neoplatonismo. Hitos: Sócrates (el método socrático, "conócete a ti mismo"), Platón (mundo de las Ideas, dualismo), Aristóteles (lógica, metafísica, ética), el estoicismo y el epicureísmo.</p>
<p><strong>Filosofía medieval (S.V – S.XV):</strong> síntesis entre pensamiento griego y revelación judeo-cristiana. Hitos: Agustín de Hipona (fe y entendimiento), Tomás de Aquino (síntesis aristotélico-cristiana, las vías para conocer a Dios), Guillermo de Ockham (nominalismo).</p>
<p><strong>Filosofía moderna (S.XV – S.XVIII):</strong> ruptura con la Escolástica, primacía del sujeto. Hitos: Descartes (racionalismo, cogito ergo sum), Locke/Hume (empirismo), Kant (giro copernicano: el sujeto como condición de posibilidad del conocimiento), el Iluminismo.</p>
<p><strong>Filosofía contemporánea (S.XIX – actualidad):</strong> Hegel (idealismo absoluto), Marx (materialismo histórico), Nietzsche (nihilismo, muerte de Dios), Husserl (fenomenología), Heidegger (hermenéutica, ser y tiempo), existencialismo, filosofía analítica, posmodernidad.</p>

<h2>Definición real de filosofía</h2>
<p>La definición nominal dice qué significa la palabra; la definición real dice qué es la cosa. Filosóficamente, la <strong>filosofía</strong> puede definirse como el saber racional que investiga las causas y principios últimos de la realidad, el conocimiento y la acción humana. Cuatro rasgos la caracterizan:</p>
<div class="box"><strong>Universalidad:</strong> no tiene un objeto parcial sino que pregunta por el todo.<br>
<strong>Radicalidad:</strong> va a las raíces, no se queda en la superficie.<br>
<strong>Rigor:</strong> exige argumentación, no acepta respuestas sin justificación.<br>
<strong>Criticidad:</strong> somete a examen sus propios supuestos.</div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué significa el "giro del mito al logos" en el origen de la filosofía griega?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp303a','Correcto. El giro del mito al logos significa que los presocráticos comenzaron a explicar la realidad mediante la razón (logos) en lugar de los relatos míticos tradicionales. No negaron lo sagrado, pero sustituyeron la explicación narrativa-religiosa por la explicación racional-causal. Ese es el acto fundacional de la filosofía occidental.','')">Que los presocráticos comenzaron a explicar la realidad mediante la razón (logos) en lugar de relatos míticos (mythos)</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp303a','','Incorrecto. El giro del mito al logos no implica ateísmo. Muchos presocráticos tenían concepciones religiosas. El cambio es metodológico: se explica mediante la razón, no mediante relatos de dioses.')">Que los filósofos griegos rechazaron toda religión y adoptaron el ateísmo científico</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp303a','','Incorrecto. Es al revés: el logos reemplaza al mythos como modo de explicación, pero el mythos existió antes del logos.')">Que los mitos surgieron después de la razón como formas populares de explicación</button>
<div class="cp-fb" id="cp303a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué caracteriza a la definición real de filosofía frente a la nominal?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp303b','','Incorrecto. La definición nominal dice qué significa la palabra (amor a la sabiduría). La definición real dice qué es la cosa en su esencia: sus rasgos, objeto y método.')">La definición nominal es más precisa porque viene del griego original</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp303b','Correcto. La definición nominal explica el significado de la palabra: "amor a la sabiduría". La definición real dice qué es la filosofía en su esencia: el saber racional que investiga causas y principios últimos de la realidad, caracterizado por universalidad, radicalidad, rigor y criticidad.','')">La nominal explica el significado de la palabra; la real dice qué es la cosa en su esencia (rasgos, objeto, método)</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp303b','','Incorrecto. Ambas son definiciones; la diferencia no es de certeza sino de objeto: la nominal habla del significado lingüístico; la real habla de la cosa misma.')">La real es más incierta porque la filosofía no puede definirse a sí misma con precisión</button>
<div class="cp-fb" id="cp303b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Ubicá a cada uno de los siguientes filósofos en su etapa histórica y enunciá su aporte principal: Sócrates, Tomás de Aquino, Descartes, Nietzsche.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Sócrates (filosofía antigua, S.V a.C.): el método socrático (mayéutica), la idea de que el conocimiento se da a través del diálogo y el examen crítico; "solo sé que no sé nada". Tomás de Aquino (filosofía medieval, S.XIII): la síntesis aristotélico-cristiana; demostración de que la razón y la fe son compatibles; las "cinco vías" para conocer la existencia de Dios. Descartes (filosofía moderna, S.XVII): el racionalismo; la duda metódica; el cogito ergo sum como fundamento del conocimiento; separación radical entre mente y cuerpo (dualismo cartesiano). Nietzsche (filosofía contemporánea, S.XIX): nihilismo y muerte de Dios; crítica radical de los valores occidentales; el superhombre; voluntad de poder. Cada uno es representativo de su época y de los problemas filosóficos que en ella se planteaban.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Explicá los cuatro rasgos de la filosofía (universalidad, radicalidad, rigor, criticidad) y analizá por qué cada uno de ellos es necesario. ¿Puede haber filosofía sin alguno de ellos?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Universalidad: la filosofía no se ocupa de un ente particular (como la biología o la física) sino del ser en cuanto ser, del bien en cuanto bien. Sin universalidad sería una ciencia particular más. Radicalidad: va a las causas y principios últimos, no a las causas próximas. Sin radicalidad sería una reflexión superficial, no filosofía. Rigor: exige demostración argumentada, no acepta afirmaciones sin justificación. Sin rigor sería poesía o especulación sin fundamento. Criticidad: examina sus propios supuestos; no acepta dogmas sin cuestionarlos. Sin criticidad sería ideología. Los cuatro son necesarios: una disciplina que investigue causas últimas pero sin rigor es mística o pseudociencia; con rigor pero sin universalidad es ciencia particular; con universalidad pero sin criticidad es dogmatismo. La filosofía genuina necesita los cuatro rasgos operando conjuntamente.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">El filósofo contemporáneo Richard Rorty propuso que la filosofía debería abandonar la pretensión de conocer la realidad tal como es ("la gran conversación edificante" en lugar de "búsqueda de la verdad"). ¿Cómo respondería la tradición filosófica que estudiamos a esta propuesta? ¿Rorty está filosofando o abandonando la filosofía?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Rorty, influido por el pragmatismo y el neopragmatismo, propone abandonar la idea de que la filosofía tiene acceso privilegiado a la realidad. En lugar de buscar "representar correctamente la realidad", debería "ampliar la conversación" entre perspectivas. Desde la tradición clásica que estudiamos, la respuesta sería: Rorty comete una contradicción performativa. Al afirmar que la filosofía no puede conocer la realidad tal como es, está haciendo una afirmación sobre cómo es la realidad (epistemológicamente hablando). No puede salir de la búsqueda de verdad sin usar afirmaciones pretendidamente verdaderas. Tomás de Aquino o Aristóteles dirían que Rorty confunde la limitación del conocimiento humano con la inexistencia de la verdad objetiva. Que no tengamos acceso perfecto a la verdad no significa que no exista. La respuesta más honesta es que Rorty sigue filosofando —su propuesta es una tesis filosófica con argumentos— pero defiende una versión muy deflacionada de qué es la filosofía, que los clásicos considerarían un suicidio intelectual.</div></div></div>

<table class="sum"><tr><th>Período</th><th>Hitos centrales</th><th>Autores clave</th></tr>
<tr><td>Filosofía antigua (S.VI a.C. – S.V d.C.)</td><td>Giro del mito al logos; metafísica, lógica, ética clásica</td><td>Tales, Sócrates, Platón, Aristóteles</td></tr>
<tr><td>Filosofía medieval (S.V – S.XV)</td><td>Síntesis fe-razón; escolástica; teología racional</td><td>Agustín, Tomás de Aquino, Ockham</td></tr>
<tr><td>Filosofía moderna (S.XV – S.XVIII)</td><td>Primacía del sujeto; racionalismo; empirismo; Iluminismo</td><td>Descartes, Locke, Hume, Kant</td></tr>
<tr><td>Filosofía contemporánea (S.XIX –)</td><td>Nihilismo; fenomenología; existencialismo; analítica; posmodernidad</td><td>Hegel, Marx, Nietzsche, Husserl, Heidegger</td></tr>
</table>
</div>` },

  304: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Filosofía · U1</div>
<h1>Condiciones del filosofar</h1>
<p>No basta con tener inteligencia para filosofar: hacen falta ciertas disposiciones previas. Sin admiración ante la realidad, sin capacidad de asombrarse, sin el coraje de preguntarse lo que los demás dan por obvio, la filosofía no comienza.</p></div>

<h2>La admiración (θαυμάζειν) como punto de partida</h2>
<p>Platón (<em>Teeteto</em>) y Aristóteles (<em>Metafísica</em>) coinciden en que la filosofía nace del <strong>asombro</strong> (θαυμάζειν, thaumazein). No del asombro pasivo del turista ante un espectáculo, sino del asombro activo que genera una pregunta: ¿por qué es esto así y no de otra manera? ¿qué es en su fondo?</p>
<p>El hombre común se asombra y sigue de largo. El filósofo se detiene en el asombro y lo convierte en pregunta. La admiración filosófica no desaparece cuando la pregunta es respondida: se profundiza y genera nuevas preguntas. Por eso la filosofía no "termina" como terminan los problemas de matemática.</p>

<h2>La duda metódica (Descartes)</h2>
<p>René Descartes en las <em>Meditaciones Metafísicas</em> (1641) introdujo la <strong>duda metódica</strong> como condición del filosofar. No es la duda escéptica (que duda de todo y no busca salida) sino la duda metódica: se duda de todo lo que pueda dudarse para encontrar algo que sea absolutamente indubitabe y usar eso como fundamento.</p>
<p>El resultado es el famoso <em>cogito ergo sum</em>: puedo dudar de mis sentidos, de mi memoria, de los objetos exteriores —pero no puedo dudar de que estoy dudando, y dudar es pensar, y pensar exige un pensante. Luego: pienso, luego existo. La duda lleva a la certeza.</p>

<h2>Las situaciones límite (Jaspers)</h2>
<p>Karl Jaspers (1883-1969) identificó lo que llamó <strong>situaciones límite</strong> (Grenzsituationen): circunstancias extremas que no pueden resolverse ni evitarse y que confrontan al ser humano con lo que es en su más profunda verdad. Las situaciones límite son: la muerte (propia y ajena), el sufrimiento, la lucha y la culpa.</p>
<p>Ante una situación límite, el ser humano puede reaccionar de dos modos: huir (distraerse, negarlo, anestesiarse) o <em>existir</em> genuinamente (enfrentarla, dejarse interpelar por ella). El que se deja interpelar por las situaciones límite está en condiciones de filosofar porque ya no puede seguir viviendo en la superficie.</p>

<h2>Recogimiento y libertad de prejuicios</h2>
<p>Otras condiciones del filosofar incluyen el <strong>recogimiento interior</strong>: la capacidad de apartarse del ruido y de la opinión pública para escuchar la propia pregunta. En un mundo de sobreestimulación, el recogimiento es una condición cada vez más difícil y más necesaria.</p>
<p>La <strong>libertad de prejuicios</strong> no significa no tener ninguna convicción previa —eso es imposible— sino estar dispuesto a someter las propias convicciones al examen crítico. El filósofo no parte de cero, pero tampoco acepta sus puntos de partida como evidentes sin justificarlos.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿En qué se diferencia la duda metódica cartesiana de la duda escéptica?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp304a','Correcto. La duda escéptica duda de todo y no busca salida: es una posición filosófica final. La duda metódica es una herramienta provisional: se duda de todo lo que pueda dudarse para encontrar algo absolutamente indubitable que sirva de fundamento. Descartes usa la duda para llegar a la certeza (cogito ergo sum), no para instalarse en ella.','')">La escéptica duda de todo como posición final; la metódica usa la duda como herramienta para encontrar un fundamento indubitable</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp304a','','Incorrecto. La duda metódica no parte de lo sensorial. De hecho, Descartes duda de los sentidos (pueden engañar) y busca certezas racionales, no empíricas.')">La metódica parte de los sentidos; la escéptica los rechaza por completo</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp304a','','Incorrecto. La duda metódica es provisional y tiene un fin: encontrar certezas. La escéptica es permanente y no busca salida. Son metodológicamente opuestas.')">Son idénticas: ambas niegan la posibilidad de certeza</button>
<div class="cp-fb" id="cp304a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué son las "situaciones límite" de Jaspers y por qué favorecen el filosofar?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp304b','','Incorrecto. Las situaciones límite no son situaciones de fracaso evitable. Son estructuralmente inevitables: la muerte, el sufrimiento, la culpa no pueden eliminarse del horizonte humano.')">Situaciones de fracaso personal que enseñan a ser más prudentes en el futuro</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp304b','Correcto. Son circunstancias extremas e inevitables (muerte, sufrimiento, lucha, culpa) que confrontan al ser humano con su existencia más profunda. Favorecen el filosofar porque quiebran la superficialidad cotidiana: quien se deja interpelar por ellas ya no puede seguir viviendo sin preguntarse sobre el sentido, la muerte, el bien.','')">Circunstancias inevitables (muerte, sufrimiento, culpa) que quiebran la superficialidad y confrontan al ser humano con su existencia profunda</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp304b','','Incorrecto. Jaspers no restringe las situaciones límite a eventos sociales. Son existenciales: la muerte propia, el sufrimiento personal, la culpa individual son siempre situaciones límite.')">Solo los eventos históricos de gran escala como guerras o pandemias</button>
<div class="cp-fb" id="cp304b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Describí una situación concreta de la vida cotidiana en la que la admiración filosófica (thaumazein) pueda surgir. ¿Qué pregunta filosófica podría nacer de esa experiencia de asombro?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Ejemplo: observar que las personas que más amo eventualmente morirán —y yo también. El asombro no es ante algo espectacular sino ante lo cotidiano que de repente se vuelve extraño. La pregunta filosófica que surge: ¿qué sentido tiene vivir si todo termina? O más profundamente: ¿qué es la muerte? ¿hay algo después? ¿cómo debo vivir en función de esa certeza? Otro ejemplo: que la física moderna describe electrones y quarks que nunca nadie ha "visto", pero los usamos para diseñar chips que funcionan. ¿Qué significa que algo exista si no puede observarse directamente? ¿Hay una diferencia entre "real" y "matemáticamente coherente"? La admiración filosófica transforma algo que dábamos por dado en una pregunta que ya no puede ignorarse.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Jaspers dice que ante una situación límite el ser humano puede "huir" o "existir genuinamente". ¿Cuáles son las formas modernas más frecuentes de huida ante las situaciones límite? ¿Por qué son tan efectivas y tan costosas?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Las formas modernas de huida son múltiples y sofisticadas: (1) el consumo como anestesia: comprar, usar, desechar, mantener la mente ocupada con novedades; (2) la sobreocupación: estar siempre "ocupado" sin tiempo para la reflexión, como si el silencio fuera peligroso; (3) la banalización de la muerte: en la cultura occidental moderna la muerte está sistemáticamente ocultada de la vida cotidiana (los moribundos van a hospitales, no se muere en casa); (4) el entretenimiento permanente: plataformas de streaming diseñadas para que nunca haya un momento de recogimiento; (5) el activismo sin reflexión: mantenerse en movimiento perpetuo para no tener que preguntarse adónde se va. Son efectivas porque generan satisfacción inmediata y evitan el malestar del cuestionamiento. Son costosas porque generan individuos que llegan al final de su vida sin haberse preguntado nunca qué estaban haciendo con ella. El costo es existencial: una vida no examinada (Sócrates) que no puede llamarse plenamente humana.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">¿Puede una persona que vive en la comodidad material (sin sufrimiento extremo, sin confrontación directa con la muerte) filosofar genuinamente? ¿O la filosofía requiere necesariamente la experiencia del límite? Argumentá con referencia a al menos dos pensadores.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Esta pregunta toca la relación entre filosofía y experiencia vital. Jaspers sugeriría que la comodidad excesiva es un obstáculo: si nunca te confrontás con el límite, es más difícil filosofar genuinamente. Pero no imposible, porque las situaciones límite (muerte, culpa) son inevitables estructuralmente —nadie escapa de ellas por mucho tiempo. Aristóteles (en la Metafísica) sugiere que la filosofía nació en civilizaciones que ya habían resuelto sus necesidades básicas: solo cuando el ser humano tiene tiempo libre (schole, de donde viene "escuela") puede dedicarse a la pregunta desinteresada. Esto sugiere que cierto nivel de comodidad es condición necesaria, no obstáculo. La tensión se resuelve así: la comodidad material puede ser condición de posibilidad del filosofar (si libera tiempo y energía para la reflexión), pero también puede ser un obstáculo si se usa para huir del límite. La filosofía requiere no eliminar las situaciones límite (imposible) sino no huir de ellas cuando aparecen. Una persona cómoda que tiene el coraje de no huir de su primera gran pérdida o de su propia finitud puede filosofar tan genuinamente como quien vivió en la miseria.</div></div></div>

<table class="sum"><tr><th>Condición</th><th>Descripción</th><th>Autor</th></tr>
<tr><td>Admiración (θαυμάζειν)</td><td>Asombro activo ante la realidad que genera preguntas filosóficas; punto de partida del filosofar</td><td>Platón (Teeteto), Aristóteles (Metafísica)</td></tr>
<tr><td>Duda metódica</td><td>Dudar de todo lo dudable para hallar un fundamento indubitable; herramienta, no posición final</td><td>Descartes (Meditaciones Metafísicas)</td></tr>
<tr><td>Situaciones límite</td><td>Circunstancias inevitables (muerte, sufrimiento, culpa) que confrontan con la existencia profunda</td><td>Jaspers</td></tr>
<tr><td>Recogimiento interior</td><td>Capacidad de apartarse del ruido para escuchar la propia pregunta filosófica</td><td>Tradición filosófica general</td></tr>
<tr><td>Libertad de prejuicios</td><td>Disposición a someter las propias convicciones al examen crítico; no ausencia de convicciones</td><td>Tradición socrática</td></tr>
</table>
</div>` },

  305: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Filosofía · U1</div>
<h1>Filosofía y otros saberes</h1>
<p>La filosofía no existe sola. Vive en diálogo y tensión con la ciencia, la teología, el arte y los saberes prácticos. Entender cómo se relaciona con ellos es entender qué es específicamente filosófico y qué no lo es.</p></div>

<h2>Filosofía y ciencia: distinción de objeto y método</h2>
<p>La relación entre filosofía y ciencia es tensa y fecunda a la vez. Las ciencias particulares se ocupan de aspectos determinados de la realidad: la biología estudia los seres vivos, la física los fenómenos físicos, la química la composición de la materia. La filosofía pregunta por lo que está detrás de esas preguntas particulares: ¿qué es el ser en cuanto ser? ¿qué es el conocimiento? ¿qué es la causalidad?</p>
<p>El <em>método científico</em> procede por observación, hipótesis, experimentación y verificación empírica. El <em>método filosófico</em> procede por análisis conceptual, argumentación lógica y reflexión sobre los fundamentos. Una ciencia que se pregunta cuáles son sus propios presupuestos ya está haciendo filosofía (filosofía de la ciencia).</p>
<div class="box">La ciencia responde al "cómo" y al "cuánto". La filosofía pregunta también por el "por qué" último y el "para qué". Estas preguntas no son científicamente respondibles porque se sitúan en el nivel de los fundamentos, no de los fenómenos.</div>

<h2>Filosofía y teología</h2>
<p>La teología estudia a Dios y las verdades reveladas mediante la razón iluminada por la fe. La filosofía estudia el ser, el bien y el conocimiento mediante la razón natural sola. Históricamente, teología y filosofía han tenido una relación de colaboración tensa: la teología usa la filosofía como herramienta (<em>philosophia ancilla theologiae</em> —la filosofía, sirvienta de la teología— en la Edad Media) y la filosofía recibe de la teología problemas y estímulos (la creación, la inmortalidad del alma, la libertad).</p>
<p>La distinción clave: la filosofía debe poder justificar sus afirmaciones mediante razones accesibles a cualquier ser racional, independientemente de su fe. La teología puede apelar a la autoridad de la revelación. Donde la filosofía termina en preguntas abiertas, la teología puede aportar respuestas basadas en la fe.</p>

<h2>Filosofía y arte</h2>
<p>El arte expresa la experiencia humana mediante formas sensibles: imágenes, sonidos, palabras poéticas. La filosofía la conceptualiza. Ambas buscan la verdad, pero por caminos diferentes: el arte muestra, la filosofía argumenta. La <em>estética</em> es la rama de la filosofía que reflexiona sobre la experiencia artística y la belleza.</p>
<p>Hegel entendía el arte como la primera forma en que el espíritu toma conciencia de sí mismo; después vendrían la religión y la filosofía. El arte no es "menos verdadero" que la filosofía: es una forma distinta de acceso a la realidad.</p>

<h2>La interdisciplinariedad y el problema de la demarcación</h2>
<p>El <em>problema de la demarcación</em> (planteado por Karl Popper en el siglo XX) pregunta: ¿qué separa la ciencia de lo que no es ciencia? Popper respondió: la <em>falsabilidad</em> (que una teoría pueda ser refutada por la experiencia). Las afirmaciones filosóficas, al ser sobre principios y no sobre fenómenos empíricos, no son falsables en ese sentido —lo cual no las hace irracionales sino de otro tipo.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Por qué las preguntas filosóficas fundamentales no son respondibles por las ciencias empíricas?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp305a','Correcto. Las ciencias empíricas responden preguntas sobre fenómenos observables mediante el método experimental. Las preguntas filosóficas fundamentales (¿qué es el ser? ¿qué es el bien? ¿qué es el conocimiento?) se ubican en el nivel de los fundamentos y los principios, que no son ellos mismos fenómenos empíricos observables. No son "más difíciles" que las científicas: son de otro tipo.','')">Porque se ubican en el nivel de los fundamentos y principios, que no son fenómenos empíricos observables</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp305a','','Incorrecto. Las preguntas filosóficas no son simplemente más difíciles: son de otro tipo. Con más instrumentos o datos no se puede responder "¿qué es el ser?" porque esa pregunta no se responde con datos empíricos.')">Porque son más complicadas y todavía no hay instrumentos suficientemente precisos</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp305a','','Incorrecto. La filosofía no estudia lo sobrenatural. Estudia los fundamentos del conocimiento y la realidad, que son naturales pero no empíricos en el sentido de los fenómenos medibles.')">Porque la filosofía se ocupa de lo sobrenatural, que por definición escapa a la ciencia</button>
<div class="cp-fb" id="cp305a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Cuál es la diferencia entre filosofía de la ciencia y ciencia?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp305b','','Incorrecto. La filosofía de la ciencia no hace experimentos ni genera teorías científicas. Reflexiona sobre los fundamentos, métodos y presupuestos de las ciencias.')">La filosofía de la ciencia hace experimentos más generales que los de las ciencias particulares</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp305b','Correcto. La filosofía de la ciencia reflexiona sobre los fundamentos, métodos, presupuestos y límites de las ciencias. Pregunta: ¿qué es una explicación científica? ¿qué es la causalidad? ¿qué criterios demarcas ciencia de pseudociencia? Esas preguntas no son ellas mismas científicas: son filosóficas.','')">La filosofía de la ciencia reflexiona sobre los fundamentos, métodos y presupuestos de las ciencias; esas preguntas son filosóficas, no científicas</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp305b','','Incorrecto. La filosofía de la ciencia y la historia de la ciencia son distintas. La historia describe el desarrollo temporal; la filosofía analiza los fundamentos y la lógica del conocimiento científico.')">La filosofía de la ciencia es lo mismo que la historia de la ciencia</button>
<div class="cp-fb" id="cp305b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Para cada uno de los siguientes enunciados, indicá si pertenece al ámbito de la ciencia, la filosofía, la teología o el arte, y justificá brevemente: (a) "La velocidad de la luz es 299.792 km/s". (b) "Todo ser tiene una causa". (c) "Dios es amor". (d) "La música de Beethoven expresa la soledad humana".</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">(a) Ciencia (física): es un dato empírico medido con precisión. Se verificó experimentalmente y es falsable. (b) Filosofía (metafísica): el "todo ser" no es un conjunto empírico verificable; es una afirmación sobre el principio de causalidad como ley universal del ser. No se demuestra experimentalmente sino mediante análisis racional. (c) Teología: parte de la revelación bíblica (1 Juan 4:8) y se analiza mediante la razón iluminada por la fe. Accesible a quien comparte los presupuestos de la fe cristiana; no demostrable por razón natural pura. (d) Arte/Estética: expresa una experiencia mediante formas sensibles (musicales). La filosofía del arte puede reflexionar sobre qué significa "expresar soledad" y si la música puede hacerlo, pero el enunciado mismo es una interpretación artística.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Explicá el criterio de demarcación de Popper (falsabilidad) y sus limitaciones. ¿Es la filosofía "pseudociencia" según este criterio? ¿Qué dice eso sobre el criterio mismo?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">El criterio de Popper: una teoría es científica si y solo si puede ser refutada por la experiencia (falsabilidad). Una teoría que ninguna experiencia posible podría refutar no es científica —puede ser filosófica, religiosa o pseudocientífica. Ejemplo: "todos los cisnes son blancos" es científica (falsable: basta ver un cisne negro); "hay un Dios que actúa en el mundo de manera que ninguna observación puede confirmar ni negar" no es falsable. Limitaciones del criterio: (1) El inductivismo: ninguna cantidad de confirmaciones prueba una teoría (problema de la inducción de Hume). (2) Las teorías científicas maduras (gravitación newtoniana ante Urano anómalo) nunca se rechazan de golpe cuando hay un contraejemplo —hay siempre hipótesis auxiliares (Lakatos). (3) El criterio excluye a la filosofía, la matemática y la lógica, que claramente producen conocimiento. Entonces: la filosofía no es pseudociencia según Popper sino un saber de distinto tipo, no empírico. La conclusión correcta no es que la filosofía es inferior a la ciencia sino que el criterio de demarcación define solo un tipo de saber válido. Más aún: el propio criterio de falsabilidad no es falsable —es una propuesta filosófica sobre qué cuenta como ciencia.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Algunos neurocientíficos contemporáneos (como Patricia Churchland o Francis Crick) han propuesto que la filosofía de la mente y la ética son reductibles a la neurociencia. ¿Qué respondería la tradición filosófica a esta propuesta? ¿Puede la neurociencia responder preguntas como "¿qué debo hacer?" o "¿tengo libre albedrío?"</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">El programa reduccionista en filosofía de la mente (eliminativismo de Churchland, materialismo de Crick) propone que las categorías mentales (creencias, deseos, conciencia) y morales son en última instancia estados cerebrales. La respuesta filosófica tiene varios niveles: Primero, la distinción es-deber (Hume): de ninguna descripción de hechos cerebrales se sigue lógicamente una obligación moral. Que ante X mi cerebro produzca el neurotransmisor Y no responde "¿debo hacer X?". Las preguntas normativas no se derivan de las descriptivas. Segundo, el problema duro de la conciencia (Chalmers): incluso si mapeamos perfectamente la actividad neural correlacionada con una experiencia consciente, no hemos explicado por qué hay algo que "se siente" como esa experiencia (qualia). La explicación funcional no agota la explicación fenomenológica. Tercero, el problema del libre albedrío: los experimentos de Libet muestran que la actividad cerebral precede a la conciencia del acto, pero esto no prueba el determinismo —el experimento mide preparación motora, no la intención consciente compleja. La neurociencia describe las condiciones cerebrales del comportamiento moral; no puede, por eso, prescribir cómo debemos comportarnos. La ética sigue siendo irreductiblemente filosófica.</div></div></div>

<table class="sum"><tr><th>Saber</th><th>Objeto</th><th>Método</th></tr>
<tr><td>Filosofía</td><td>Principios y causas últimas del ser, el conocimiento y la acción</td><td>Análisis conceptual, argumentación racional, reflexión sobre fundamentos</td></tr>
<tr><td>Ciencia</td><td>Fenómenos empíricos observables en sectores de la realidad</td><td>Observación, hipótesis, experimentación, verificación/falsación</td></tr>
<tr><td>Teología</td><td>Dios y las verdades reveladas</td><td>Razón iluminada por la fe; exégesis y tradición</td></tr>
<tr><td>Arte</td><td>La experiencia humana expresada mediante formas sensibles</td><td>Intuición, expresión, creación; no demostración</td></tr>
</table>
</div>` },

  306: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Filosofía · U2</div>
<h1>El hombre como ser peculiar</h1>
<p>Entre todos los seres del universo, uno se pregunta por el universo. Esa peculiaridad —la reflexividad, la apertura a la totalidad, la capacidad de distanciarse de sí mismo— es lo que distingue al ser humano de todos los demás. No es una diferencia de grado sino de tipo.</p></div>

<h2>La diferencia específica con los animales</h2>
<p>Desde Aristóteles, la definición clásica del hombre es <em>animal rationale</em>: animal racional. Pero esta definición, que pone la racionalidad como diferencia específica, ha sido cuestionada y enriquecida. La pregunta no es solo qué puede hacer el hombre que el animal no (resolver problemas complejos, usar herramientas), sino cuál es la diferencia ontológica fundamental.</p>
<p>Max Scheler (1874-1928) en <em>El puesto del hombre en el cosmos</em> (1928) distingue entre el animal —que tiene un <strong>ambiente</strong> (Umwelt) específico al que está adaptado— y el hombre —que tiene un <strong>mundo</strong> (Welt) abierto—. El animal vive encajado en su nicho ecológico; el hombre está, en palabras de Scheler, "abierto al mundo": puede trascender su entorno inmediato, reflexionar sobre él, modificarlo.</p>

<h2>Apertura al mundo y desinhibición instintiva</h2>
<p>Arnold Gehlen (1904-1976) completa este análisis: el hombre es un ser "deficiente" biológicamente (sin garras, sin colmillos, sin instintos bien determinados), lo cual lo obliga a compensar esa deficiencia mediante la cultura, la técnica y las instituciones. La apertura al mundo es, en este sentido, la consecuencia de una desinhibición instintiva: el hombre no tiene programas de respuesta prefijados para cada situación, y eso lo hace libre y creativo —pero también vulnerable y necesitado de orientación.</p>
<div class="box">El animal tiene instintos que lo orientan sin elección. El hombre tiene instintos débiles y razón fuerte: necesita construir su propia orientación. Eso es, en parte, la cultura, la ética y la religión.</div>

<h2>El lenguaje y el simbolismo</h2>
<p>Una de las marcas más profundas de la peculiaridad humana es el lenguaje. No el lenguaje como comunicación —muchos animales se comunican— sino el lenguaje como simbolismo: la capacidad de crear signos que no refieren a objetos presentes sino a realidades ausentes, abstracciones, posibilidades. Ernst Cassirer define al hombre como <em>animal symbolicum</em>: el que vive en un universo simbólico (lenguaje, mito, arte, ciencia, religión).</p>
<p>El símbolo permite al hombre distanciarse del presente, proyectarse al futuro, recordar el pasado, crear mundos alternativos. Ningún animal puede mentir de manera sistemática porque mentir requiere representar una situación como diferente de lo que es —y eso exige simbolismo.</p>

<h2>Reflexividad, historicidad y cultura</h2>
<p>El hombre es el único ser que puede volverse objeto de sí mismo: puede pensarse a sí mismo pensando. Esta <strong>reflexividad</strong> (auto-conciencia) es el fundamento de la ética (puedo juzgar mis propios actos), de la ciencia (puedo examinar mis métodos) y de la filosofía (puedo preguntarme qué es el conocimiento).</p>
<p>Además, el hombre es un ser histórico: no solo tiene historia como los seres naturales (que evolucionan), sino que hace historia, que conserva y transmite cultura, que vive dentro de una tradición que lo precede y que puede modificar. La historicidad no es un límite sino una dimensión constitutiva del ser humano.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Cuál es la diferencia entre el "ambiente" (Umwelt) animal y el "mundo" (Welt) humano según Scheler?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp306a','Correcto. El animal vive encajado en su nicho ecológico (ambiente): percibe solo lo que es relevante para su supervivencia y reproducción, y responde con patrones instintivos. El hombre tiene "mundo": puede trascender el entorno inmediato, relacionarse con objetos que no tienen relevancia biológica directa, preguntarse por el todo. Es una diferencia cualitativa, no de grado.','')">El animal percibe solo lo biológicamente relevante (ambiente); el hombre puede trascender su entorno y relacionarse con el todo (mundo)</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp306a','','Incorrecto. No es una diferencia de cantidad de información sino de tipo de relación con el entorno. El perro percibe olores que el humano no puede; eso no lo hace más "abierto al mundo" en el sentido de Scheler.')">Los animales perciben menos estímulos que los humanos porque sus sentidos son más débiles</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp306a','','Incorrecto. Scheler hace una distinción ontológica entre los dos modos de ser en el entorno, no una clasificación de tipos de comportamiento.')">Es simplemente que los humanos tienen más comportamientos complejos que los animales</button>
<div class="cp-fb" id="cp306a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Por qué Cassirer define al hombre como "animal symbolicum" en lugar de "animal rationale"?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp306b','','Incorrecto. No es que los animales no tengan instintos racionales. Cassirer señala que la razón humana opera dentro de un universo simbólico que la precede y la condiciona.')">Porque los animales también tienen razón instintiva, así que "racional" no distingue suficientemente</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp306b','Correcto. Cassirer observa que entre el estímulo y la respuesta humanos hay siempre un sistema simbólico intermediario (lenguaje, arte, mito, ciencia). El hombre no accede directamente a la realidad: vive en un universo de símbolos que construye. "Animal symbolicum" captura esto mejor que "animal racional" porque la razón misma opera dentro del universo simbólico.','')">Porque el hombre no accede directamente a la realidad: interpone siempre un universo simbólico (lenguaje, arte, mito, ciencia)</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp306b','','Incorrecto. No es sobre comunicación. Muchos animales se comunican. Lo específico del símbolo humano es que refiere a realidades ausentes, abstractas o posibles, no solo a estímulos presentes.')">Porque los humanos son los únicos que se comunican mediante signos</button>
<div class="cp-fb" id="cp306b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Explicá la posición de Gehlen sobre la "deficiencia biológica" del hombre y por qué, según él, esa deficiencia es paradójicamente una ventaja. Dá dos ejemplos concretos.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Para Gehlen el hombre es un ser biológicamente deficiente: no tiene garras, colmillos, piel gruesa, ni instintos bien definidos para cada situación. Un tigre sabe instintivamente cómo cazar; un recién nacido humano no sabe hacer casi nada. Esa deficiencia obliga al hombre a compensar con cultura, técnica e instituciones: lo que no tiene instintivamente, lo construye culturalmente. La paradoja: precisamente porque no está "programado", puede adaptarse a casi cualquier entorno. Ejemplo 1: los humanos viven en el Ártico y en el desierto del Sahara, cosa que ningún animal sin adaptación biológica específica podría hacer —lo logramos con ropa, vivienda y tecnología. Ejemplo 2: los insectos tienen programas instintivos muy precisos para construir sus nidos; si cambia el entorno, mueren. El hombre rediseña su entorno o cambia sus estrategias de adaptación en décadas, no en miles de años de evolución.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Analizá el concepto de "reflexividad" como rasgo peculiar del ser humano. ¿En qué se diferencia la autoconciencia humana de la capacidad que tienen algunos primates superiores de reconocerse en un espejo?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">La prueba del espejo (Gallup) muestra que algunos primates (chimpancés, orangutanes), delfines y elefantes se reconocen en un espejo, lo que indica algún nivel de autoconciencia perceptiva. Pero la reflexividad filosófica del ser humano va mucho más allá. El chimpancé que se ve en el espejo sabe que ese cuerpo es "él", pero no puede preguntarse "¿qué soy?" ni "¿qué debo ser?". La reflexividad humana incluye: (1) la auto-descripción conceptual (puedo nombrar lo que soy); (2) el auto-juicio moral (puedo juzgar si lo que hice fue bueno); (3) la auto-proyección temporal (puedo planificar quién quiero ser en el futuro); (4) la meta-cognición (puedo pensar sobre mi propio pensamiento: "¿estoy razonando bien?"). Ninguna de estas capacidades parece presente en los primates superiores más allá de formas muy rudimentarias. La reflexividad humana es el fundamento de la ética, la ciencia y la filosofía porque requiere la capacidad de tomar distancia de uno mismo y evaluarse.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">La inteligencia artificial contemporánea (modelos de lenguaje, sistemas de reconocimiento) realiza tareas que antes parecían exclusivamente humanas. ¿Desafía esto la noción de "peculiaridad humana"? ¿Qué elementos de la peculiaridad humana (según Scheler, Cassirer, Gehlen) siguen siendo irreducibles a la IA?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">La IA contemporánea desafía algunas formulaciones de la peculiaridad humana pero no todas. Lo que la IA puede hacer: procesar lenguaje con alta sofisticación, generar texto que parece reflexivo, reconocer patrones con precisión sobrehumana en dominios específicos. Desde Scheler: la "apertura al mundo" de la IA es discutible. Los modelos de lenguaje no tienen un "mundo" en el sentido fenomenológico: no tienen cuerpo, no tienen intereses propios, no tienen experiencia de su existencia. Procesan texto sobre el mundo sin estar en el mundo. Desde Cassirer: la IA manipula símbolos con eficacia, pero la pregunta es si los entiende o los procesa estadísticamente. El debate semántica vs. sintaxis (Searle, "cuarto chino") sigue sin resolverse. Desde Gehlen: la IA no tiene la vulnerabilidad de la desinhibición instintiva humana ni la necesidad de crear cultura para compensarla. Tiene arquitectura, no "deficiencia". Lo que parece genuinamente irreducible: la conciencia experiencial (qualia), la responsabilidad moral, la pregunta por el sentido, la capacidad de morir y saber que se muere. La IA no puede preguntarse "¿para qué existo?" en ningún sentido que no sea performance lingüística.</div></div></div>

<table class="sum"><tr><th>Concepto</th><th>Definición</th><th>Autor</th></tr>
<tr><td>Animal rationale</td><td>Definición clásica del hombre como animal racional; la racionalidad como diferencia específica</td><td>Aristóteles</td></tr>
<tr><td>Apertura al mundo (Weltoffenheit)</td><td>Capacidad humana de trascender el entorno inmediato y relacionarse con la totalidad</td><td>Scheler</td></tr>
<tr><td>Ser deficiente</td><td>El hombre carece de instintos fuertes y debe compensar con cultura, técnica e instituciones</td><td>Gehlen</td></tr>
<tr><td>Animal symbolicum</td><td>Definición del hombre como ser que vive en un universo simbólico (lenguaje, arte, mito, ciencia)</td><td>Cassirer</td></tr>
<tr><td>Reflexividad</td><td>Capacidad de volverse objeto de sí mismo: pensar el propio pensamiento, juzgar los propios actos</td><td>Tradición filosófica; Hegel</td></tr>
</table>
</div>` },

  307: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Filosofía · U2</div>
<h1>Cuerpo y alma: visión filosófica</h1>
<p>Somos cuerpo. Somos alma. Pero, ¿qué significa que seamos ambas cosas a la vez? La relación entre cuerpo y alma es uno de los problemas más persistentes de la filosofía: aparece en Platón, en Aristóteles, en Descartes y sigue sin resolverse en la neurociencia contemporánea.</p></div>

<h2>Dualismo platónico</h2>
<p>Para Platón el ser humano es esencialmente su <strong>alma</strong>, que está temporalmente encarnada en un cuerpo que le es ajeno. El cuerpo es la tumba o cárcel del alma (<em>soma sema</em> = cuerpo tumba). El alma es inmortal, pertenece al mundo de las Ideas; el cuerpo es mortal, pertenece al mundo sensible. La filosofía es, para Platón, un <em>ejercicio de muerte</em>: aprender a separar el alma del cuerpo, a no dejarse dominar por las pasiones corpóreas.</p>
<p>Consecuencias: el conocimiento verdadero es reminiscencia (el alma recuerda lo que conoció en el mundo de las Ideas antes de encarnarse). El cuerpo solo proporciona opiniones variables y engañosas. La ética platónica valora el dominio del alma sobre el cuerpo.</p>

<h2>Hilemorfismo aristotélico: alma como forma del cuerpo</h2>
<p>Aristóteles rechaza el dualismo platónico. Para él, el alma no es una realidad separada del cuerpo sino su <strong>forma</strong>: el principio que hace que el cuerpo sea un cuerpo vivo y no simplemente materia inerte. El alma es la "forma del cuerpo natural organizado que tiene la potencia de vivir" (<em>De Anima</em> II,1).</p>
<p>El hilemorfismo (hylé = materia, morphé = forma) entiende al ser humano como una unidad: no somos un alma que tiene un cuerpo, somos un ser cuya alma y cuerpo son dos principios constitutivos de una única sustancia. Separar el alma del cuerpo no produce "alma pura" sino la destrucción del ser humano como tal.</p>

<h2>Síntesis tomista: unidad sustancial</h2>
<p>Tomás de Aquino adopta el hilemorfismo aristotélico pero lo transforma a la luz de la fe cristiana. El alma es la forma del cuerpo (Aristóteles), pero el alma intelectiva humana tiene una subsistencia propia que la hace inmortal (lo que Aristóteles no afirmaba claramente). La <strong>unidad sustancial</strong> es el elemento central: alma y cuerpo no son dos substancias sino dos co-principios de una única substancia compuesta.</p>
<div class="box">La unidad sustancial implica que el cuerpo no es un accidente del alma ni un obstáculo: es constitutivo del ser humano. La resurrección de la carne, en la tradición cristiana, responde a esta intuición: el ser humano completo incluye su corporalidad.</div>

<h2>El problema mente-cuerpo en la filosofía contemporánea</h2>
<p>Descartes (S.XVII) retomó el dualismo con el dualismo de sustancias: la mente (res cogitans) y el cuerpo (res extensa) son sustancias radicalmente distintas que interactúan misteriosamente (¿cómo puede la mente mover el cuerpo?). Este "problema de la interacción" sigue siendo el nudo del debate contemporáneo.</p>
<p>Las posiciones actuales incluyen: <strong>monismo materialista</strong> (solo existe el cuerpo/cerebro; la mente es un estado cerebral), <strong>funcionalismo</strong> (la mente se define por sus funciones, no por su sustrato), <strong>emergentismo</strong> (la conciencia surge del cerebro pero no es reducible a él), y <strong>dualismo de propiedades</strong> (un sustrato pero dos tipos de propiedades: físicas y mentales).</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Cuál es la diferencia fundamental entre el dualismo platónico y el hilemorfismo aristotélico respecto al alma?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp307a','Correcto. Para Platón el alma es una realidad independiente del cuerpo, que está encarnada temporalmente y puede existir separada de él (es inmortal por naturaleza). Para Aristóteles el alma es la forma del cuerpo: no existe separada de él porque no es una sustancia independiente sino el principio formal de un cuerpo vivo. Esta diferencia tiene consecuencias enormes para la valoración del cuerpo.','')">Para Platón el alma es una sustancia separada del cuerpo; para Aristóteles es su forma, no puede existir separada de él</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp307a','','Incorrecto. Para Aristóteles el alma no es idéntica al cuerpo: es su forma, su principio de organización y vida. La materia sin forma no sería un ser vivo.')">Para Aristóteles alma y cuerpo son idénticos: no hay distinción entre ellos</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp307a','','Incorrecto. Platón no dice que el cuerpo sea malvado en sí mismo: dice que distrae al alma de la verdad. Y Aristóteles no valora el cuerpo más que el alma: los ve como co-principios igualmente necesarios.')">La diferencia es solo que Platón valora negativamente el cuerpo y Aristóteles lo valora positivamente</button>
<div class="cp-fb" id="cp307a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué implica la "unidad sustancial" de alma y cuerpo en Tomás de Aquino?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp307b','','Incorrecto. La unidad sustancial afirma exactamente lo contrario: alma y cuerpo no son dos sustancias sino dos co-principios de una única sustancia. El problema de la interacción cartesiano no se plantea en Tomás.')">Que alma y cuerpo son dos sustancias completas que interactúan causalmente, como Descartes</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp307b','Correcto. La unidad sustancial significa que alma y cuerpo no son dos sustancias sino dos co-principios (forma y materia) de un único ser. No son el "yo" y mi "recipiente": son los dos principios constitutivos de lo que soy. El cuerpo no es accidental al alma: es constitutivo del ser humano completo.','')">Que alma y cuerpo no son dos sustancias sino dos co-principios constitutivos de un único ser; el cuerpo no es accidental sino constitutivo</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp307b','','Incorrecto. La unidad sustancial no implica que sean lo mismo. El alma es forma y el cuerpo es materia: son distintos pero inseparables en vida, como la forma y la materia de cualquier ente compuesto.')">Que alma y cuerpo son en realidad lo mismo bajo dos descripciones diferentes</button>
<div class="cp-fb" id="cp307b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Explicá con tus palabras el hilemorfismo aristotélico usando la analogía de la cera y la figura esculpida que usa el propio Aristóteles en De Anima.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Aristóteles usa la analogía de la cera y el sello: si te dan un trozo de cera y un sello de bronce con una figura y preguntas "¿qué es la figura?", la respuesta no es "la cera" ni "el bronce del sello", sino la forma que el sello imprimió en la cera. La figura no existe sin la cera (necesita un sustrato material), pero tampoco es idéntica a la cera (si la cera se derrite, la figura desaparece aunque el bronce siga). Análogamente: el alma humana es como la forma de la cera, el cuerpo es como la cera. El alma no es una cosa que está dentro del cuerpo (no está dentro como el piloto en el barco, ejemplo que Aristóteles critica). El alma es el principio que hace que ese conjunto de materia sea un ser vivo humano. Sin el cuerpo (material) no hay alma (forma); sin el alma (forma) hay solo un cadáver, no un ser humano.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Descartes introduce la glándula pineal como lugar de interacción entre mente y cuerpo. ¿Por qué este intento es filosóficamente insatisfactorio? ¿Qué revela sobre el problema de la interacción mente-cuerpo?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Descartes establece un dualismo de sustancias radicales: la mente (res cogitans) es puro pensamiento, no espacial; el cuerpo (res extensa) es extensión material en el espacio. El problema: si son sustancias completamente diferentes (una sin extensión, otra sin pensamiento), ¿cómo interactúan causalmente? Descartes respondió que la glándula pineal es el punto de contacto. Pero esto es filosóficamente insatisfactorio por varias razones: (1) La glándula pineal es materia extensa, igual que cualquier otra parte del cerebro; decir que "ahí interactúan" no explica cómo una sustancia no-extensa puede mover materia extensa. (2) El problema se desplaza pero no se resuelve: ahora tenemos que explicar cómo la mente afecta a esa glándula específicamente. (3) La neurología moderna muestra que la glándula pineal regula el ritmo circadiano, no es un asiento del alma. Lo que el intento cartesiano revela: el problema de la interacción mente-cuerpo es genuino y difícil. Si se parte de sustancias radicalmente distintas, su interacción causal se vuelve misteriosa. El hilemorfismo aristotélico evita este problema no por ser más empírico sino porque no parte de sustancias separadas.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">¿Puede el monismo materialista (la mente es idéntica a estados cerebrales) dar cuenta del "problema duro de la conciencia" formulado por David Chalmers? ¿Qué dice esto sobre la relación entre neurociencia y filosofía de la mente?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">El "problema duro de la conciencia" (hard problem of consciousness, Chalmers 1995): incluso si explicamos perfectamente todos los mecanismos neurales que correlacionan con una experiencia (ver rojo, sentir dolor), queda sin responder por qué hay algo que se siente como esa experiencia. El monismo materialista puede explicar los correlatos neurales de la conciencia (problema fácil: cómo el cerebro procesa información y produce comportamiento), pero no parece poder explicar por qué ese procesamiento va acompañado de experiencia subjetiva. Los materialistas tienen tres estrategias: (1) Eliminativismo (Churchland): los qualia no existen; es una ilusión del lenguaje ordinario. Problema: la ilusión de experiencia es en sí misma una experiencia. (2) Funcionalismo: la conciencia se define por su función causal, no por su "sabor" subjetivo. Problema: dos sistemas funcionalmente idénticos podrían ser uno consciente y otro "zombie filosófico". (3) Emergentismo: la conciencia emerge del cerebro pero no es reducible a él. Problema: no explica cómo ni por qué emerge. La conclusión más honesta es que el problema duro es genuinamente difícil y no resuelto. Esto muestra que la neurociencia y la filosofía de la mente abordan niveles distintos: la neurociencia describe correlatos empíricos; la filosofía pregunta por la naturaleza de la experiencia consciente. No son competidoras sino complementarias ante este problema.</div></div></div>

<table class="sum"><tr><th>Posición</th><th>Relación alma-cuerpo</th><th>Autor</th></tr>
<tr><td>Dualismo platónico</td><td>Alma sustancia independiente, encarnada temporalmente; cuerpo como cárcel o tumba del alma</td><td>Platón</td></tr>
<tr><td>Hilemorfismo</td><td>Alma como forma del cuerpo; unidad inseparable de forma y materia</td><td>Aristóteles (De Anima)</td></tr>
<tr><td>Unidad sustancial</td><td>Alma y cuerpo como co-principios de una única sustancia; cuerpo constitutivo del ser humano</td><td>Tomás de Aquino</td></tr>
<tr><td>Dualismo cartesiano</td><td>Dos sustancias radicalmente distintas (res cogitans / res extensa) que interactúan</td><td>Descartes</td></tr>
<tr><td>Problema duro de la conciencia</td><td>Incluso explicando los mecanismos cerebrales, queda sin respuesta el "por qué hay experiencia subjetiva"</td><td>Chalmers (1995)</td></tr>
</table>
</div>` },

  308: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Filosofía · U2</div>
<h1>Dimensiones del hombre</h1>
<p>El ser humano no es una realidad simple. Es una unidad que integra múltiples dimensiones: biológica, psíquica, social y espiritual. Ninguna de estas dimensiones es el hombre completo; su integración armónica es lo que define al ser humano plenamente desarrollado.</p></div>

<h2>Dimensión biológica y corporal</h2>
<p>El hombre es un ser vivo. Tiene un cuerpo con necesidades: alimentación, descanso, salud. La biología describe los mecanismos de este cuerpo con creciente precisión. Pero, como vimos en la clase anterior, el cuerpo humano no es solo mecanismo: es el lugar desde donde el ser humano existe, percibe, actúa y se relaciona.</p>
<p>La fenomenología (Merleau-Ponty) distingue entre el <em>cuerpo-objeto</em> (el cuerpo que puede describir la medicina desde afuera) y el <em>cuerpo-sujeto</em> (el cuerpo vivido desde adentro, con sus hábitos, su historia, su modo de estar en el mundo). No somos nuestro cerebro más un cuerpo: <em>somos</em> nuestro cuerpo vivido.</p>

<h2>Dimensión psíquica</h2>
<p>La dimensión psíquica incluye la vida afectiva, emocional y volitiva: los sentimientos, las emociones, las pasiones, los deseos, la memoria, la imaginación. No es idéntica a la dimensión espiritual (razón y voluntad libre), ni a la biológica (aunque tiene base cerebral).</p>
<p>La psicología estudia la dimensión psíquica empíricamente. La filosofía se pregunta por su fundamento y su relación con las demás dimensiones. Un ser humano cuya dimensión psíquica está profundamente dañada (por trauma, por enfermedad) sufre en su humanidad integral: las heridas psíquicas no son solo "mentales" —afectan el cuerpo y la vida espiritual.</p>

<h2>Dimensión social</h2>
<p>El ser humano es, en la célebre fórmula de Aristóteles, <em>zoon politikon</em>: un animal social (político). No es social por conveniencia sino por naturaleza: el ser humano no puede desarrollar su humanidad fuera de la comunidad. El lenguaje, la cultura, la ética, la identidad —todos estos elementos constitutivos de lo humano solo se desarrollan en relación con otros.</p>
<div class="box">El ser humano que crece aislado de la comunidad (los llamados "niños lobo") no desarrolla lenguaje, ni afectividad normal, ni la mayor parte de sus potencialidades humanas. La sociedad no es un artificio que el individuo podría rechazar: es condición de posibilidad de la humanización.</div>

<h2>Dimensión espiritual</h2>
<p>La dimensión espiritual es la más específicamente humana: la razón, la voluntad libre, la capacidad de auto-trascendencia, la apertura a lo absoluto. Es el nivel en que el ser humano puede preguntarse por el sentido de su existencia, tomar distancia de sus instintos, amar libremente.</p>
<p>Esta dimensión no debe confundirse con lo "religioso" en sentido estrecho: es la capacidad de relacionarse con verdades que trascienden lo sensible (matemáticas, ética, belleza, amor). Frankl la llamó "dimensión noética" y la distinguía tanto de lo físico como de lo psíquico.</p>

<h2>Integración y desintegración</h2>
<p>El ser humano sano es el que logra integrar armónicamente las cuatro dimensiones. Las patologías aparecen cuando una dimensión domina y suprime a las demás: el materialismo reduce al hombre a su dimensión biológica; el espiritualismo niega el cuerpo; el individualismo niega la dimensión social; el hedonismo reduce la vida a emociones. La filosofía del hombre integral busca una visión que honre la complejidad de cada dimensión.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Por qué la dimensión social del hombre es "natural" según Aristóteles y no meramente convencional?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp308a','Correcto. Para Aristóteles el hombre es social por naturaleza, no por contrato o conveniencia. Las capacidades más específicamente humanas (lenguaje, ética, cultura, identidad) solo se desarrollan en comunidad. Un ser humano aislado desde el nacimiento no puede desarrollar estas potencialidades: la evidencia de los "niños lobo" y de los experimentos (no éticos) de aislamiento lo confirma.','')">Porque las capacidades más específicamente humanas (lenguaje, ética, cultura) solo se desarrollan en comunidad; sin ella el hombre no puede humanizarse plenamente</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp308a','','Incorrecto. La posición contractualista (Hobbes, Locke, Rousseau) dice que la sociedad es artificial, resultado de un acuerdo. Aristóteles la rechaza: la sociedad es condición natural de lo humano, no resultado de un pacto.')">Porque el hombre decidió libremente organizarse en sociedad mediante un contrato social</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp308a','','Incorrecto. La sociabilidad natural del hombre no es equivalente a la sociabilidad de hormigas o abejas, que es instintiva. La sociabilidad humana es racional y libre, pero no por eso menos natural.')">Porque los humanos, como las hormigas, tienen instintos sociales que los obligan a vivir en comunidad</button>
<div class="cp-fb" id="cp308a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿En qué se diferencia la dimensión espiritual de la dimensión psíquica en la antropología filosófica?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp308b','','Incorrecto. La dimensión espiritual no equivale a lo religioso en sentido confesional. Es la capacidad de razón, voluntad libre y auto-trascendencia, que puede darse en personas no religiosas.')">La dimensión espiritual es la religiosa: la que tiene Dios como objeto</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp308b','Correcto. La dimensión psíquica incluye emociones, afectos, deseos y la vida interior pre-racional. La dimensión espiritual (noética en Frankl) incluye la razón, la voluntad libre y la capacidad de auto-trascendencia: relacionarse con verdades universales (ética, matemáticas), preguntarse por el sentido, amar libremente. Son dos niveles distintos, aunque se influyen mutuamente.','')">La psíquica incluye emociones y afectos; la espiritual incluye razón, voluntad libre y capacidad de relacionarse con verdades universales y el sentido</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp308b','','Incorrecto. Son dos dimensiones distintas aunque relacionadas. Las patologías psíquicas afectan la vida espiritual y viceversa, pero no son lo mismo: una terapia psicológica no equivale a un acompañamiento espiritual.')">Son lo mismo: la dimensión psíquica bien desarrollada es la dimensión espiritual</button>
<div class="cp-fb" id="cp308b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Describí cómo las cuatro dimensiones del hombre (biológica, psíquica, social, espiritual) están presentes en el acto de estudiar para un examen. ¿Qué ocurre cuando alguna dimensión no funciona adecuadamente?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">En el acto de estudiar: Biológica: el cerebro procesa información, necesita dormir y comer bien para consolidar la memoria; el cansancio físico reduce la concentración. Psíquica: la motivación, el estado emocional (ansiedad, confianza), la atención y el estado de ánimo afectan directamente la calidad del aprendizaje. Social: se estudia dentro de un contexto social (universidad, familia que apoya o no, compañeros con quienes compartir el material); el aislamiento extremo dificulta el aprendizaje. Espiritual: la comprensión genuina de los conceptos, la capacidad de razonar abstractamente, la motivación profunda ("¿para qué estudio esto?") pertenecen a la dimensión espiritual. Si la dimensión biológica falla (insomnio crónico): la memoria y concentración bajan. Si la psíquica falla (depresión grave): no hay motivación ni atención. Si la social falla (aislamiento, conflictos): aumenta la ansiedad y cae el rendimiento. Si la espiritual no está integrada (ausencia de sentido): el estudio se vuelve mecánico y se retiene muy poco.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">¿Qué crítica haría la antropología filosófica integral a la visión reduccionista que describe al ser humano simplemente como "un cerebro con cuerpo"? ¿Qué se pierde en esa descripción?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">La visión "cerebro con cuerpo" es un reduccionismo materialista que identifica al ser humano con su dimensión biológica-neurológica. La crítica filosófica: (1) Dimensión psíquica: las emociones, los deseos y la vida afectiva no son reducibles a actividad neuronal sin pérdida de contenido. Describir el amor como "liberación de oxitocina" es verdadero pero insuficiente: no capta el significado de la experiencia. (2) Dimensión social: el individuo no existe antes de la sociedad; su identidad, su lenguaje, sus categorías de pensamiento son inter-subjetivas. Un "cerebro" no tiene intersubjetividad. (3) Dimensión espiritual: la capacidad de razonar sobre verdades universales (matemáticas, ética), de auto-trascendencia y de preguntar por el sentido no tiene correlato neural identificado que la explique completamente. Lo que se pierde: la dignidad, la responsabilidad moral, el significado, la historia personal. Una neurociencia que describe perfectamente los correlatos cerebrales del amor no ha explicado por qué el amor importa. El reduccionismo es útil como herramienta metodológica (estudiar un nivel de la realidad) pero es filosóficamente insostenible como descripción completa del ser humano.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Merleau-Ponty distingue entre el "cuerpo-objeto" (el cuerpo que describe la medicina) y el "cuerpo-sujeto" (el cuerpo vivido). Analizá esta distinción en relación con un fenómeno concreto: el dolor crónico en un paciente que no tiene daño orgánico demostrable. ¿Qué dice esto sobre los límites de la medicina reduccionista?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">El dolor crónico sin daño orgánico demostrable (como la fibromialgia, el síndrome de dolor central, el dolor fantasma en amputados) es un caso paradigmático de la insuficiencia del reduccionismo médico. Desde la perspectiva del cuerpo-objeto: la medicina busca el daño tisular, el correlato imagenológico, el mecanismo periférico. Si no lo encuentra, tiende a calificar el dolor como "psicológico" o "funcional", con la connotación de que no es "real". Desde la perspectiva del cuerpo-sujeto (Merleau-Ponty): el dolor es siempre vivido, siempre intencional (apunta a algo que el cuerpo percibe como amenaza), siempre significativo. El dolor fantasma es particularmente revelador: el amputado siente dolor en un miembro que ya no existe. El "cuerpo-objeto" dice "eso es imposible"; el "cuerpo-sujeto" dice "ese miembro sigue siendo parte de mi esquema corporal vivido". Las implicancias para la medicina: el dolor crónico sin correlato orgánico no debe tratarse solo con analgesia sino atendiendo a las dimensiones psíquica, social y espiritual del paciente. El paradigma bio-psico-social en medicina (Engel, 1977) incorpora precisamente esta crítica al reduccionismo, aunque no siempre con base filosófica explícita.</div></div></div>

<table class="sum"><tr><th>Dimensión</th><th>Contenido</th><th>Patología por reduccionismo</th></tr>
<tr><td>Biológica/corporal</td><td>Vida vegetativa, sensación, cuerpo vivido (Merleau-Ponty)</td><td>Biologismo: el hombre es solo organismo</td></tr>
<tr><td>Psíquica</td><td>Emociones, afectos, deseos, memoria, imaginación</td><td>Psicologismo: reducir todo al estado mental subjetivo</td></tr>
<tr><td>Social</td><td>Relacionalidad constitutiva; identidad, lenguaje y cultura nacen en la comunidad</td><td>Individualismo: el yo como átomo independiente</td></tr>
<tr><td>Espiritual (noética)</td><td>Razón, voluntad libre, auto-trascendencia, búsqueda de sentido y verdad</td><td>Materialismo: negar la irreductibilidad de la conciencia</td></tr>
</table>
</div>` },

  309: { estimated_hours: 2, difficulty: 3, html: `<div class="cls">
<div class="hero"><div class="hero-label">Filosofía · U2</div>
<h1>Inteligencia, voluntad y libertad</h1>
<p>Conocer y querer. Las dos operaciones que definen la vida espiritual del hombre. Pero entre el conocimiento y la voluntad, ¿hay espacio para la libertad real, o todo está determinado de antemano? Esta pregunta no es solo filosófica: define cómo entendemos la responsabilidad moral.</p></div>

<h2>La inteligencia: entendimiento agente y posible</h2>
<p>Aristóteles y la escolástica distinguen dos aspectos del entendimiento humano: el <strong>entendimiento agente</strong> (intellectus agens) y el <strong>entendimiento posible</strong> (intellectus possibilis). El entendimiento agente es la capacidad activa de abstraer las formas inteligibles de los datos sensibles —de pasar del "este perro" al concepto universal "perro". El entendimiento posible es la capacidad receptiva de recibir y conservar esas formas inteligibles.</p>
<p>La inteligencia humana opera en un nivel que trasciende los sentidos: puede captar lo universal, lo necesario, lo abstracto. Puede pensar la justicia, la belleza, la verdad —realidades que no se tocan ni se ven. Esta capacidad es la que funda la posibilidad de la ciencia, la ética y la filosofía.</p>

<h2>La voluntad como apetito racional</h2>
<p>Para la tradición aristotélico-tomista, la <strong>voluntad</strong> es el apetito racional: la tendencia del ser humano hacia el bien captado por la inteligencia. El bien es el objeto propio de la voluntad: toda elección voluntaria busca —consciente o inconscientemente— algún aspecto del bien.</p>
<p>La voluntad no opera en el vacío: siempre se mueve hacia algo que la razón presenta como bueno. Esto no significa que siempre elijamos bien: podemos elegir un bien aparente (lo que parece bueno pero no lo es), o un bien particular sacrificando el bien universal. El error moral frecuentemente es un error en el juicio de la razón sobre lo que es bueno.</p>

<h2>Libertad de coacción y libertad de elección</h2>
<p>La libertad tiene al menos dos sentidos fundamentales:</p>
<p><strong>Libertad de coacción</strong> (libertad negativa): ausencia de obstáculos externos. Soy libre si nadie me impide hacer lo que quiero. Es la libertad política en sentido liberal.</p>
<p><strong>Libertad de elección</strong> (libre albedrío, liberum arbitrium): la capacidad interna de elegir entre alternativas sin ser determinado causalmente por los antecedentes. Es la libertad que funda la responsabilidad moral.</p>
<div class="box">Sin libertad de elección no puede haber responsabilidad moral. Si mis actos están causalmente determinados por mis genes, mi crianza y mi entorno, ¿en qué sentido "soy responsable"? Este es el núcleo del debate determinismo-libertad.</div>

<h2>Condicionamientos de la libertad</h2>
<p>Reconocer la libertad de elección no implica negar los condicionamientos. La libertad humana siempre es una libertad <em>situada</em>: se ejerce en un contexto de condicionamientos biológicos (temperamento, impulsos), psíquicos (hábitos, traumas, emociones), sociales (presiones, normas, influencias) y cognitivos (información disponible, prejuicios).</p>
<p>La tradición tomista elabora la teoría de los <strong>hábitos</strong>: la libertad se consolida y desarrolla mediante la práctica repetida de actos libres. Los hábitos buenos (virtudes) facilitan el ejercicio de la libertad hacia el bien; los hábitos malos (vicios) la dificultan y la debilitan. La libertad, paradójicamente, se gana con esfuerzo: no es un dato dado sino una conquista continua.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Por qué la voluntad en la tradición tomista siempre se mueve hacia el "bien"?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp309a','Correcto. La voluntad es el apetito racional: su objeto propio es el bien tal como es captado por la razón. Nadie elige explícitamente "el mal en cuanto mal": siempre se elige algo que se presenta bajo el aspecto del bien (bien aparente, bien particular, bien presente vs. bien futuro). El mal moral es siempre un bien aparente o un bien parcial elegido a costa del bien integral.','')">Porque la voluntad es el apetito racional cuyo objeto propio es el bien; nadie elige el mal en cuanto mal sino siempre bajo algún aspecto de bien</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp309a','','Incorrecto. La tradición no niega que existan elecciones malas. El punto es que incluso el que elige mal lo hace buscando algún aspecto del bien (placer, ventaja, alivio). El error es en el juicio de la razón sobre lo que es realmente bueno.')">Porque es imposible elegir algo malo voluntariamente; cualquier elección voluntaria es necesariamente buena</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp309a','','Incorrecto. El bien no es solo lo placentero. La voluntad puede moverse hacia bienes que son incómodos pero verdaderos (sacrificio por amor, cumplimiento del deber difícil). Placer y bien no son sinónimos en esta tradición.')">Porque el bien es sinónimo de placentero, y la voluntad siempre busca el placer</button>
<div class="cp-fb" id="cp309a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué son los "hábitos" en la teoría tomista y por qué son relevantes para la libertad?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp309b','','Incorrecto. Los hábitos no son automatismos que eliminen la libertad. Al contrario: los hábitos buenos (virtudes) la potencian. Un músico virtuoso toca mejor y con más libertad expresiva que uno sin hábito, aunque sus dedos hagan movimientos "automáticos".')">Son automatismos que eliminan la libertad al hacernos actuar sin elegir</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp309b','Correcto. Los hábitos son disposiciones estables adquiridas mediante la repetición de actos libres. Los hábitos buenos (virtudes: prudencia, justicia, fortaleza, templanza) facilitan el ejercicio de la libertad hacia el bien verdadero. Los malos (vicios) la distorsionan. La libertad no es solo un punto de partida dado: se desarrolla y se consolida o se debilita según los hábitos que se forman.','')">Disposiciones estables que facilitan (virtudes) o dificultan (vicios) el ejercicio de la libertad; la libertad se gana o se pierde según los hábitos formados</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp309b','','Incorrecto. Los hábitos son disposiciones adquiridas (no innatas). Tomás los distingue claramente de los instintos naturales con los que nacemos.')">Son tendencias instintivas con las que nacemos y que no pueden modificarse</button>
<div class="cp-fb" id="cp309b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Distinguí entre libertad de coacción y libertad de elección mediante dos ejemplos concretos. ¿Es posible tener una sin la otra?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Libertad de coacción: estoy en un país democrático, nadie me obliga a ir a misa, puedo practicar (o no) cualquier religión. Tengo libertad de coacción religiosa. Libertad de elección: dentro de esa libertad externa, ¿puedo elegir genuinamente mis creencias o están determinadas por mi crianza, mi entorno, mis sesgos cognitivos? Esta es la libertad de elección interna. ¿Es posible tener una sin la otra? Sí. Caso 1: tener libertad de coacción sin verdadera libertad de elección. Un alcohólico puede vivir en un país donde el alcohol es legal (sin coacción), pero su adicción limita seriamente su libertad de elección respecto a beber. Caso 2: tener libertad de elección sin libertad de coacción. Un preso puede tomar decisiones internas de gran profundidad (Frankl en el campo de concentración), aunque sus movimientos físicos estén totalmente restringidos. Frankl es el ejemplo clásico: máxima coacción externa, máxima libertad de elección interna (de actitud).</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">El debate entre determinismo y libertad tiene nuevos actores en la neurociencia. Los experimentos de Benjamin Libet mostraron que la actividad cerebral ("readiness potential") precede en ~500ms a la conciencia de querer actuar. ¿Esto prueba el determinismo? ¿Cómo respondería la filosofía de la voluntad?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Los experimentos de Libet son metodológicamente limitados pero filosóficamente provocadores. Libet pidió a sujetos que flexionaran la muñeca "cuando quisieran" y midió cuándo aparecía actividad en el cortex motor (RP = readiness potential) vs. cuándo los sujetos reportaban conciencia de haber querido actuar. Resultado: el RP precede ~500ms a la conciencia reportada. Problemas con la interpretación determinista: (1) El experimento mide un acto motor simple y aleatorio ("cuando quieras"), no una decisión deliberada compleja. Generalizar de "mover la muñeca" a "todas las elecciones humanas" es un salto metodológico no justificado. (2) Los propios datos de Libet muestran que los sujetos pueden "vetar" el movimiento hasta ~200ms antes de ejecutarlo —eso es una forma de libertad de segundo orden (controlar el impulso). (3) La conciencia de la decisión puede ser el punto en que la deliberación preconsciente se hace consciente —no prueba que la deliberación no sea libre. Respuesta filosófica: la libertad no requiere que la conciencia sea el primer evento causal. Requiere que el proceso incluya razones (no solo causas) y que el agente pueda responder a ellas. Aunque el cerebro se "prepare" antes de que seamos conscientes, la pregunta es si esa preparación puede ser influida por razones y deliberación previas.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Analizá la paradoja de la libertad y el hábito: los hábitos restringen las opciones disponibles (el virtuoso no siente tentación de hacer el mal con la misma fuerza que el vicioso), y sin embargo se los considera una realización de la libertad, no una restricción. ¿Cómo se resuelve esta paradoja?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">La paradoja es real y tiene profundidad filosófica. La intuición liberal de libertad dice: más opciones = más libertad. El virtuoso tiene menos "tentación de robar" que alguien sin escrúpulos —parece tener menos opciones. Sin embargo, la tradición aristotélico-tomista sostiene que el virtuoso es más libre. La resolución requiere distinguir libertad-como-apertura-de-opciones vs. libertad-como-capacidad-de-actuar-bien. Primera resolución: el virtuoso no pierde opciones en sentido técnico; puede robar si lo elige. Lo que pierde es la atracción hacia el mal. Pero esa pérdida es una ganancia: estar menos atraído por lo que daña es una liberación respecto a ese daño potencial. Segunda resolución (más profunda): la libertad genuina no es la capacidad de hacer cualquier cosa (eso es arbitrariedad), sino la capacidad de realizar el propio ser. Un pianista que ha dominado la técnica tiene más libertad musical que uno que apenas puede tocar una nota: no porque tenga más opciones técnicas sino porque puede realizar más plenamente lo que la música le permite ser. Análogamente, el virtuoso puede realizar más plenamente su humanidad porque sus hábitos están en línea con su bien integral. La libertad plena no es el libre albedrío vacío del que puede hacer cualquier cosa: es la capacidad de actualizarse como ser humano en la dirección de su bien propio.</div></div></div>

<table class="sum"><tr><th>Concepto</th><th>Definición</th><th>Autor</th></tr>
<tr><td>Entendimiento agente</td><td>Capacidad activa de abstraer formas inteligibles de los datos sensibles</td><td>Aristóteles, Tomás de Aquino</td></tr>
<tr><td>Voluntad</td><td>Apetito racional; tendencia hacia el bien captado por la razón</td><td>Aristóteles, Tomás de Aquino</td></tr>
<tr><td>Libre albedrío (liberum arbitrium)</td><td>Capacidad de elegir entre alternativas sin determinación causal estricta; funda la responsabilidad moral</td><td>Tradición escolástica</td></tr>
<tr><td>Hábito (virtud/vicio)</td><td>Disposición estable adquirida por repetición; facilita (virtud) o dificulta (vicio) el bien</td><td>Aristóteles, Tomás de Aquino</td></tr>
<tr><td>Libertad situada</td><td>La libertad humana siempre se ejerce en un contexto de condicionamientos; no es absoluta pero es real</td><td>Filosofía contemporánea</td></tr>
</table>
</div>` },

  310: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Filosofía · U3</div>
<h1>La persona humana</h1>
<p>Decir "persona" es decir algo más que "individuo" o "ser humano". La persona es la categoría que expresa la dignidad irrepetible de cada ser humano. Entender qué significa "persona" es entender por qué ningún ser humano puede ser tratado como medio.</p></div>

<h2>Definición clásica: Boecio</h2>
<p>La definición filosófica clásica de persona viene de Boecio (S.V-VI d.C.): <em>persona est naturae rationalis individua substantia</em> — "la persona es una sustancia individual de naturaleza racional". Tres elementos: (1) <strong>sustancia</strong>: no es un accidente ni una propiedad; es lo que existe en sí y por sí; (2) <strong>individual</strong>: no es la especie sino este individuo concreto, único e irrepetible; (3) <strong>naturaleza racional</strong>: la racionalidad como diferencia específica que distingue a la persona humana de otros individuos.</p>
<p>Esta definición, retomada y enriquecida por Tomás de Aquino, fundó la teoría de los derechos personales: si cada ser humano es una sustancia individual racional, tiene una dignidad que no puede ser absorbida por el grupo ni violada por el estado.</p>

<h2>La dignidad de la persona: Kant</h2>
<p>Immanuel Kant reformula la noción de dignidad desde la perspectiva moderna de la autonomía. En la <em>Fundamentación de la metafísica de las costumbres</em> (1785) distingue entre lo que tiene <strong>precio</strong> (puede ser reemplazado por otra cosa equivalente) y lo que tiene <strong>dignidad</strong> (no tiene equivalente, no puede ser reemplazado).</p>
<p>La persona tiene dignidad porque es un fin en sí misma, nunca meramente un medio. De aquí el imperativo categórico en su formulación práctica: "Obra de tal modo que trates a la humanidad —tanto en tu persona como en la de cualquier otro— siempre como un fin, y nunca solo como un medio."</p>

<h2>El personalismo: Mounier y la persona como relación</h2>
<p>El personalismo (Emmanuel Mounier, 1905-1950) critica tanto el individualismo liberal (que reduce la persona a un átomo aislado) como el colectivismo marxista (que la disuelve en la clase social). La persona no es ni átomo ni elemento de una masa: es un ser de relación que se constituye en el encuentro con otros.</p>
<p>Mounier distingue entre individuo y persona: el individuo es el yo cerrado, defensivo, que acumula y protege; la persona es el yo que se abre, que da, que se compromete, que no puede realizarse sin los demás. La vocación de la persona es la <em>donación</em>: darse a una causa, a un amor, a una comunidad mayor que uno mismo.</p>

<h2>Derechos fundamentales de la persona</h2>
<p>La noción filosófica de persona funda la teoría de los derechos humanos. Si cada ser humano tiene dignidad irrepetible (Boecio/Kant) y es fin en sí mismo (Kant), entonces hay derechos que no pueden ser violados por ningún poder —no porque los conceda la ley sino porque son anteriores a ella.</p>
<div class="box">Los derechos humanos son derechos de la persona en cuanto persona: derecho a la vida, a la integridad, a la libertad, a la verdad. No son derechos que el Estado otorga; son derechos que el Estado debe reconocer y proteger porque son previos a él.</div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Cuál es la diferencia entre "precio" y "dignidad" en el análisis kantiano?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp310a','Correcto. Lo que tiene precio puede ser reemplazado por algo equivalente: un bien de mercado puede intercambiarse por otro del mismo valor. Lo que tiene dignidad es incomparable e irreemplazable: la persona no puede ser "compensada" por otra persona. Por eso la persona nunca puede ser tratada como mercancía.','')">Lo que tiene precio puede reemplazarse por algo equivalente; lo que tiene dignidad no tiene equivalente ni precio, es incomparable e irreemplazable</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp310a','','Incorrecto. Kant no reduce la dignidad a precio alto. La diferencia no es de grado sino de tipo: dignidad implica que la persona está fuera del ámbito de lo intercambiable, sea cual sea el precio.')">La dignidad es un precio muy alto que no podemos pagar con dinero pero sí con otros valores</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp310a','','Incorrecto. La distinción de Kant es sistemática y ontológica, no una preferencia estética. No es que "prefiramos no vender" a las personas sino que son de una clase de realidad que no puede comprarse ni venderse.')">Solo es una distinción lingüística: en la práctica, precio y dignidad se confunden</button>
<div class="cp-fb" id="cp310a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Por qué Mounier critica tanto el individualismo como el colectivismo?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp310b','','Incorrecto. Mounier no hace solo una crítica política: hace una crítica antropológica. Tanto el individuo-átomo como la masa diluida son concepciones deficientes de lo que es una persona.')">Porque son sistemas económicos ineficientes que no maximizan el bienestar</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp310b','Correcto. El individualismo reduce la persona a un yo cerrado que se protege y acumula, negando su constitutiva dimensión relacional. El colectivismo la disuelve en el grupo, negando su irrepetibilidad y su centro personal. Ambos falsifican la persona: el primero por defecto de relación, el segundo por exceso de colectivo. La persona es relacional pero irreductible al grupo.','')">Porque ambos falsifican a la persona: el individualismo niega su dimensión relacional; el colectivismo niega su irrepetibilidad y centro personal</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp310b','','Incorrecto. Mounier critica ambos desde el mismo nivel: la insuficiencia de su concepción de persona. No es que prefiera un término medio político.')">Porque ambos son extremos y la solución es un punto medio entre los dos</button>
<div class="cp-fb" id="cp310b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Enunciá el imperativo categórico kantiano en su formulación de la humanidad y aplicalo a uno de estos casos: (a) usar a un amigo para conseguir un trabajo sin genuino interés en él como persona; (b) contratar a alguien ofreciendo condiciones de trabajo precarias porque "lo necesita".</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">El imperativo categórico: "Obra de tal modo que trates a la humanidad —en tu persona y en la de cualquier otro— siempre como fin, y nunca solo como medio." (a) Usar a un amigo: si la relación de amistad es instrumentalizada —se mantiene el contacto solo por lo que puede proporcionar, sin genuino interés en la persona— se la está tratando como medio. Kant no dice que no puedas pedir favores a un amigo: dice que no puede ser "solo" medio. Si la relación es genuinamente de doble reconocimiento y el favor es parte de esa relación, no hay problema. El problema es cuando el amigo es solo un contacto, un recurso. (b) Condiciones laborales precarias: si una empresa ofrece condiciones que daña la salud y la dignidad porque "el trabajador lo necesita", lo está tratando como medio —aprovechándose de su situación de vulnerabilidad. Kant diría que la necesidad del trabajador no da licencia al empleador para degradar su dignidad. La desigualdad de poder no transforma en legítimo lo que viola la humanidad del otro.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">La bioética contemporánea debate si los embriones humanos, los fetos, los enfermos en estado vegetativo y los animales de alta cognición (delfines, chimpancés) son o deben ser considerados "personas". Aplicá los criterios filosóficos estudiados (Boecio, Kant, Mounier) a este debate.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Este es uno de los debates más vivos en bioética. Desde Boecio: persona es sustancia individual de naturaleza racional. El criterio es la naturaleza (la especie), no el ejercicio actual de la razón. Un bebé que no razona actualmente es persona porque tiene naturaleza racional: su esencia es racional aunque no pueda ejercerla todavía. Bajo este criterio: embriones, fetos, enfermos en estado vegetativo son personas (tienen naturaleza racional); los animales, incluso los más cognoscitivos, no lo son (no tienen naturaleza racional). Desde Kant: la persona es el ser que puede ser fin en sí mismo por su autonomía racional. Bajo este criterio estricto, los que no tienen autonomía racional actual (embriones, enfermos en estado vegetativo) tendrían un estatus ambiguo. Muchos kantianos extendieron el criterio: Peter Singer (utilitarista, no kantiano) propone que lo que importa es la capacidad de sentir placer y dolor, no la racionalidad —lo que incluiría muchos animales pero excluiría embriones tempranos. Desde Mounier: la persona se constituye en relación. Esto no niega la dignidad del embrión pero sí enfatiza que la persona no existe en aislamiento: existe como relación, como vocación, como historia. La mayoría de los sistemas de derechos humanos han adoptado una posición próxima a Boecio: el criterio de la naturaleza (ser humano) garantiza la dignidad independientemente del estado de desarrollo.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">¿Es coherente defender los derechos humanos sin una fundamentación filosófica de la persona? Analizá la tensión entre el "consenso pragmático" de la Declaración Universal de 1948 y la necesidad de fundamentos metafísicos para los derechos.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">La Declaración Universal de Derechos Humanos (1948) fue diseñada deliberadamente para no depender de ninguna fundamentación filosófica o religiosa específica: sus redactores (Maritain, entre otros) acordaron en el "qué" (los derechos) sin acordar en el "por qué" (sus fundamentos). Esta estrategia de "consenso superpuesto" (Rawls la desarrolló después) permitió el acuerdo entre personas con visiones del mundo muy distintas. El problema filosófico: si no hay fundamento, ¿en qué se apoya la obligatoriedad de los derechos cuando son violados? Si son solo consenso, el consenso puede cambiar. La historia muestra que las atrocidades más graves se cometieron dentro de marcos legales (el Holocausto fue legal bajo el derecho nazi). Un sistema que solo se apoya en el consenso no puede criticar desde afuera a un sistema que consensuó diferente. La respuesta filosófica clásica: los derechos humanos son anteriores al consenso porque son derechos de la persona en cuanto persona (naturaleza racional, dignidad, fin en sí mismo). El consenso los reconoce; no los crea. La respuesta rawlsiana: aunque no compartamos los fundamentos metafísicos, podemos compartir razones políticas overlapping (solapadas) que sostengan los derechos. Esto es pragmáticamente eficaz pero filosóficamente insuficiente ante el fundamentalismo que niega esas razones. La conclusión más honesta: el consenso pragmático es útil políticamente, pero la solidez de los derechos requiere alguna forma de fundamentación filosófica que afirme la dignidad de la persona como anterior a la decisión colectiva.</div></div></div>

<table class="sum"><tr><th>Concepto</th><th>Definición</th><th>Autor</th></tr>
<tr><td>Definición de persona (Boecio)</td><td>Sustancia individual de naturaleza racional; funda la dignidad por la naturaleza, no por el ejercicio actual</td><td>Boecio (S.V-VI)</td></tr>
<tr><td>Dignidad vs. precio (Kant)</td><td>Dignidad: no tiene equivalente, fin en sí mismo; precio: reemplazable por algo equivalente</td><td>Kant (Fundamentación, 1785)</td></tr>
<tr><td>Imperativo categórico</td><td>Trata a la humanidad siempre como fin, nunca solo como medio</td><td>Kant</td></tr>
<tr><td>Personalismo (Mounier)</td><td>La persona no es átomo (individualismo) ni masa (colectivismo): es relacional e irrepetible</td><td>Mounier (S.XX)</td></tr>
<tr><td>Derechos humanos</td><td>Derechos de la persona en cuanto persona: anteriores al Estado, que debe reconocerlos y protegerlos</td><td>Declaración Universal 1948; fundamento filosófico en Boecio/Kant</td></tr>
</table>
</div>` },

  311: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Filosofía · U3</div>
<h1>El hombre como problema</h1>
<p>La modernidad logró conocer el universo con precisión extraordinaria. Pero al mismo tiempo perdió de vista al ser humano. El hombre que estudia el cosmos con telescopios no se conoce a sí mismo. Esta paradoja es el problema antropológico contemporáneo.</p></div>

<h2>El olvido del ser humano en la modernidad</h2>
<p>Max Scheler, en <em>El puesto del hombre en el cosmos</em> (1928), observa que nunca antes la humanidad tuvo tanto conocimiento sobre sí misma —biología, psicología, historia, sociología— y sin embargo nunca fue tan incierta respecto a qué es. La acumulación de saberes particulares sobre el hombre no produce una imagen coherente del ser humano.</p>
<p>El problema es que la modernidad fragmentó el estudio del hombre en ciencias particulares. Cada ciencia ve "su" hombre: el biólogo ve al animal evolutivo, el economista ve al homo economicus, el psicólogo ve al haz de pulsiones, el sociólogo ve al rol social. Nadie ve al hombre completo. El hombre como tal se ha convertido en un problema filosófico.</p>

<h2>Las cuatro preguntas de Kant</h2>
<p>Kant formuló las cuatro preguntas fundamentales de la filosofía: ¿Qué puedo conocer? (epistemología) / ¿Qué debo hacer? (ética) / ¿Qué me cabe esperar? (filosofía de la religión, escatología) / ¿Qué es el hombre? (antropología filosófica). Y añadió que las tres primeras se reducen a la cuarta: en el fondo, toda la filosofía es pregunta por el hombre.</p>
<p>Esta centralidad del problema antropológico en Kant no significa que tenga respuesta sencilla. Al contrario: Kant muestra que el hombre es el ser que no puede comprenderse plenamente a sí mismo desde sí mismo —necesita preguntar por sus condiciones de posibilidad.</p>

<h2>Concepciones parciales del hombre</h2>
<p>La historia de la filosofía contemporánea es, en parte, la historia de las concepciones parciales del hombre:</p>
<p><strong>El hombre como animal evolutivo (Darwin/Materialismo):</strong> el ser humano es un primate muy desarrollado. La diferencia con los demás animales es de grado, no de especie.</p>
<p><strong>El hombre como haz de pulsiones (Freud):</strong> el ser humano es fundamentalmente un conjunto de fuerzas psíquicas (pulsiones, el ello, el superyó) que el yo intenta gestionar. La razón es esclava de las pasiones.</p>
<p><strong>El hombre como producto social (Marx):</strong> el ser humano es lo que sus condiciones materiales de producción hacen de él. "No es la conciencia de los hombres la que determina su ser, sino su ser social lo que determina su conciencia."</p>

<h2>La integración filosófica: hacia una antropología integral</h2>
<p>La tarea de la antropología filosófica es integrar los aportes de las ciencias particulares sin reducir al hombre a ninguna de ellas. Cada ciencia captura un aspecto real del ser humano: la biología, su materialidad; la psicología, su vida afectiva; la sociología, su dimensión relacional. Pero ninguna agota lo que es el hombre.</p>
<div class="box">La antropología filosófica no compite con las ciencias del hombre: las integra en una visión más completa. No dice que la biología está equivocada; dice que el ser humano es más que su biología. La diferencia es filosófica, no científica.</div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Por qué la paradoja de Scheler (más conocimiento, menos certeza sobre el hombre) es filosóficamente significativa?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp311a','Correcto. Scheler señala que la acumulación de conocimientos científicos sobre el hombre (biología, psicología, sociología, historia) produce imágenes fragmentadas y a veces contradictorias entre sí. Ninguna de las ciencias ve al hombre completo: cada una ve el aspecto que su método le permite ver. La integración de esas visiones parciales en una comprensión del hombre como tal sigue siendo una tarea filosófica irresuelba.','')">Porque muestra que el conocimiento científico parcializa al hombre: cada ciencia ve su aspecto, pero ninguna ve al hombre entero; la síntesis sigue siendo filosófica</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp311a','','Incorrecto. Scheler no propone que la filosofía reemplace a las ciencias. Propone que integre sus aportes parciales en una visión del hombre completo.')">Porque prueba que las ciencias no sirven para conocer al hombre y solo la filosofía puede hacerlo</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp311a','','Incorrecto. Scheler no concluye que el hombre sea incognoscible. Concluye que el conocimiento científico parcializado es insuficiente y que la pregunta filosófica por el hombre completo es ineludible.')">Porque demuestra que el hombre es en principio incognoscible para cualquier disciplina</button>
<div class="cp-fb" id="cp311a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — Según Kant, ¿cómo se relacionan las cuatro preguntas fundamentales de la filosofía?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp311b','','Incorrecto. Para Kant las cuatro preguntas son distintas y corresponden a diferentes ramas de la filosofía, pero no son independientes: se articulan en la pregunta por el hombre.')">Son cuatro preguntas completamente independientes que deben responderse por separado</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp311b','Correcto. Kant identifica las cuatro preguntas (¿qué puedo conocer? ¿qué debo hacer? ¿qué me cabe esperar? ¿qué es el hombre?) y señala que las tres primeras pueden reducirse a la cuarta. Toda la filosofía pregunta, en el fondo, por el hombre: por las condiciones de posibilidad de su conocimiento, de su acción moral y de su esperanza.','')">Las tres primeras (epistemología, ética, escatología) se reducen a la cuarta (¿qué es el hombre?): toda la filosofía es en el fondo antropología</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp311b','','Incorrecto. La pregunta "¿qué es el hombre?" no es más fácil que las otras; es la más difícil. Las demás se reducen a ella porque el hombre es el ser que conoce, actúa y espera.')">La cuarta pregunta (¿qué es el hombre?) es más fácil porque resume las otras tres</button>
<div class="cp-fb" id="cp311b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Identificá la "concepción parcial del hombre" que subyace a cada uno de los siguientes enunciados: (a) "Los problemas sociales se resolverán cuando cambiemos el sistema económico"; (b) "El libre mercado es el sistema natural para una especie competitiva como la humana"; (c) "Todo comportamiento humano puede explicarse por sus mecanismos cerebrales".</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">(a) Concepción marxista: el ser humano es fundamentalmente producto de sus condiciones materiales. Si cambia la base económica, cambia la conciencia y el comportamiento. La premisa es que la conciencia es epifenómeno de la estructura material. (b) Darwinismo social / visión evolutiva materialista: el ser humano es un animal evolutivo cuya naturaleza es la competencia por recursos. El libre mercado sería el correlato económico de la lucha por la supervivencia del más apto. La premisa es que la naturaleza humana es la del primate competitivo. (c) Reduccionismo neurológico: el ser humano es su cerebro. Todo comportamiento tiene una explicación en términos de mecanismos neuronales. La premisa es el monismo materialista eliminativista o reduccionista. Ninguna de estas visiones es completamente falsa (hay algo verdadero en cada una), pero cada una es parcial: ninguna captura al ser humano completo en sus dimensiones biológica, psíquica, social y espiritual.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Analizá la afirmación marxista: "No es la conciencia de los hombres la que determina su ser, sino su ser social lo que determina su conciencia." ¿Cuánta verdad hay en ella? ¿Qué deja fuera?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">La verdad de la afirmación: la sociología del conocimiento (Mannheim, Berger-Luckmann) ha mostrado ampliamente que las ideas, las categorías de pensamiento y los valores están profundamente influidos por la posición social, la época histórica y las condiciones materiales. Un campesino feudal del S.XIII piensa el mundo de manera radicalmente distinta a un ingeniero informático de 2024, no porque uno sea más inteligente sino porque sus condiciones materiales de existencia generan horizontes de sentido muy diferentes. Lo que deja fuera: (1) La capacidad de la conciencia de modificar las condiciones materiales. Marx lo sabía (por eso escribió el Manifiesto), pero su modelo teórico subestima el poder de las ideas para transformar la estructura. Los grandes cambios históricos frecuentemente empezaron por ideas (el protestantismo de Lutero y el capitalismo, según Weber). (2) La dimensión espiritual irreductible: la búsqueda de verdad, belleza y bien que trasciende las condiciones materiales. Frankl en Auschwitz es el ejemplo límite: las condiciones materiales más destructivas posibles, y sin embargo hubo personas que mantuvieron su vida espiritual. (3) La libertad individual: el determinismo social pleno hace imposible la responsabilidad moral y el cambio social consciente, lo que es contradictorio con el propio proyecto marxista.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">¿Es posible una "antropología filosófica científica", es decir, una ciencia del hombre que sea empírica y filosófica a la vez? ¿O la filosofía y las ciencias del hombre están condenadas a hablar de niveles diferentes sin comunicarse? Argumentá con referencia al programa de la materia.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">La tensión es real pero no insalvable. Hay al menos tres modelos de relación entre filosofía y ciencias del hombre: Modelo 1 (separación estricta): filosofía y ciencias tienen niveles distintos e inconmensurables. La ciencia describe mecanismos; la filosofía pregunta por el ser y el sentido. No compiten porque no hablan de lo mismo. Riesgo: la filosofía se vuelve irrelevante para quien quiera entender al hombre concreto. Modelo 2 (reducción): la filosofía debe ser reemplazada por ciencias empíricas más rigurosas. Riesgo: pierde las preguntas normativas y de sentido que las ciencias no pueden responder. Modelo 3 (diálogo y complementariedad, el más defendible): las ciencias aportan datos empíricos irreemplazables sobre aspectos del ser humano; la filosofía aporta el marco conceptual que integra esos datos en una comprensión del ser humano como tal. Este modelo requiere que el filósofo lea ciencia y el científico lea filosofía. Ejemplos actuales: la neurociencia del libre albedrío (Libet) no puede interpretarse sin categorías filosóficas sobre causalidad y libertad; la psicología evolutiva del altruismo no puede evaluarse éticamente sin una teoría filosófica del bien. La "antropología filosófica científica" que busca el programa es precisamente esta: una reflexión filosófica informada por los datos científicos sobre el hombre, y unas ciencias del hombre que no pierden de vista las preguntas filosóficas sobre el ser humano integral.</div></div></div>

<table class="sum"><tr><th>Posición</th><th>Visión parcial del hombre</th><th>Lo que deja fuera</th></tr>
<tr><td>Materialismo evolutivo</td><td>Animal evolutivo: diferencia de grado con los demás primates</td><td>Reflexividad, simbolismo, apertura al mundo</td></tr>
<tr><td>Psicoanálisis (Freud)</td><td>Haz de pulsiones; razón como instrumento del ello</td><td>Dimensión espiritual, libertad, responsabilidad</td></tr>
<tr><td>Materialismo histórico (Marx)</td><td>Producto de las condiciones materiales de producción</td><td>Libertad individual, dimensión espiritual, poder de las ideas</td></tr>
<tr><td>Antropología filosófica integral</td><td>Ser de cuatro dimensiones (biológica, psíquica, social, espiritual) en unidad</td><td>—</td></tr>
</table>
</div>` },

  312: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Filosofía · U3</div>
<h1>Bien individual, bien común y vida social</h1>
<p>¿Es el bien algo puramente individual o también puede ser común? Esta pregunta no es abstracta: define cómo entendemos la política, la solidaridad y la justicia. La tradición aristotélico-tomista da una respuesta que sigue siendo filosóficamente potente.</p></div>

<h2>El bien en la tradición clásica</h2>
<p>Para Aristóteles, el bien es el fin al que tiende cada cosa por su naturaleza. El bien del ser humano —la <em>eudaimonía</em>, la felicidad o florecimiento— es la actualización plena de sus potencialidades propias: vivir según la razón, desarrollar las virtudes, participar en la vida política. El bien no es subjetivo (lo que a mí me parece bueno) sino objetivo (lo que corresponde a la naturaleza del ser humano).</p>
<p>Tomás de Aquino incorpora esta visión aristotélica en un marco teológico: el bien último del hombre es Dios (la bienaventuranza), y los bienes terrenales son participaciones o aproximaciones a ese bien último. La ética tomista es teleológica: los actos son buenos o malos según se orienten o no al fin último del ser humano.</p>

<h2>El bien común: definición y estructura</h2>
<p>El <strong>bien común</strong> no es la suma de los bienes individuales ni el bien del Estado como entidad abstracta. Es el conjunto de condiciones de la vida social que permiten a los grupos y a los individuos conseguir su propia perfección con mayor facilidad. Definición clásica del Vaticano II (Gaudium et Spes): "el conjunto de aquellas condiciones de la vida social que permiten a los grupos y a cada uno de sus miembros alcanzar su propia plenitud más plena y fácilmente".</p>
<div class="box">El bien común no anula al bien individual: es la condición que lo hace posible. Una sociedad justa, con instituciones honestas, con seguridad, con educación y salud accesibles, permite que cada persona desarrolle mejor su bien propio. El bien común es el bien de las condiciones, no de los contenidos.</div>

<h2>El principio de subsidiariedad</h2>
<p>El principio de <strong>subsidiariedad</strong> establece que ninguna sociedad de orden superior debe hacer lo que puede hacer una sociedad de orden inferior. El Estado no debe hacer lo que puede hacer la familia; la nación no debe hacer lo que puede hacer la comunidad local; el gobierno central no debe hacer lo que pueden hacer los municipios. La subsidiariedad protege la autonomía de las instancias menores sin abandonarlas a su suerte.</p>
<p>Este principio tiene dos caras: una negativa (no intervenir donde no es necesario) y una positiva (suplir, ayudar, cuando la instancia inferior no puede sola). No es ni puro libertarismo ("el Estado no debe hacer nada") ni estatismo ("el Estado lo hace todo mejor").</p>

<h2>Solidaridad y justicia social</h2>
<p>La <strong>solidaridad</strong> no es filantropía opcional sino una exigencia moral: el reconocimiento de que somos interdependientes y que el bien de cada uno está ligado al bien de todos. Juan Pablo II (Sollicitudo Rei Socialis) la definió como una firme determinación de comprometerse con el bien común.</p>
<p>La <strong>justicia social</strong> exige que las instituciones estén orientadas al bien común y que los bienes sean distribuidos de manera que cada persona pueda desarrollar sus potencialidades. No es igualdad aritmética (todos lo mismo) sino equidad: a cada uno según lo que le corresponde por su dignidad de persona y sus necesidades reales.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Por qué el bien común no es lo mismo que la suma de los bienes individuales?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp312a','Correcto. El bien común es el conjunto de condiciones sociales que permiten a cada persona desarrollar su bien propio. No es la suma de los bienes individuales porque incluye bienes que solo existen en y por la comunidad (justicia institucional, paz, educación accesible, etc.) y que no se obtienen sumando preferencias individuales. Una sociedad en que cada individuo maximiza su bien individual puede carecer de bien común (como muestra la tragedia de los comunes).','')">Porque el bien común son las condiciones sociales que lo hacen posible; solo existe en y por la comunidad, no como suma de preferencias individuales</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp312a','','Incorrecto. El bien común no es opuesto al individual; es su condición de posibilidad. No niega el bien individual sino que crea el marco para que sea alcanzable.')">Porque el bien común está siempre en tensión con el bien individual y uno de los dos debe prevalecer</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp312a','','Incorrecto. El bien común no es lo que quiere la mayoría: puede haber consenso mayoritario sobre algo que daña el bien de personas o grupos minoritarios. La justicia no se reduce al consenso democrático.')">Porque es lo que quiere la mayoría, independientemente de los bienes individuales de cada persona</button>
<div class="cp-fb" id="cp312a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué establece el principio de subsidiariedad y cómo combina libertad e intervención?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp312b','','Incorrecto. La subsidiariedad no es sinónimo de laissez-faire. Tiene una dimensión positiva: cuando la instancia inferior no puede sola, la superior debe ayudar. No es puro no-intervencionismo.')">Que el Estado nunca debe intervenir en los asuntos de los individuos o grupos menores</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp312b','Correcto. La subsidiariedad establece: (1) dimensión negativa: ninguna instancia superior debe hacer lo que puede hacer una inferior (protege la autonomía); (2) dimensión positiva: la instancia superior debe ayudar (subsidiar, del latín "subsidium") cuando la inferior no puede sola. No es ni laissez-faire ni estatismo: es una distribución graduada de competencias según la capacidad de cada nivel.','')">Que ninguna instancia superior debe sustituir a una inferior si esta puede actuar, pero debe ayudarla cuando no puede; combina respeto a la autonomía con apoyo activo</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp312b','','Incorrecto. El principio de subsidiariedad es exactamente lo contrario a la centralización: protege la autonomía de las instancias menores frente a la tendencia centralizadora del Estado.')">Que el Estado central debe concentrar todas las funciones para garantizar la eficiencia</button>
<div class="cp-fb" id="cp312b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Dá tres ejemplos concretos del bien común (en el sentido de condiciones sociales) que afectan directamente tu capacidad de desarrollar tu bien individual como estudiante universitario.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Ejemplo 1: Un sistema educativo con instituciones universitarias de calidad y accesibles. Sin ese bien común, desarrollar las potencialidades intelectuales sería imposible o dependería exclusivamente del privilegio económico. Ejemplo 2: La seguridad jurídica y física (que los contratos se cumplan, que no haya violencia extrema en las calles). Sin seguridad, la energía que debería dedicarse al estudio se dedica a la autoprotección. Ejemplo 3: Un sistema de salud funcional. La enfermedad grave sin atención destruye la posibilidad de estudiar, trabajar y desarrollarse. Estos tres bienes comunes no son "mios" en el sentido individual: son condiciones que benefician a todos y que ningún individuo puede producir solo para sí mismo. Requieren instituciones, cooperación y esfuerzo colectivo sostenido en el tiempo.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Analizá la "tragedia de los comunes" (Hardin, 1968) como un argumento filosófico: ¿demuestra que el bien común es ilusorio? ¿Cómo respondería la tradición aristotélico-tomista?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">La tragedia de los comunes (Hardin): si un recurso compartido (un pastizal común) es libremente accesible para todos, cada pastor tiene incentivo individual para agregar más animales (ganancia individual concentrada) aunque eso destruya el pastizal (costo distribuido entre todos). Resultado: todos pierden por maximizar individualmente. Hardin usó esto para argumentar contra los "comunes" y a favor de la privatización o la regulación estatal. ¿Demuestra que el bien común es ilusorio? No exactamente. Lo que muestra es que sin instituciones adecuadas (normas, cooperación, confianza mutua), los bienes comunes tienden a ser sobreutilizados. Elinor Ostrom (Premio Nobel 2009) mostró empíricamente que las comunidades pueden gestionar exitosamente bienes comunes mediante instituciones locales y normas de cooperación sin privatizar ni centralizar. Respuesta aristotélico-tomista: la tragedia de los comunes ocurre cuando los individuos actúan como si no fueran naturalmente sociales, maximizando su ventaja individual aislada. Aristóteles diría que el homo economicus de la tragedia es una abstracción: el ser humano real es zoon politikon, cuya eudaimonía está entretejida con la de su comunidad. La tragedia no refuta el bien común: muestra qué pasa cuando los individuos actúan como si el bien común no existiera.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">El liberalismo político rawlsiano (Rawls, Teoría de la Justicia) define la justicia como equidad y establece principios para organizar la sociedad. ¿Es compatible esta visión con la noción clásica de bien común? ¿Qué diferencias y coincidencias hay entre Rawls y la tradición aristotélico-tomista?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Coincidencias: Rawls y la tradición clásica coinciden en que la justicia no es mera suma de preferencias individuales sino una exigencia normativa que ordena las instituciones hacia el bien de todos. El "velo de ignorancia" rawlsiano (diseñar principios sin saber qué posición ocuparemos en la sociedad) es un procedimiento para llegar a principios imparciales —análogo en su función a la búsqueda del bien común desde la perspectiva del ciudadano, no del individuo interesado. Diferencias fundamentales: (1) Fundamento: Rawls es explícitamente anti-metafísico; no apela a la naturaleza humana ni al bien objetivo. Sus principios se fundamentan en el consenso entre personas razonables. La tradición aristotélico-tomista fundamenta la justicia en la naturaleza humana y el bien objetivo. (2) Bien común vs. neutralidad: Rawls propone una concepción política "neutral" respecto a las concepciones del bien (el Estado no debe favorecer ninguna visión comprehensiva del bien). La tradición clásica dice que el Estado debe ordenarse al bien común objetivo, que incluye condiciones para el florecimiento humano integral. (3) Subsidiariedad vs. centralismo: Rawls no tiene un principio de subsidiariedad claro; su teoría tiende hacia instituciones centrales de redistribución. La tradición clásica distribuye las competencias según niveles. Conclusión: son compatibles en sus resultados prácticos en muchos casos (ambos justifican el Estado de bienestar, los derechos básicos, la igualdad de oportunidades) pero difieren en fundamentos y en el papel del Estado respecto a las concepciones del bien.</div></div></div>

<table class="sum"><tr><th>Concepto</th><th>Definición</th><th>Autor/Fuente</th></tr>
<tr><td>Eudaimonía</td><td>Florecimiento o felicidad: actualización plena de las potencialidades humanas según la razón y la virtud</td><td>Aristóteles</td></tr>
<tr><td>Bien común</td><td>Conjunto de condiciones sociales que permiten a personas y grupos alcanzar su plenitud con mayor facilidad</td><td>Gaudium et Spes (Vaticano II); Tomás de Aquino</td></tr>
<tr><td>Subsidiariedad</td><td>Ninguna instancia superior debe sustituir lo que puede hacer una inferior; debe subsidiar cuando esta no puede sola</td><td>Doctrina Social de la Iglesia; Tomás de Aquino</td></tr>
<tr><td>Solidaridad</td><td>Reconocimiento de la interdependencia y determinación de comprometerse con el bien común</td><td>Juan Pablo II (Sollicitudo Rei Socialis)</td></tr>
<tr><td>Justicia social</td><td>Orientación de las instituciones hacia el bien común; distribución equitativa según dignidad y necesidades reales</td><td>Tradición aristotélico-tomista; DSI</td></tr>
</table>
</div>` },

  313: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Filosofía · U3</div>
<h1>Persona, naturaleza y cultura</h1>
<p>¿Tenemos una naturaleza fija o somos un proyecto abierto? ¿La cultura nos humaniza o nos aleja de lo que somos? Estas preguntas no son académicas: definen cómo entendemos la ética, los derechos y la ecología.</p></div>

<h2>La naturaleza humana: ¿esencia o proceso?</h2>
<p>El debate sobre si el hombre tiene una <strong>naturaleza</strong> fija es uno de los más fundamentales de la antropología filosófica. La tradición clásica (Aristóteles, Tomás) sostiene que el ser humano tiene una esencia estable que lo define: es racional, social, libre. Esa esencia no es arbitraria ni cambia con la historia.</p>
<p>La modernidad, especialmente el existencialismo (Sartre: "la existencia precede a la esencia"), niega la naturaleza humana fija: el hombre no tiene una esencia previa dada; se define por sus elecciones. Esta posición tiene consecuencias éticas profundas: si no hay naturaleza humana, no hay un bien objetivo al que orientar las acciones.</p>
<div class="box">La posición clásica no dice que el hombre no cambie ni aprenda. Dice que hay algo que permanece a través del cambio y que funda la dignidad. Sin algún núcleo de naturaleza, los derechos humanos quedan sin fundamento: si el hombre es pura plasticidad, ¿por qué hay actos que siempre son violación de la humanidad?</div>

<h2>Cultura como humanización de la naturaleza</h2>
<p>La <strong>cultura</strong> es el conjunto de valores, normas, creaciones, lenguajes e instituciones mediante las cuales el ser humano transforma la naturaleza y se transforma a sí mismo. No es un añadido externo a lo humano: es el modo propio en que el ser humano actualiza su naturaleza.</p>
<p>Juan Pablo II (discurso a la UNESCO, 1980) definió la cultura como "el modo en que el hombre cultiva su humanidad". La cultura no es opuesta a la naturaleza: es su desarrollo y humanización. Un ser humano sin cultura no es más "natural": es un ser humano no desarrollado.</p>

<h2>Inculturación y universalidad</h2>
<p>Si la cultura es el modo de actualizar la naturaleza humana, hay tantas culturas como pueblos y épocas. Pero si la naturaleza humana es una, hay también algo universal en todas las culturas: la búsqueda de verdad, de belleza, de justicia, de trascendencia. La <strong>inculturación</strong> (término de la teología misional) es el proceso por el cual los valores universales se encarnan en formas culturales concretas.</p>
<p>La tensión entre universalidad y particularidad cultural es irreductible: lo universal se da siempre en formas particulares; lo particular aspira —cuando es auténtico— a lo universal. Ni el relativismo cultural (todo vale en su contexto) ni el imperialismo cultural (una sola forma es válida) son filosóficamente sostenibles.</p>

<h2>Ecología integral: persona, naturaleza y responsabilidad</h2>
<p>La encíclica <em>Laudato Si'</em> (Francisco, 2015) introduce el concepto de <strong>ecología integral</strong>: no hay ecología ambiental sin ecología humana. El cuidado de la naturaleza no puede separarse del cuidado del hombre. Una sociedad que destruye la naturaleza destruye también las condiciones para el florecimiento humano; una que destruye la dignidad de las personas contamina también su relación con el entorno natural.</p>
<p>La ecología integral critica tanto el reduccionismo ecologista (que pone la naturaleza sobre el hombre) como el tecnocrático (que pone al hombre sobre la naturaleza sin límites). La persona humana es parte de la naturaleza —no su enemigo— pero también su administrador responsable.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Cuáles son las consecuencias éticas de negar la naturaleza humana (posición existencialista radical)?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp313a','Correcto. Si no hay naturaleza humana, no hay bien objetivo al que orientar la acción. Sartre lo asume: la moral se construye mediante las elecciones libres sin referencia a ningún fin previo. Esto implica que no puede afirmarse que haya actos intrínsecamente incorrectos: todo depende de la elección y el proyecto. Los derechos humanos también quedan sin fundamento objetivo si no hay naturaleza humana que proteger.','')">Que sin naturaleza humana no hay bien objetivo; los derechos humanos pierden su fundamento y no puede afirmarse que haya actos intrínsecamente incorrectos</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp313a','','Incorrecto. Muchos existencialistas (el propio Sartre en sus últimas obras) desarrollaron una ética. Pero la consistencia de una ética sin naturaleza humana es filosóficamente problemática.')">Que no hay consecuencias éticas: los existencialistas pueden tener una ética igualmente válida</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp313a','','Incorrecto. Negar la naturaleza humana no implica anarquía inmediata: las normas sociales pueden seguir funcionando. El problema es su fundamentación última: si no hay naturaleza, las normas son arbitrarias.')">Que la vida social se vuelve imposible porque nadie seguiría ninguna norma</button>
<div class="cp-fb" id="cp313a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué es la "ecología integral" de Laudato Si' y por qué vincula el cuidado ambiental con la dignidad humana?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp313b','','Incorrecto. Laudato Si' no propone que la naturaleza sea más importante que el hombre. Critica tanto el reduccionismo ecologista como el tecnócrata que ignora los límites naturales.')">Que la naturaleza tiene más derechos que el hombre y debe protegerse a cualquier costo humano</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp313b','Correcto. La ecología integral afirma que el cuidado de la naturaleza y el cuidado del hombre son inseparables. Quien destruye la naturaleza destruye las condiciones para el florecimiento humano; quien pisotea la dignidad de las personas daña también su relación con el entorno. No hay ecología ambiental auténtica sin ecología humana: los pobres son simultáneamente los más afectados por la degradación ambiental y los más excluidos de los beneficios del desarrollo.','')">Que cuidado ambiental y dignidad humana son inseparables: quien destruye la naturaleza destruye condiciones humanas; quien pisotea personas daña también el entorno</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp313b','','Incorrecto. Laudato Si' no reduce la ecología a un tema técnico de gestión ambiental. Propone una conversión integral que incluye dimensiones éticas, sociales, espirituales y políticas.')">Que es simplemente una estrategia de gestión ambiental sostenible sin implicancias filosóficas</button>
<div class="cp-fb" id="cp313b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Explicá la diferencia entre relativismo cultural e imperialismo cultural, y dá un ejemplo histórico de cada uno.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Relativismo cultural: la posición de que todas las prácticas culturales son igualmente válidas en su contexto; ninguna cultura puede juzgar a otra. Ejemplo: afirmar que las mutilaciones genitales femeninas practicadas en ciertas culturas son "válidas en ese contexto" y que criticarlas es imponer valores occidentales. El problema filosófico: el relativismo no puede sostenerse a sí mismo (¿es "universalmente verdad" que no hay verdades universales?) y elimina la posibilidad de criticar genocidios, esclavitud o cualquier práctica dentro de una cultura que la practique. Imperialismo cultural: la imposición de los valores y formas culturales de una sociedad poderosa sobre otras, negando su valor propio. Ejemplo histórico: la colonización europea que destruyó sistemáticamente las lenguas, religiones y tradiciones de los pueblos indígenas americanos, presentando la cultura europea como "civilización" y la indígena como "barbarie". El problema filosófico: niega que haya valores auténticos en las culturas no occidentales y usa lo "universal" como cobertura ideológica para la dominación particular. La posición filosófica equilibrada: hay valores universales (dignidad de la persona, búsqueda de verdad y justicia) que se encarnan siempre en formas culturales particulares. Se puede afirmar la universalidad sin imponer una sola forma cultural.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">El transhumanismo propone mejorar la naturaleza humana mediante tecnología (implantes cognitivos, modificación genética, extensión de la vida). ¿Qué respondería la filosofía clásica de la naturaleza humana a esta propuesta?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">El transhumanismo (Nick Bostrom, Ray Kurzweil) propone que la humanidad debe y puede trascender sus limitaciones biológicas actuales mediante tecnología. La respuesta filosófica clásica tiene varios niveles: Desde la noción de naturaleza humana: si la naturaleza humana es racional, libre y social, la clave no está en las capacidades cognitivas brutas sino en cómo se usan. Un ser con inteligencia aumentada x1000 pero sin sabiduría (prudencia, virtud) puede hacer más daño que bien. La pregunta no es "¿cuánto puede procesar?" sino "¿hacia qué fines?". Desde la dignidad de la persona: la modificación genética para producir personas con características predefinidas cosifica al ser humano: lo convierte en un producto diseñado, no en un fin en sí mismo. Kant diría que diseñar personas "a medida" viola la autonomía de quienes no pueden consentir antes de nacer. Desde la ecología integral: el transhumanismo es en cierto modo la expresión extrema del paradigma tecnocrático que Laudato Si' critica: la voluntad de dominio ilimitado sobre la naturaleza, incluyendo la propia. La posición más matizada: no toda mejora tecnológica viola la naturaleza humana (los anteojos mejoran la visión, los antibióticos salvan vidas). El criterio es si la mejora está al servicio de la persona o la convierte en producto. Las mejoras terapéuticas que restauran capacidades son distintas de las mejoras de diseño que optimizan al ser humano como si fuera una máquina.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Analizá la tensión entre universalismo de los derechos humanos y pluralismo cultural desde la perspectiva de la filosofía de la persona. ¿Es el universalismo de los derechos un imperialismo cultural occidental o hay argumentos filosóficos para su validez intercultural?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">La crítica poscolonial y relativista: los derechos humanos tal como están formulados en la DUDH de 1948 reflejan valores occidentales ilustrados (individualismo, autonomía, laicismo) que son extraños a muchas culturas no occidentales. Imponer estos derechos equivale a un imperialismo cultural disfrazado de universalismo. Hay verdad en esta crítica: la formulación histórica y el contexto político de la DUDH son occidentales; la implementación de los derechos ha servido a veces de cobertura para intervenciones imperialistas. La respuesta filosófica al relativismo: (1) El argumento transcultural: en prácticamente todas las culturas conocidas hay normas contra el asesinato arbitrario de miembros del grupo, contra el robo, contra la traición. Esto sugiere que hay elementos de un mínimo moral transcultural que no es exclusivamente occidental. (2) El argumento de la coherencia: los líderes que apelan al relativismo cultural para rechazar derechos humanos universales son típicamente los que violan esos derechos. El relativismo cultural es frecuentemente un instrumento del poder para legitimarse, no una defensa genuina de la diversidad cultural. (3) El argumento de la persona: si la dignidad de la persona se funda en su naturaleza racional y libre (no en la cultura occidental específica), entonces trasciende cualquier cultura particular. Las culturas no tienen dignidad; las personas la tienen. Una práctica cultural que viola sistematicamente la dignidad de personas no es "más válida" por ser cultural. La conclusión más honesta: los derechos humanos tienen contenido filosófico genuinamente universal (dignidad de la persona, libertad, integridad), aunque su formulación histórica sea occidentalmente marcada. La tarea es separar el contenido universal de la formulación culturalmente marcada —lo que el proceso de debate intercultural en Naciones Unidas intenta, con sus imperfecciones.</div></div></div>

<table class="sum"><tr><th>Concepto</th><th>Posición</th><th>Implicancias</th></tr>
<tr><td>Naturaleza humana (posición clásica)</td><td>Esencia estable y racional que funda la dignidad; funda la ética objetiva y los DDHH</td><td>Hay actos intrínsecamente incorrectos; la ética no es arbitraria</td></tr>
<tr><td>Existencialismo (Sartre)</td><td>La existencia precede a la esencia; el hombre se define por sus elecciones</td><td>La ética es construcción; no hay naturaleza que violar</td></tr>
<tr><td>Cultura</td><td>Modo en que el hombre cultiva su humanidad; humanización de la naturaleza, no oposición a ella</td><td>Universal-en-lo-particular: los valores universales se encarnan en formas culturales concretas</td></tr>
<tr><td>Ecología integral (Laudato Si')</td><td>Cuidado ambiental y dignidad humana son inseparables; crítica al paradigma tecnocrático</td><td>No hay ecología sin justicia social; no hay justicia sin ecología</td></tr>
<tr><td>Relativismo vs. imperialismo cultural</td><td>Dos extremos incorrectos: uno niega los universales, el otro los impone en una sola forma</td><td>Universalidad real en formas culturales particulares; diálogo intercultural</td></tr>
</table>
</div>` }

}; // end CLASES (101-313)

// ============================================================
// INTRODUCCIÓN A LA INGENIERÍA + QUÍMICA I — content.js
// ============================================================

const CLASES_INTRO = {

  401: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Intro Ingeniería · U1</div>
<h1>Racionalidad técnica vs. científica</h1>
<p>Todo ingeniero razona. Pero ¿razona igual que un científico? La respuesta es no, y entender por qué cambia completamente cómo pensás tu trabajo. La racionalidad que usás al diseñar no busca verdad: busca soluciones eficientes dentro de restricciones. Eso tiene consecuencias enormes.</p></div>

<h2>¿Qué es la racionalidad técnica?</h2>
<p>La ciencia pregunta <em>por qué</em> las cosas funcionan como funcionan. La ingeniería pregunta <em>cómo</em> hacer que algo funcione mejor. Esa diferencia de orientación no es trivial: implica lógicas completamente distintas.</p>
<p>La racionalidad científica es <strong>teórico-explicativa</strong>: busca leyes universales, verdades reproducibles, modelos que describan la realidad. Su criterio de éxito es la verdad o la falsedad. La racionalidad técnica, en cambio, es <strong>instrumental-práctica</strong>: busca resolver un problema concreto con los recursos disponibles. Su criterio de éxito es la eficiencia.</p>
<div class="box">La racionalidad técnica no es una racionalidad de segundo orden. Es una forma diferente de razonar, con su propia lógica: orientada a fines, acotada por restricciones, evaluada por eficiencia.</div>

<h2>El imperativo de la eficiencia</h2>
<p>En el corazón de la ingeniería está la maximización de la eficiencia: obtener el máximo resultado con el mínimo recurso. Este imperativo no es neutro. Define qué se considera un "buen" diseño y qué no. Un puente que cumple su función pero usa el doble de acero del necesario no es un buen diseño ingenieril, aunque sea perfectamente funcional.</p>
<p>Pero la eficiencia respecto a qué y para quién no se deduce sola. Ahí aparece la <em>heurística</em>: el conjunto de reglas prácticas, experiencia acumulada y criterios de búsqueda que guían al ingeniero cuando no hay una solución óptima calculable. La heurística es lo que distingue al ingeniero experto del novato: no tiene más fórmulas, tiene mejores atajos racionales.</p>

<h2>El estado del arte como horizonte de lo posible</h2>
<p>La ingeniería no diseña en el vacío. El conjunto de soluciones que un ingeniero puede concebir está delimitado por el estado del arte: qué materiales existen, qué procesos son conocidos, qué herramientas están disponibles. El estado del arte define el horizonte de lo posible en un momento histórico dado.</p>
<p>Esto explica por qué los diseños de distintas épocas se parecen tanto entre sí: no es falta de creatividad, es que todos los ingenieros de una época comparten el mismo horizonte técnico. Las grandes rupturas en ingeniería ocurren cuando ese horizonte se amplía —un nuevo material, un nuevo proceso— y de repente son posibles diseños que antes eran impensables.</p>

<h2>¿Por qué esto importa para la formación?</h2>
<p>Como señala Giuliano en el Cierre, la formación en ingeniería históricamente pasó por dos grandes etapas: primero se enseñó <em>cómo</em> funcionan los mecanismos; luego se sumó <em>por qué</em> funcionan, con las ciencias exactas de base. Hoy estamos ante una tercera demanda: entender en qué contexto cultural, social y político se insertan esas soluciones técnicas. La racionalidad técnica no puede ignorar esa dimensión si quiere seguir siendo racional.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Cuál es la diferencia central entre racionalidad científica y racionalidad técnica?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp401a','Correcto. La ciencia busca verdad (explicar por qué algo es así); la ingeniería busca eficiencia (lograr que algo funcione mejor). Son criterios de éxito radicalmente distintos: verdad/falsedad vs. eficiente/ineficiente.','')">La ciencia busca verdad; la ingeniería busca soluciones eficientes</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp401a','','Incorrecto. La ingeniería sí usa conocimiento científico, pero eso no significa que su racionalidad sea científica. Un ingeniero puede usar la ley de Ohm sin que su objetivo sea probar si esa ley es verdadera o falsa.')">La ingeniería es una aplicación de la ciencia, así que comparten la misma racionalidad</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp401a','','Incorrecto. La heurística es una herramienta de la racionalidad técnica, no la racionalidad en sí misma. La diferencia central está en el criterio de éxito: eficiencia vs. verdad.')">La diferencia está en que la ingeniería usa heurística y la ciencia no</button>
<div class="cp-fb" id="cp401a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué limita el espacio de diseño de un ingeniero en un momento histórico dado?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp401b','','Incorrecto. El presupuesto es una restricción importante, pero no define el horizonte de lo técnicamente concebible. Un ingeniero del siglo XIX no podía diseñar con fibra de carbono por más presupuesto que tuviera.')">El presupuesto disponible para el proyecto</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp401b','Correcto. El estado del arte —materiales disponibles, procesos conocidos, herramientas existentes— define qué soluciones son siquiera concebibles en una época. Es el horizonte técnico compartido por todos los ingenieros de ese momento histórico.','')">El estado del arte: materiales, procesos y herramientas disponibles en esa época</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp401b','','Incorrecto. La creatividad individual cuenta, pero está acotada por lo técnicamente posible. Un ingeniero muy creativo en 1850 no podía imaginar un microchip porque los materiales semiconductores no existían como opción.')">La creatividad individual del ingeniero</button>
<div class="cp-fb" id="cp401b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Definí con tus palabras la diferencia entre racionalidad científica y racionalidad técnica. Usá un ejemplo concreto de tu vida cotidiana donde puedas identificar cuál de las dos está operando (puede ser algo tan simple como usar una app, hacer una reparación en casa, o elegir una ruta).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">La racionalidad científica busca explicar por qué algo es como es, usando criterios de verdad o falsedad. La racionalidad técnica busca resolver un problema con la mayor eficiencia posible, usando criterios de desempeño. Ejemplo: cuando un médico investiga por qué un fármaco funciona (¿cuál es el mecanismo molecular?) opera en modo científico. Cuando un enfermero decide qué dosis administrar a un paciente concreto dado su peso, historial y recursos disponibles, opera en modo técnico. En la vida cotidiana: usar Google Maps es racionalidad técnica pura —el sistema no "entiende" las calles, optimiza una función de costo (tiempo, distancia) dentro de restricciones.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">El ingeniero que diseñó el puente Tacoma Narrows (que colapsó en 1940 por resonancia eólica) había seguido todos los criterios de eficiencia vigentes en su época y los estándares de diseño aceptados. Analizá este caso a la luz del concepto de "estado del arte como horizonte de lo posible". ¿Es posible culpar al ingeniero? ¿Qué dice esto sobre la relación entre racionalidad técnica y conocimiento disponible?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">El caso Tacoma Narrows ilustra perfectamente el concepto de horizonte del estado del arte. Los ingenieros de los años 30-40 no tenían modelos aerodinámicos para puentes colgantes —ese conocimiento simplemente no existía como opción de diseño. El ingeniero Leon Moisseiff aplicó la teoría deflectiva vigente y optimizó el uso de acero (la sección era más esbelta y económica que cualquier diseño previo). El fallo no fue una falla de racionalidad técnica sino los límites del horizonte técnico de la época. Esto muestra algo crucial: la racionalidad técnica siempre opera dentro de un marco de conocimiento dado. No es "ciega" a sus limitaciones —simplemente no puede ver lo que el estado del arte no ilumina. La culpa individual es discutible; la lección colectiva fue expandir el horizonte técnico incorporando la aerodinámica al diseño estructural. El colapso no fue un fracaso de la ingeniería: fue el modo en que la ingeniería aprende y amplía su horizonte.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Giuliano plantea que la formación en ingeniería debe incorporar una tercera aproximación: no solo el cómo ni el por qué, sino el en qué contexto cultural y social. Tomá posición: ¿Es esto compatible con la racionalidad técnica, o implica introducir una racionalidad diferente? ¿Puede un ingeniero maximizar la eficiencia técnica y al mismo tiempo considerar la equidad social? Argumentá con al menos dos ejemplos concretos.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Esta es una tensión real que no tiene resolución simple. Una postura es que la racionalidad técnica puede absorber la dimensión social si se la trata como una restricción adicional: en lugar de optimizar solo costo y resistencia, también se optimiza equidad de acceso o impacto social. Bajo esta mirada, no hay contradicción —se amplía el espacio de variables pero la lógica sigue siendo técnica. Ejemplo 1: el diseño universal en arquitectura (rampas, señalética táctil) incorpora la restricción de accesibilidad sin abandonar la lógica de eficiencia. El ingeniero no "cambia de racionalidad"; amplía su función de costo. Ejemplo 2: el diseño de algoritmos de crédito que deben cumplir criterios de no-discriminación. Aquí la equidad se vuelve una restricción formal de ingeniería. La postura alternativa —que Giuliano parece favorecer— dice que hay valores que no son reducibles a restricciones técnicas, porque implican juicios normativos que la técnica no puede resolver sola: ¿quién decide cuánto vale la equidad versus la eficiencia? Esa ponderación requiere deliberación política y ética, no cálculo. La conclusión más honesta es que ambas posturas tienen razón en parte: lo técnico puede incorporar restricciones sociales, pero la elección de cuáles restricciones importan y cuánto peso tienen requiere salir de la racionalidad técnica pura.</div></div></div>

<table class="sum"><tr><th>Concepto</th><th>Definición</th><th>Autor/Ejemplo</th></tr>
<tr><td>Racionalidad técnica</td><td>Forma de razonar orientada a resolver problemas con máxima eficiencia dentro de restricciones dadas</td><td>Giuliano (programa UCA)</td></tr>
<tr><td>Racionalidad científica</td><td>Forma de razonar orientada a explicar por qué las cosas son como son; criterio de éxito: verdad/falsedad</td><td>Niiniluoto</td></tr>
<tr><td>Heurística</td><td>Reglas prácticas y atajos racionales que guían la búsqueda de soluciones cuando no hay óptimo calculable</td><td>Epistemología de la ingeniería</td></tr>
<tr><td>Estado del arte</td><td>Conjunto de materiales, procesos y conocimientos disponibles que delimitan el horizonte de lo técnicamente posible</td><td>Giuliano; caso Tacoma Narrows</td></tr>
<tr><td>Imperativo de eficiencia</td><td>Criterio central de evaluación en ingeniería: máximo resultado con mínimo recurso</td><td>Programa U1, UCA</td></tr>
</table>
</div>` },

  402: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Intro Ingeniería · U1</div>
<h1>Modelo de barrilete y restricciones</h1>
<p>La ingeniería no opera en el vacío. Todo diseño está tensado por fuerzas que tiran en distintas direcciones: eficiencia técnica, viabilidad económica, impacto ambiental, valores culturales. El modelo de barrilete es la herramienta conceptual para ver esa tensión sin simplificarla.</p></div>

<h2>El modelo: cuatro vértices en tensión</h2>
<p>El "modelo de barrilete" que usa Giuliano en la materia representa las tensiones que atraviesan cualquier decisión de diseño ingenieril. Imaginá un rombo —como un barrilete— cuyos cuatro vértices representan dimensiones que ningún diseño puede ignorar:</p>
<p><strong>Técnico:</strong> ¿funciona? ¿es estructuralmente viable? ¿cumple los requerimientos de desempeño?<br>
<strong>Económico:</strong> ¿es rentable? ¿tiene mercado? ¿quién lo financia y bajo qué lógica?<br>
<strong>Ambiental:</strong> ¿qué hace con los recursos naturales? ¿qué residuos genera? ¿es sostenible?<br>
<strong>Cultural/Social:</strong> ¿para quién? ¿con qué valores incorporados? ¿qué relaciones de poder habilita o bloquea?</p>
<div class="box">Ningún diseño óptimo en una dimensión es automáticamente óptimo en las demás. La ingeniería es la gestión de esas tensiones, no la eliminación de ellas.</div>

<h2>Las restricciones como núcleo del diseño</h2>
<p>En el lenguaje cotidiano, "restricción" suena a obstáculo. En ingeniería, las restricciones son el corazón del problema. Sin restricciones no hay problema de diseño: hay infinitas soluciones posibles y ninguna interesante. Las restricciones son las que definen el espacio dentro del cual el ingeniero tiene que encontrar algo bueno.</p>
<p>Hay restricciones de distintos órdenes. Algunas son duras: leyes físicas que no se negocian (la gravedad, la resistencia de materiales). Otras son blandas: normativas, presupuestos, plazos, que en principio son negociables. Y otras son invisibles: los valores y supuestos culturales que se incorporan al diseño sin que nadie los haya puesto explícitamente en el pliego de condiciones. Estas últimas son las más difíciles de ver y las que el modelo de barrilete busca hacer visibles.</p>

<h2>La ponderación de resultados no es neutral</h2>
<p>Giuliano señala algo que parece obvio pero que tiene consecuencias profundas: la forma en que un ingeniero pondera los distintos resultados de su diseño no es independiente de su concepción del mundo. ¿Cuánto vale la eficiencia económica frente al impacto ambiental? ¿Cuánto vale la automatización frente al empleo? Esas ponderaciones no son técnicas: son valorativas, y reflejan concepciones antropológicas e ideológicas sobre la naturaleza, la sociedad y el lugar del ser humano.</p>
<p>Esto no significa que la ingeniería sea "solo" política. Significa que tiene una dimensión política que no puede ignorarse sin que el ingeniero se vuelva ciego a parte de lo que está haciendo.</p>

<h2>Del barrilete al diseño contextualizado</h2>
<p>La utilidad práctica del modelo es que obliga a nombrar explícitamente cada vértice antes de diseñar. ¿Cuál es la restricción técnica concreta? ¿Cuál es la restricción económica? ¿Qué impacto ambiental es aceptable y por qué? ¿Qué grupos sociales se ven afectados y cómo? Un diseño que no pasa por ese tamiz puede ser técnicamente brillante y socialmente desastroso —como veremos con Winner en la U3.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Por qué las restricciones son el núcleo del diseño y no un obstáculo a evitar?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp402a','','Incorrecto. Las restricciones no anulan la creatividad: la focalizan. El diseño creativo consiste precisamente en encontrar soluciones ingeniosas dentro de restricciones reales, no en ignorarlas.')">Porque hay que aprender a evitarlas para tener soluciones más creativas</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp402a','Correcto. Sin restricciones, cualquier cosa es solución y ninguna es interesante. Son las restricciones las que definen el espacio del problema, hacen que algunas soluciones sean mejores que otras, y dan sentido a la búsqueda de lo óptimo.','')">Porque son las que definen el espacio del problema y hacen que algunas soluciones sean mejores que otras</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp402a','','Incorrecto. Las restricciones físicas (leyes de la naturaleza) son las más rígidas, pero no son las únicas importantes. Las restricciones económicas, normativas y culturales también delimitan el espacio de diseño y a veces son más determinantes en el resultado final.')">Porque solo las restricciones físicas son relevantes; las demás se pueden ignorar</button>
<div class="cp-fb" id="cp402a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — Según el modelo de barrilete, ¿qué implica que la ponderación de resultados "no es ajena a las concepciones antropológicas e ideológicas"?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp402b','','Incorrecto. Que el ingeniero tenga valores no es el punto central aquí. El punto es que esos valores se expresan concretamente en cómo se ponderan los resultados del diseño, lo cual tiene efectos reales sobre el artefacto producido.')">Que cada ingeniero tiene valores personales que inevitablemente distorsionan su trabajo técnico</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp402b','','Incorrecto. El modelo no dice que la ingeniería sea solo política. Dice que tiene una dimensión política que coexiste con la dimensión técnica. Negar esa dimensión no la elimina: la vuelve invisible.')">Que la ingeniería es en realidad política y no técnica</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp402b','Correcto. La elección de cuánto peso darle a la eficiencia económica versus el impacto ambiental, o a la automatización versus el empleo, no surge de cálculos técnicos: surge de concepciones sobre qué vale más. Esas concepciones se encarnan en el diseño y producen efectos reales en el mundo.','')">Que la forma de ponderar los distintos resultados técnicos refleja valores sobre la naturaleza y la sociedad, y eso se traduce en el diseño concreto</button>
<div class="cp-fb" id="cp402b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Aplicá el modelo de barrilete a un caso concreto y cotidiano: el diseño de una bicicleta compartida (tipo EcoBici o sistemas similares). Identificá al menos una restricción relevante en cada uno de los cuatro vértices del modelo.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Técnico: la bicicleta debe soportar distintos pesos corporales, resistir uso intensivo, ser fácilmente reparable con herramientas estándar, y sus componentes deben ser modulares para el mantenimiento en escala. Económico: el sistema debe ser rentable (o al menos sostenible) considerando el costo de las estaciones, el mantenimiento de la flota, los costos de reposición por robo o vandalismo, y la estructura tarifaria accesible. Ambiental: materiales utilizados (acero vs. aluminio), vida útil del producto, reciclabilidad al final de la vida, y huella de carbono del sistema de redistribución de bicicletas entre estaciones. Cultural/Social: ¿dónde se instalan las estaciones? (decisión política con impacto en equidad de acceso), ¿quiénes usan el sistema? (género, edad, NSE), ¿qué normas culturales sobre la bicicleta existen en esa ciudad?, ¿hay infraestructura vial que haga seguro el uso? Notá que el vértice cultural muchas veces termina siendo el determinante real del éxito o fracaso del sistema.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Analizá la siguiente situación: una empresa contrata a un ingeniero para diseñar una planta industrial que sea lo más eficiente posible en términos de costo de producción. El ingeniero detecta que la solución óptima para ese objetivo implica instalar la planta en una zona con menor regulación ambiental. ¿Qué conflicto entre vértices del barrilete aparece? ¿Qué decisiones implícitas se están tomando y quién las toma?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">El conflicto central es entre el vértice económico (maximizar eficiencia de costo) y el vértice ambiental (impacto ecológico de instalar en una zona con menor regulación, que suele implicar más permisividad con efluentes, emisiones, etc.). Pero hay más: también está el vértice cultural/social, porque las poblaciones locales de zonas con menor regulación ambiental suelen ser comunidades con menos poder político para resistir ese tipo de instalaciones —lo que se llama "racismo ambiental" o simplemente asimetría de poder territorial. Las decisiones implícitas son: (1) que el costo de producción vale más que el impacto ambiental diferencial; (2) que la menor regulación es una "ventaja" legítima a aprovechar; (3) que las comunidades locales afectadas no tienen suficiente voz en el diseño. Estas no son decisiones técnicas: son valorativas. El problema es que el encuadre original —"diseñá lo más eficiente en costo"— las hace invisibles. El modelo de barrilete sirve exactamente para hacer visibles esas decisiones y obligar a nombrar quién las toma y bajo qué criterios.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">El ingeniero Giuliano plantea que la ingeniería "pierde su inocencia" cuando se reconoce que el desarrollo tecnológico no es unilineal sino que puede ramificarse en distintas direcciones, y que esa ramificación involucra "alternativas de civilización". Tomá una tecnología de tu elección (puede ser una red social, un sistema de transporte, una tecnología energética, etc.) y analizá: ¿En qué punto de su desarrollo se tomaron decisiones de diseño que no eran técnicamente obligatorias pero que cerraron o abrieron ciertas posibilidades sociales? ¿Podría haber sido diferente?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Tomaremos como ejemplo el automóvil privado como tecnología de transporte dominante en el siglo XX. No era la única opción técnicamente viable: los tranvías eléctricos urbanos eran eficientes, ya existían y fueron activamente desmantelados en ciudades de EEUU (en parte por lobbying de General Motors, Firestone y Standard Oil en el caso "United States vs. National City Lines"). La decisión de priorizar el auto privado no era técnicamente obligatoria: era una elección que cerró ciertas posibilidades (ciudades densas, transporte público eficiente, urbanismo no centrado en el auto) y abrió otras (industria automotriz masiva, suburbanización, dependencia del petróleo). Las consecuencias son civilizatorias en el sentido de Giuliano: determinaron cómo vivimos, dónde vivimos, cuánto tiempo pasamos en tráfico, qué nivel de emisiones producimos. ¿Podría haber sido diferente? Sí. Japón y gran parte de Europa tomaron decisiones distintas y tienen sistemas de transporte radicalmente diferentes. El punto no es que una opción sea "mejor" en abstracto, sino que la elección no fue neutral ni inevitable. Esto es lo que Giuliano llama "jerarquía entramada": las decisiones técnicas alojan decisiones culturales que se vuelven invisibles con el tiempo.</div></div></div>

<table class="sum"><tr><th>Concepto</th><th>Definición</th><th>Autor/Ejemplo</th></tr>
<tr><td>Modelo de barrilete</td><td>Representación de las tensiones entre cuatro dimensiones del diseño: técnica, económica, ambiental y cultural/social</td><td>Giuliano (UCA)</td></tr>
<tr><td>Restricción dura</td><td>Limitación no negociable impuesta por leyes físicas o condiciones absolutas</td><td>Leyes de la termodinámica, resistencia de materiales</td></tr>
<tr><td>Restricción blanda</td><td>Limitación que en principio puede modificarse: normas, presupuestos, plazos</td><td>Normativas de construcción</td></tr>
<tr><td>Restricción invisible</td><td>Valores y supuestos culturales incorporados al diseño sin nombrarse explícitamente</td><td>Winner; ejemplo autos privados vs. transporte público</td></tr>
<tr><td>Ponderación valorativa</td><td>La elección de cuánto peso asignar a cada dimensión del barrilete, que no es técnica sino ideológica y antropológica</td><td>Giuliano (Cierre)</td></tr>
</table>
</div>` },

  403: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Intro Ingeniería · U2</div>
<h1>Metodología del diseño: modelo de cinco etapas</h1>
<p>El diseño en ingeniería no es ni inspiración repentina ni aplicación mecánica de fórmulas. Es un proceso con estructura, pero esa estructura no es rígida ni lineal. Entender el modelo de cinco etapas es entender que el diseño es contingente: las decisiones importan y podrían haber sido otras.</p></div>

<h2>El principio de indeterminación forma-función</h2>
<p>Antes de ver las etapas, hay que entender el principio que les da sentido: <strong>una misma función puede realizarse con distintas formas</strong>. Un cuchillo puede ser de acero inoxidable, cerámica o piedra tallada. Un sistema de comunicación puede usar cables de cobre, fibra óptica o radio. Una ciudad puede organizarse en torno al auto privado o al transporte público.</p>
<p>Este principio —la indeterminación de la relación entre forma y función— implica que cuando un ingeniero elige una forma concreta para realizar una función, esa elección no es técnicamente obligatoria. Hay otras formas posibles. Esa elección encarna valores, preferencias, intereses de ciertos grupos, restricciones de mercado. No es neutral.</p>
<div class="box">La forma no se deduce de la función. Entre función y forma hay un espacio de decisión donde intervienen factores técnicos, económicos, culturales y políticos.</div>

<h2>Las cinco etapas del diseño</h2>
<p>El modelo de cinco etapas describe el proceso típico de diseño en ingeniería:</p>
<p><strong>1. Identificación del problema:</strong> No todo problema existe por sí solo. Los problemas se identifican porque hay grupos sociales que los reconocen como tales. No existen problemas "objetivos" flotando en el éter: existen situaciones que alguien considera problemática y que tiene la capacidad de poner en agenda. ¿Quién define qué es un problema a resolver?</p>
<p><strong>2. Definición de requerimientos:</strong> Una vez identificado el problema, se especifican los requerimientos: qué debe hacer la solución, bajo qué condiciones, con qué limitaciones. Esta etapa es crucial porque es donde las restricciones invisibles del modelo de barrilete se vuelven explícitas (o se quedan invisibles).</p>
<p><strong>3. Generación de alternativas:</strong> Se generan múltiples soluciones posibles. La calidad de esta etapa depende del horizonte técnico disponible (estado del arte) y de la capacidad heurística del equipo.</p>
<p><strong>4. Evaluación y selección:</strong> Se evalúan las alternativas según los criterios definidos en los requerimientos y se selecciona la mejor. Aquí es donde la ponderación de los vértices del barrilete se vuelve concreta.</p>
<p><strong>5. Implementación y refinamiento:</strong> Se lleva la solución seleccionada a la práctica y se refina en función de la retroalimentación. En la práctica, este proceso es iterativo: los problemas encontrados en la implementación frecuentemente obligan a regresar a etapas anteriores.</p>

<h2>Flexibilidad interpretativa: el diseño no termina con el diseñador</h2>
<p>Un concepto clave que emerge del estudio constructivista del diseño es la <em>flexibilidad interpretativa</em>: los artefactos no tienen un único significado fijo. Distintos grupos sociales pueden interpretar el mismo artefacto de maneras muy diferentes, asignarle distintas funciones, y usarlo de maneras que el diseñador nunca previó.</p>
<p>El ejemplo clásico es la bicicleta: lo que era un deporte de aventura para jóvenes atrevidos en los años 1870 se convirtió en un símbolo de emancipación femenina cuando las mujeres lo adoptaron masivamente. El diseño original no determinó ese uso. La flexibilidad interpretativa es lo que permite que un artefacto "se resignifique" socialmente.</p>
<p>Sin embargo, como señala Giuliano en el Cierre, esta flexibilidad tiene límites: el primer diseño que llega al mercado tiende a estabilizarse, y una vez que lo hace, es muy difícil resignificarlo radicalmente. El diseñador tiene una responsabilidad especial en esa primera instancia.</p>

<h2>Estilo y significado: el diseño como lenguaje</h2>
<p>Los objetos técnicos no son solo herramientas: también son portadores de significado social y cultural. El "estilo" de un diseño —su forma estética, sus materiales, su modo de interacción— comunica valores y posicionamientos. Un teléfono de gama alta no solo hace llamadas mejor: también dice algo sobre quien lo usa. Ese significado no es un subproducto accidental del diseño: muchas veces es la razón central de compra.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué implica el principio de indeterminación de la relación forma-función para el diseñador?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp403a','','Incorrecto. El principio dice precisamente lo contrario: hay múltiples formas posibles para una misma función. Lo que implica que la elección de una forma en particular no es técnicamente obligatoria.')">Que la función determina la forma: dado lo que debe hacer un objeto, su forma queda técnicamente determinada</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp403a','Correcto. Si una función puede realizarse con distintas formas, entonces la elección de una forma concreta no es técnicamente obligatoria. Eso implica que en esa elección intervienen factores no técnicos: valores, intereses, poder de ciertos grupos. El diseñador toma decisiones que van más allá de la optimización técnica.','')">Que entre función y forma hay un espacio de decisión donde intervienen factores más allá de lo técnico</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp403a','','Incorrecto. La creatividad es importante, pero el principio no es sobre creatividad sino sobre la relación entre forma y función. Lo que implica es que esa relación no es unívoca, y por lo tanto las elecciones de diseño no son técnicamente neutras.')">Que el diseñador tiene libertad creativa absoluta para elegir cualquier forma</button>
<div class="cp-fb" id="cp403a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Por qué la identificación del problema es una etapa políticamente relevante del diseño?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp403b','Correcto. Los problemas no existen como hechos objetivos: se construyen socialmente. Son "problemas" aquello que ciertos grupos con poder reconocen como tal y logran poner en agenda. Quien define el problema está definiendo implícitamente para quién se diseña y qué intereses se priorizan.','')">Porque los problemas no existen solos: son reconocidos como tales por ciertos grupos sociales con capacidad de ponerlos en agenda</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp403b','','Incorrecto. La identificación del problema no es solo técnica. Hay muchas situaciones técnicamente problemáticas que nunca se convierten en problemas de diseño porque ningún grupo con poder las reconoce como prioritarias.')">Porque hay que hacer un diagnóstico técnico preciso antes de empezar a diseñar</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp403b','','Incorrecto. El cliente define los requerimientos en la segunda etapa, pero la identificación del problema es previa: ¿qué situación merece ser resuelta técnicamente? Eso no lo decide automáticamente el cliente.')">Porque el cliente siempre tiene razón sobre cuál es el problema a resolver</button>
<div class="cp-fb" id="cp403b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Tomá el caso del diseño de una aplicación de delivery de comida. Identificá cómo se manifiesta la flexibilidad interpretativa: ¿qué usos distintos le dan diseñadores, usuarios que piden comida, y repartidores? ¿Coinciden en la función del artefacto?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">La flexibilidad interpretativa aparece con claridad en este caso. Para los diseñadores y la empresa, la app es una plataforma de intermediación que monetiza transacciones y recolecta datos de comportamiento del usuario. Para los usuarios que piden comida, es una herramienta de conveniencia que amplía el acceso a opciones gastronómicas desde el hogar. Para los repartidores, es un sistema de control laboral que decide qué trabajos se les asignan, a qué precio, con qué algoritmo —y que muchos perciben como un mecanismo de precarización. El mismo artefacto técnico tiene tres "funciones" radicalmente distintas según el grupo social que lo usa. Ninguna de estas interpretaciones estaba "escrita" en el código de la app, aunque el diseño sí tiene características que favorecen unas interpretaciones sobre otras (por ejemplo, la opacidad del algoritmo de asignación de pedidos favorece la interpretación de los diseñadores y dificulta la negociación colectiva de los repartidores). Esto ilustra que la flexibilidad interpretativa no es absoluta: el diseño acota el espacio de interpretaciones posibles.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Analizá el proceso de diseño del sistema SUBE (o cualquier sistema de pago de transporte público que conozcas) usando el modelo de cinco etapas. ¿En qué etapa del proceso se tomaron las decisiones más importantes? ¿Qué quedó fuera de los requerimientos y por qué?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">El análisis del SUBE permite ver cómo las etapas no son neutrales. En la identificación del problema: el problema se definió como "mejorar la eficiencia del cobro del transporte y reducir el fraude". Notá lo que quedó afuera: la accesibilidad para personas sin cuenta bancaria o sin smartphone no fue parte del problema original. En los requerimientos: se priorizó la eficiencia operativa del sistema (velocidad de validación, interoperabilidad entre líneas) y el control de subsidios. Se especificó el uso de tarjeta física, lo cual resultó problemático para personas mayores o para quienes no podían adquirir la tarjeta. En la generación de alternativas: se eligió el modelo de tarjeta prepaga centralizada en lugar de opciones más distribuidas (como QR generados en cualquier local, o integración con billeteras digitales desde el inicio). En la evaluación: primaron criterios de control administrativo y reducción de fraude sobre criterios de inclusión social. Lo que quedó fuera de los requerimientos —acceso para personas sin bancarización, recarga disponible las 24h, funcionamiento en zonas sin conectividad— no fue un olvido técnico. Fue una decisión implícita de qué poblaciones importan más en el diseño del sistema.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">El Cierre de Giuliano señala que "el primer diseño que alcanza la calle limita en gran medida las posibilidades de que actúe la flexibilidad interpretativa". Analizá críticamente esta afirmación a la luz del caso de las redes sociales: ¿en qué medida el diseño original de plataformas como Twitter o Facebook determinó sus consecuencias políticas actuales? ¿Son esas consecuencias revertibles cambiando el diseño?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">La afirmación de Giuliano se verifica con fuerza en el caso de las redes sociales. Algunas decisiones de diseño originales que parecían menores tuvieron consecuencias políticas enormes: (1) El límite de 140 caracteres en Twitter no era técnicamente necesario (venía de restricciones de SMS que ya no existían), pero moldeó un formato de comunicación que favorece la simplificación, la reacción emocional y la viralización sobre la argumentación extensa. (2) El botón "retweet" fue una adición posterior, pero al hacerlo de un clic multiplicó la velocidad de propagación de contenido sin fricción de verificación. (3) El algoritmo de Facebook que priorizó el "engagement" sobre la veracidad fue una decisión de optimización técnica con consecuencias políticas directas: el contenido más polarizante genera más interacción. Estas decisiones se estabilizaron rápidamente (en el sentido de Giuliano) porque generaron redes de usuarios, hábitos, datos acumulados y modelos de negocio que son enormemente difíciles de cambiar. ¿Son revertibles? Parcialmente. Twitter/X experimentó con notas contextuales (fact-checking por comunidad) y con cambios en el algoritmo, pero cada cambio enfrenta resistencia porque ya hay expectativas instaladas y grupos beneficiados por el diseño vigente. Esto confirma la tesis de Giuliano: el primer diseño no determina absolutamente el futuro, pero sí crea inercias poderosas que operan como las restricciones invisibles del modelo de barrilete.</div></div></div>

<table class="sum"><tr><th>Concepto</th><th>Definición</th><th>Autor/Ejemplo</th></tr>
<tr><td>Principio de indeterminación forma-función</td><td>Una misma función puede realizarse con distintas formas; la elección de forma no está técnicamente determinada</td><td>Programa U2, UCA</td></tr>
<tr><td>Modelo de cinco etapas</td><td>Proceso de diseño: identificación del problema → requerimientos → alternativas → evaluación → implementación</td><td>Giuliano (metodología del diseño)</td></tr>
<tr><td>Flexibilidad interpretativa</td><td>Capacidad de distintos grupos sociales de asignar distintos significados y usos a un mismo artefacto</td><td>Constructivismo (SCOT); Pinch y Bijker</td></tr>
<tr><td>Estabilización</td><td>Proceso por el cual un artefacto adquiere un significado dominante y la flexibilidad interpretativa se reduce</td><td>Giuliano (Cierre); caso redes sociales</td></tr>
<tr><td>Estilo y significado</td><td>Los artefactos no solo cumplen funciones técnicas: también transmiten valores y posicionamientos culturales</td><td>Programa U2, UCA</td></tr>
</table>
</div>` },


  404: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Intro Ingeniería · U2</div>
<h1>Constructivismo y grupos sociales relevantes</h1>
<p>¿Quién decide cómo es una tecnología? La respuesta del sentido común dice: los ingenieros. La respuesta constructivista dice: los grupos sociales que interactúan con ella. Entender esta perspectiva cambia completamente cómo pensás el diseño y su relación con la sociedad.</p></div>

<h2>El giro constructivista en los estudios de tecnología</h2>
<p>A partir de los años 80, un conjunto de sociólogos e historiadores de la tecnología —especialmente Trevor Pinch y Wiebe Bijker, con su propuesta SCOT (<em>Social Construction of Technology</em>)— desarrollaron una mirada distinta sobre cómo se hacen las tecnologías. La idea central: las características técnicas de un artefacto no son el resultado de una necesidad técnica objetiva, sino el producto de negociaciones entre grupos sociales con intereses distintos.</p>
<p>Esto no significa que la física no exista o que cualquier diseño sea igualmente posible. Significa que, dentro del espacio de lo técnicamente viable, <em>qué se construye y cómo</em> depende de qué grupos sociales logran imponer sus definiciones del problema y del éxito.</p>
<div class="box">Los problemas técnicos no existen en abstracto: solo adquieren relevancia cuando hay algún grupo social que los reconoce como tales. No hay problemas sin grupos que los problematicen.</div>

<h2>Grupos sociales relevantes</h2>
<p>Un "grupo social relevante" es cualquier conjunto de personas que comparte una interpretación particular sobre un artefacto o tecnología. Puede ser un grupo de usuarios, de diseñadores, de reguladores, de afectados, de opositores. Lo que los hace "relevantes" para el análisis constructivista es que tienen capacidad de influir en el proceso de diseño o estabilización de la tecnología.</p>
<p>El ejemplo clásico de Pinch y Bijker es la bicicleta. En los años 1870, distintos grupos veían el artefacto de maneras radicalmente distintas: los jóvenes atrevidos veían una máquina de velocidad; las mujeres, un instrumento de movilidad e independencia; los ciclistas de competencia, un vehículo de carreras; los fabricantes, un producto a optimizar. Cada grupo tenía un "problema" distinto que la bicicleta debía resolver, y la forma del artefacto respondió a la negociación entre esas interpretaciones.</p>

<h2>Flexibilidad interpretativa y cierre</h2>
<p>La flexibilidad interpretativa (vista en la clase anterior) es máxima en las etapas tempranas de desarrollo de una tecnología. A medida que el tiempo pasa y los grupos negocian, esa flexibilidad se reduce: el artefacto se "cierra" en torno a una forma dominante. Ese proceso de cierre puede ocurrir por distintos mecanismos:</p>
<p><strong>Cierre retórico:</strong> se declara que el problema está resuelto, aunque técnicamente podría no estarlo. <strong>Redefinición del problema:</strong> el problema original se redefine de tal modo que la solución disponible encaja. <strong>Poder social:</strong> el grupo con más poder impone su definición sin que los demás lo consientan explícitamente.</p>

<h2>El constructivismo y la responsabilidad del ingeniero</h2>
<p>La perspectiva constructivista tiene una consecuencia directa para la formación en ingeniería: si los artefactos son construidos socialmente, entonces los ingenieros son actores en ese proceso de construcción, no meros ejecutores de necesidades técnicas objetivas. Tienen poder de decisión en etapas tempranas del diseño, cuando la flexibilidad interpretativa es máxima, y ese poder tiene consecuencias que se extienden mucho más allá de la sala de diseño.</p>
<p>Como señala Giuliano en el Cierre, "el ingeniero ocupa un lugar privilegiado en el hacer tecnológico" precisamente porque el primer diseño que llega a la calle limita en gran medida las resignificaciones posteriores.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué afirma el constructivismo sobre la forma de los artefactos técnicos?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp404a','','Incorrecto. El constructivismo no niega las restricciones físicas. No dice que cualquier cosa sea posible. Dice que dentro del espacio de lo físicamente viable, qué se construye y cómo depende de negociaciones sociales.')">Que cualquier artefacto podría tener cualquier forma, porque la física no impone restricciones reales</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp404a','Correcto. El constructivismo no niega la física, pero afirma que dentro del espacio de lo técnicamente posible, la forma concreta que adopta un artefacto resulta de negociaciones entre grupos sociales con intereses distintos. No hay una única forma "técnicamente correcta".','')">Que dentro de lo físicamente posible, la forma concreta resulta de negociaciones entre grupos sociales con intereses distintos</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp404a','','Incorrecto. El constructivismo dice exactamente lo contrario: las necesidades técnicas no determinan la forma de los artefactos de manera unívoca. Hay siempre un espacio de opciones y la elección entre ellas involucra factores sociales.')">Que las necesidades técnicas objetivas determinan la forma de los artefactos, y los ingenieros solo las descubren</button>
<div class="cp-fb" id="cp404a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué es un "grupo social relevante" en el análisis constructivista del diseño?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp404b','','Incorrecto. Los ingenieros son un grupo relevante, pero no el único. El análisis constructivista incluye usuarios, afectados, reguladores, opositores. Limitarlo a los ingenieros reproduce exactamente la visión que el constructivismo cuestiona.')">El equipo de ingenieros que diseña el artefacto</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp404b','','Incorrecto. No es solo el cliente. El cliente puede definir requerimientos, pero hay grupos que son afectados por el artefacto sin haber contratado a nadie. El caso de los discapacitados en el análisis de Winner es un ejemplo.')">El cliente o empresa que encarga el diseño</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp404b','Correcto. Un grupo social relevante es cualquier conjunto de personas que comparte una interpretación del artefacto y tiene capacidad de influir en su diseño o estabilización. Puede ser un grupo de usuarios, diseñadores, reguladores, opositores o afectados. La relevancia no viene del poder formal sino de la capacidad de incidencia en el proceso.','')">Cualquier conjunto de personas que comparte una interpretación del artefacto y puede influir en su diseño o estabilización</button>
<div class="cp-fb" id="cp404b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Identificá al menos cuatro grupos sociales relevantes para el diseño de un sistema de inteligencia artificial de reconocimiento facial usado en cámaras de seguridad urbana. Para cada grupo, describí brevemente cuál es su interpretación del artefacto y qué "problema" esperan que resuelva.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Grupo 1 — Fuerzas de seguridad: interpretan el sistema como herramienta de identificación rápida de personas buscadas. El problema que debe resolver: reducir el tiempo de detección de personas con órdenes de arresto o investigadas. Éxito = precisión y velocidad. Grupo 2 — Gobierno municipal: interpreta el sistema como reducción del costo operativo de seguridad y mejora de imagen de "ciudad inteligente". Problema: gestionar seguridad urbana con presupuesto limitado. Grupo 3 — Organizaciones de derechos civiles: interpretan el sistema como herramienta de vigilancia masiva que vulnera la privacidad y puede usarse para controlar la protesta. Problema para ellos: cómo evitar que exista o limitarlo al máximo. Grupo 4 — Comunidades afro y migrantes: son grupos que tienen tasas de falsa identificación mucho más altas en estos sistemas (sesgo en los datos de entrenamiento). Interpretan el artefacto como una tecnología discriminatoria. Grupo 5 — Empresa desarrolladora: interpreta el sistema como producto a vender y escalar. Problema: lograr suficiente precisión para superar el umbral de viabilidad comercial. La forma concreta del sistema dependerá de qué grupo logre imponer su definición de "éxito". Si la fuerza de seguridad y la empresa dominan el proceso, el sistema se optimizará para velocidad de identificación. Si los derechos civiles logran incidir, puede exigirse auditoría, transparencia del algoritmo o requisitos de equidad entre grupos.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Compará la perspectiva constructivista con la perspectiva del "determinismo tecnológico". ¿En qué se parecen? ¿En qué difieren radicalmente? ¿Cuál te parece más útil para un ingeniero en formación y por qué?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">El determinismo tecnológico afirma que la tecnología sigue su propia lógica de desarrollo interna y que la sociedad debe adaptarse a ella. La dirección causal va de tecnología a sociedad. El determinismo social (que Winner llama "determinismo social de la tecnología") afirma lo opuesto: que las fuerzas sociales y económicas dan forma a las tecnologías. El constructivismo SCOT comparte con el determinismo social la idea de que los factores sociales importan, pero va más lejos: no solo dice que los factores sociales "influyen" en la tecnología sino que la constituyen. La tecnología es un producto social, no solo un reflejo de fuerzas sociales. Se parecen en que los tres reconocen que la relación tecnología-sociedad es importante. Difieren en la dirección causal y en el protagonismo que le asignan a los actores sociales en el proceso de diseño. Para un ingeniero en formación, el constructivismo es más útil porque: (1) hace visible su propio rol como actor social en el proceso de diseño, (2) señala que sus elecciones importan y tienen consecuencias sociales, (3) abre la pregunta de qué grupos están siendo incluidos o excluidos en la definición del problema. El determinismo tecnológico, en cambio, lleva a la pasividad: "la tecnología tiene su propia lógica, yo solo la implemento".</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Giuliano afirma que "los problemas solo adquieren relevancia en función de que exista algún grupo social que los reconozca como tales: no existen problemas aislados de un entorno de intereses". Analizá esta afirmación a la luz del caso del cambio climático: ¿es el cambio climático un "problema técnico" o un "problema social"? ¿Qué grupos lo reconocen como problema y qué implicancias tiene eso para las soluciones técnicas que se proponen?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">El caso del cambio climático ilustra perfectamente la tesis de Giuliano. El fenómeno físico (acumulación de CO₂, aumento de temperatura) existe independientemente de los grupos sociales. Pero el hecho de que sea un "problema a resolver técnicamente" —y qué tipo de solución se busca— es completamente dependiente de qué grupos lo problematizan y cómo. Distintos grupos que reconocen el cambio climático como problema lo definen de maneras muy diferentes: (1) La industria energética que acepta el cambio climático suele definirlo como un problema de eficiencia energética y emisiones, y la solución técnica preferida es la captura de carbono (que permite seguir quemando combustibles). (2) Los movimientos ambientalistas radicales lo definen como un problema sistémico del modelo productivo, y las soluciones técnicas parciales les parecen insuficientes. (3) Los países en desarrollo lo definen en términos de justicia: quien más emitió (países ricos) debe cargar más con el costo de la solución. (4) Los grupos indígenas en territorios afectados lo experimentan como destrucción de ecosistemas que sostienen sus economías y culturas. Las soluciones técnicas que se diseñan responden a la definición que imponga el grupo con más poder: actualmente, las soluciones dominantes (eficiencia energética, energías renovables, mercados de carbono) son las que encajan con la visión de los países ricos y las grandes corporaciones. No porque sean las "mejores técnicamente" sino porque son las que el grupo con más poder logró poner en la agenda. Esto no significa que esas soluciones sean malas: pueden ser eficaces. Pero significa que otras soluciones posibles (reducción del consumo, redistribución, cambios en modelos productivos) no entran en la agenda técnica dominante precisamente porque los grupos que las proponen tienen menos poder de incidencia.</div></div></div>

<table class="sum"><tr><th>Concepto</th><th>Definición</th><th>Autor/Ejemplo</th></tr>
<tr><td>SCOT</td><td>Social Construction of Technology: perspectiva que analiza cómo los grupos sociales dan forma a los artefactos técnicos</td><td>Pinch y Bijker (1984)</td></tr>
<tr><td>Grupo social relevante</td><td>Conjunto de personas que comparte una interpretación del artefacto y puede influir en su desarrollo o estabilización</td><td>Pinch y Bijker; caso bicicleta</td></tr>
<tr><td>Cierre</td><td>Proceso por el que la flexibilidad interpretativa se reduce y el artefacto adopta una forma dominante</td><td>SCOT; Giuliano (Cierre)</td></tr>
<tr><td>Determinismo tecnológico</td><td>Idea de que la tecnología sigue su propia lógica interna y la sociedad debe adaptarse; Winner lo critica explícitamente</td><td>Winner (posición rechazada)</td></tr>
<tr><td>Determinismo social</td><td>Idea de que las fuerzas sociales y económicas dan forma a la tecnología; Winner lo acepta parcialmente pero considera insuficiente</td><td>Winner; Giuliano</td></tr>
</table>
</div>` },

  405: { estimated_hours: 3, difficulty: 3, html: `<div class="cls">
<div class="hero"><div class="hero-label">Intro Ingeniería · U3</div>
<h1>Tecnología, cultura y normatividad</h1>
<p>¿Los artefactos son herramientas neutras que los humanos usan bien o mal? Winner dice que no: algunas tecnologías tienen cualidades políticas intrínsecas. Parselis agrega que podemos diseñar tecnologías que sean "honestas" con quienes las usan. Esta unidad es donde la ingeniería se vuelve irreversiblemente política.</p></div>

<h2>Winner: ¿Tienen política los artefactos?</h2>
<p>Langdon Winner parte de una pregunta provocadora: ¿puede una máquina, un puente, un sistema técnico, tener propiedades políticas? La respuesta del sentido común es no: los artefactos son neutros, lo que importa es quién los usa y cómo. Winner refuta esta posición con casos concretos.</p>
<p><strong>Los puentes de Robert Moses en Long Island.</strong> Moses, el gran arquitecto de obras públicas de Nueva York (años 20 a 70), diseñó los puentes sobre las autopistas de Long Island con apenas nueve pies de altura —demasiado bajos para que puedan pasar autobuses (que miden doce pies). El resultado: la gente negra y de bajos recursos, que usaba el transporte público, no podía acceder a las playas y parques de Long Island. Los blancos de clase media y alta, con automóvil privado, sí. El diseño técnico —la altura de un puente— fue el instrumento de una política de exclusión racial sin que ninguna ley lo dijera explícitamente.</p>
<p><strong>Las máquinas forjadoras de McCormick.</strong> Cyrus McCormick II instaló en 1885 máquinas neumáticas de forja de eficacia no probada y costo estimado de 500.000 dólares. El historiador Robert Ozanne muestra que esas máquinas no se compraron para mejorar la eficiencia —de hecho producían calidad inferior a mayor costo— sino para destruir el sindicato local de forjadores especializados. Tres años después se las descartó. La innovación tecnológica no respondió a la lógica de eficiencia: respondió a la lógica del control del trabajo.</p>
<div class="box">Winner: "Los artefactos técnicos pueden encarnar ciertas formas de poder y autoridad específicas." No es solo que se usen para el poder: algunos están diseñados para ejercerlo.</div>

<h2>Dos tipos de política en los artefactos</h2>
<p>Winner distingue dos formas en que los artefactos pueden tener propiedades políticas:</p>
<p><strong>Tipo 1 — Planes técnicos como formas de orden:</strong> Son casos donde el diseñador tiene una intención política que se materializa en el diseño. Los puentes de Moses son el ejemplo canónico. Aquí el artefacto es el medio de una política, y esa política está incorporada en su forma física. No necesita legislación: el cemento hace la ley.</p>
<p><strong>Tipo 2 — Tecnologías inherentemente políticas:</strong> Son tecnologías que, independientemente de la intención de quien las diseñó, parecen requerir o ser "fuertemente compatibles" con ciertos tipos de relaciones sociales. El ejemplo de Winner es la energía nuclear: su funcionamiento seguro requiere enormes medidas de control, vigilancia y centralización del poder que son incompatibles con formas descentralizadas o democráticas de gestión. Otro ejemplo: la infraestructura para discapacitados (rampas, ascensores accesibles) que no es una preferencia política arbitraria sino una condición de posibilidad para la participación social plena.</p>

<h2>La analogía con los decretos legislativos</h2>
<p>Winner establece una analogía que es uno de los argumentos más poderosos del texto: los artefactos son como leyes. Una ley que prohíbe que los autobuses pasen por cierto área produce los mismos efectos que un puente demasiado bajo para autobuses. Pero la ley es visible, debatible, derogable. El puente no: está ahí, en el paisaje, y nadie lo cuestiona políticamente porque es "solo" infraestructura. Esta invisibilización es lo que hace a los artefactos más eficaces que las leyes para instaurar ciertos órdenes políticos.</p>

<h2>Parselis: tecnologías entrañables</h2>
<p>Martín Parselis, en el capítulo 7 de <em>Dar sentido a la técnica</em>, desarrolla el concepto de "tecnologías entrañables" como respuesta propositiva a la crítica de Winner. Si los artefactos pueden encarnar relaciones de poder y opacidad, también pueden diseñarse para encarnar transparencia, autonomía y cuidado.</p>
<p>Parselis identifica cuatro modos de "extrañamiento" que experimentamos frente a las tecnologías: la dificultad de comprenderlas (opacidad técnica), la alienación respecto a sus mecanismos de producción, la imposibilidad de modificarlas o repararlas, y la exclusión de la gestión de los bienes comunes que involucran. Las tecnologías entrañables son aquellas que minimizan estos extrañamientos.</p>
<p>Los criterios de las tecnologías entrañables se organizan en cuatro categorías: <strong>Autonomía</strong> (¿el usuario puede entender y controlar la tecnología?), <strong>Cuidado</strong> (¿la tecnología es sostenible y limitada en sus impactos?), <strong>Consenso</strong> (¿fue diseñada con participación de quienes la usan?), <strong>Responsabilidad</strong> (¿rinde cuentas de sus efectos sociales?).</p>

<h2>La "democracia se para en las puertas de la fábrica"</h2>
<p>Winner termina su análisis con una observación sobre el poder político de las tecnologías de gran escala: los sistemas tecnológicos sofisticados tienden a ser "fuertemente compatibles" con formas jerárquicas y centralizadas de gestión. Y la lógica de la "necesidad práctica" —hay que mantener el sistema funcionando, no hay tiempo para deliberaciones democráticas— eclipsa sistemáticamente otros tipos de razonamiento moral. La eficiencia técnica se convierte en argumento para suspender la deliberación democrática.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Cuál es la diferencia entre los dos tipos de política en los artefactos que distingue Winner?</div>
<button class="cp-btn" onclick="cpAns(this,true,'cp405a','Correcto. El Tipo 1 involucra intención: alguien diseña el artefacto para producir un efecto político concreto (Moses y sus puentes). El Tipo 2 es estructural: independientemente de la intención, ciertas tecnologías solo funcionan bien bajo ciertos arreglos de poder (la nuclear requiere control centralizado). La distinción es importante porque el Tipo 2 es más difícil de combatir: no hay un villano con mala intención, hay una estructura.','')">El Tipo 1 involucra intención deliberada del diseñador; el Tipo 2 es una compatibilidad estructural entre la tecnología y ciertos arreglos de poder, independientemente de la intención</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp405a','','Incorrecto. Winner claramente dice que los artefactos del Tipo 2 —los inherentemente políticos— no requieren intención maliciosa del diseñador. Sus propiedades políticas emergen de su naturaleza técnica, no de quién los diseñó.')">El Tipo 1 es bueno y el Tipo 2 es malo: el primero usa la tecnología para el bien común, el segundo para la opresión</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp405a','','Incorrecto. La distinción no es sobre quién usa la tecnología sino sobre cómo la tecnología incorpora (o no) propiedades políticas en su propia forma. El Tipo 1 es sobre diseño intencional; el Tipo 2 es sobre compatibilidad estructural.')">El Tipo 1 es tecnología usada por el Estado y el Tipo 2 es usada por corporaciones privadas</button>
<div class="cp-fb" id="cp405a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — Para Parselis, ¿qué hace "entrañable" a una tecnología?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp405b','','Incorrecto. El precio bajo puede ayudar al acceso pero no es el criterio de Parselis. Una tecnología barata puede seguir siendo opaca, no reparable y excluyente de la gestión de los bienes comunes que involucra.')">Que sea económicamente accesible para el mayor número de personas</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp405b','','Incorrecto. La innovación no es el criterio. Parselis habla de reducir los modos de extrañamiento que experimentamos frente a las tecnologías: la opacidad, la imposibilidad de repararlas, la exclusión de su gestión.')">Que sea innovadora y resuelva problemas que nadie había resuelto antes</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp405b','Correcto. Para Parselis, una tecnología es entrañable cuando minimiza los modos de extrañamiento: permite que el usuario la comprenda (autonomía), es sostenible (cuidado), fue diseñada con participación de quienes la usan (consenso) y rinde cuentas de sus efectos (responsabilidad). Es una tecnología que no opaca las relaciones que habilita.','')">Que minimiza los modos de extrañamiento: permite comprenderla, participar en su diseño, repararla y gestionar los bienes comunes que involucra</button>
<div class="cp-fb" id="cp405b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Winner establece una analogía entre artefactos técnicos y decretos legislativos. Explicá esta analogía con tus palabras y usá un ejemplo actual (no los del texto) para ilustrarla.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">La analogía de Winner dice que los artefactos producen los mismos efectos sociales que las leyes, pero sin la visibilidad ni la derogabilidad de estas. Una ley que prohíbe el acceso a cierto espacio es pública, debatible y puede ser modificada. Un diseño que hace imposible ese acceso sin prohibirlo explícitamente es invisible, se naturaliza como "paisaje" y es mucho más difícil de cuestionar. Ejemplo actual: los algoritmos de plataformas de empleo. Una ley que dijera "no contratar a personas mayores de 50 años" sería ilegal y atacable judicialmente. Un algoritmo de selección que sistemáticamente filtre esos perfiles produce el mismo efecto pero es opaco, técnico y difícil de cuestionar legalmente. Los sesgos del algoritmo se presentan como resultado "objetivo" del proceso técnico, no como decisión política. Es exactamente la lógica de los puentes de Moses: el cemento (o el código) hace la ley sin necesidad de legislar.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Analizá la tecnología de energía solar distribuida desde la perspectiva de Winner: ¿es un ejemplo de tecnología "inherentemente política"? ¿Qué tipo de relaciones sociales parece "fuertemente compatible" con ella, según Winner? Comparala con la energía nuclear.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Winner usa la energía solar como ejemplo de tecnología que podría ser democrática y descentralizadora. Los paneles solares pueden instalarse en techos individuales, generar energía localmente, y operar sin necesidad de una infraestructura centralizada masiva. Esta característica técnica es "fuertemente compatible" con formas descentralizadas de organización energética: comunidades que generan su propia energía, cooperativas, microrredes. En contraste, la energía nuclear requiere: plantas enormes con economías de escala (no puede hacerse en escala pequeña), medidas de seguridad extensivas con fuerte presencia del Estado, control estricto del combustible (plutonio) con vigilancia de trabajadores y ciudadanos, y gestión centralizada a largo plazo de los residuos radiactivos. Estas características técnicas son "fuertemente compatibles" con formas autoritarias y centralizadas de gestión. Winner es cuidadoso en decir que la compatibilidad no es determinismo: podría haber un sistema de energía solar concentrado en manos de pocas corporaciones. Pero la escala técnica de cada opción hace ciertas formas sociales más "naturales" que otras. Para Winner, los defensores de la energía nuclear que creen que sus efectos sociales son controlables solo con cambios de diseño tienen una "fe ciega y peligrosa" porque ignoran las implicancias estructurales de esa escala.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Tanto Winner como Parselis cuestionan la idea de la tecnología como herramienta neutra. Pero sus propuestas son distintas: Winner hace una crítica de los artefactos existentes, mientras que Parselis propone criterios para diseñar artefactos mejores. ¿Son estas perspectivas compatibles? ¿Puede un ingeniero aplicar los criterios de Parselis sin que eso cambie las relaciones de poder que Winner analiza? Argumentá con un caso concreto de tu elección.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Las perspectivas son compatibles pero señalan distintos planos del problema. Winner hace un análisis estructural: ciertas tecnologías (especialmente las de gran escala) tienen propiedades políticas que no pueden cambiarse solo con buenas intenciones de diseño. Los criterios de Parselis operan mejor en tecnologías del Tipo 1 de Winner —aquellas donde la política está en el diseño intencional— que en las del Tipo 2 —las inherentemente políticas por su escala. Caso concreto: aplicar los criterios de Parselis al diseño de una app de transporte urbano (tipo Waze o Google Maps). Autonomía: ¿puede el usuario modificar los parámetros de la ruta según sus propios criterios (evitar avenidas peligrosas, preferir rutas con arbolado)? En general no: el algoritmo es opaco. Cuidado: ¿la app distribuye el tráfico de manera sostenible o descarga vehículos en barrios residenciales? En general lo segundo, porque el criterio es tiempo del conductor individual, no impacto en comunidades. Consenso: ¿las comunidades por donde Waze dirige el tráfico participaron en el diseño? No. Responsabilidad: ¿la empresa rinde cuentas de los impactos en barrios? No sistemáticamente. Una versión "entrañable" de una app de rutas podría incorporar estos criterios. Y eso sí cambiaría relaciones de poder: empoderaría a los usuarios y comunidades frente al algoritmo corporativo. Pero: si la plataforma tiene un modelo de negocio basado en datos y publicidad, los criterios de Parselis chocan con la lógica del negocio. Aquí aparece el límite: sin cambiar quién es propietario de la plataforma y qué incentivos tiene, los criterios de diseño solos no alcanzan. Parselis dice que el ingeniero puede hacer mucho; Winner dice que sin cambiar la estructura de poder, lo que puede hacer el ingeniero es limitado.</div></div></div>

<table class="sum"><tr><th>Concepto</th><th>Definición</th><th>Autor/Ejemplo</th></tr>
<tr><td>Política de los artefactos (Tipo 1)</td><td>Diseño intencional de un artefacto para producir efectos políticos concretos</td><td>Winner; puentes de Moses, máquinas McCormick</td></tr>
<tr><td>Tecnologías inherentemente políticas (Tipo 2)</td><td>Tecnologías que por su escala o naturaleza son compatibles con ciertos arreglos de poder, independientemente de la intención</td><td>Winner; energía nuclear</td></tr>
<tr><td>Artefactos como leyes</td><td>Los diseños técnicos producen efectos jurídico-políticos sin necesidad de legislación explícita, y con mayor invisibilidad</td><td>Winner; caso algoritmos discriminatorios</td></tr>
<tr><td>Tecnologías entrañables</td><td>Tecnologías diseñadas para minimizar el extrañamiento: comprensibles, reparables, participativas, sostenibles</td><td>Parselis (cap. 7)</td></tr>
<tr><td>Cuatro criterios Parselis</td><td>Autonomía, Cuidado, Consenso, Responsabilidad: categorías para evaluar si un artefacto es "honesto" con sus usuarios</td><td>Parselis (cap. 7, tabla 3)</td></tr>
</table>
</div>` },

  406: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Intro Ingeniería · U4</div>
<h1>Ingeniería y desarrollo sustentable</h1>
<p>La ingeniería asumió el desafío del desarrollo sustentable. Pero Latouche plantea algo más incómodo: que el concepto mismo de "desarrollo" está colonizado por un imaginario que ya no es viable. Antes de diseñar soluciones sustentables, hay que entender el problema que estamos queriendo resolver.</p></div>

<h2>Latouche: el decrecimiento y la descolonización del imaginario</h2>
<p>Serge Latouche parte de una imagen poderosa: las estrellas muertas cuya luz sigue llegando. Las condiciones que hicieron posible la sociedad de crecimiento —el fordismo, el capitalismo industrial expansivo— desaparecieron probablemente en los años 70 (cuando salió el primer informe del Club de Roma sobre los límites del crecimiento). Pero seguimos viviendo en el <em>imaginario</em> del crecimiento, como si esas estrellas muertas todavía brillaran.</p>
<p>¿Qué es ese imaginario? Latouche, siguiendo a Cornelius Castoriadis y a Ivan Illich, lo describe como el conjunto de representaciones, palabras y creencias que organizan nuestra comprensión del mundo económico. "Progreso", "desarrollo", "crecimiento" son lo que Illich llamaba <em>toxic words</em>: palabras fetiche que usamos sin cuestionarlas. ¿Progreso de qué, hacia dónde, para quiénes?</p>
<div class="box">Latouche: "Tenemos que descolonizar el imaginario del crecimiento y del desarrollo." La colonización fue paulatina, a través del lenguaje: primero las palabras, luego las instituciones, luego los deseos.</div>

<h2>El origen del problema: el sueño de Adam Smith</h2>
<p>Las palabras "crecimiento" y "desarrollo" son metáforas tomadas de la biología: los organismos crecen (cambio cuantitativo), se desarrollan (cambio cualitativo), maduran y mueren. Los economistas tomaron esa metáfora pero se olvidaron de sus consecuencias: si la economía crece como un organismo, ¿cuándo madura? ¿cuándo muere? El crecimiento infinito es una contradicción biológica convertida en dogma económico.</p>
<p>El "sueño de Adam Smith" (1776, año de la independencia americana y de la <em>Riqueza de las Naciones</em>) fue la idea de que desencadenar las pasiones individuales más egoístas —la búsqueda de interés personal— generaría felicidad colectiva gracias a la "mano invisible". Latouche señala la contradicción: los economistas redujeron la felicidad al bienestar material, el bienestar material al PIB, y el PIB a cualquier transacción monetaria, incluyendo las nocivas (medicamentos para enfermedades causadas por la contaminación, gastos de guerra). Un terremoto que estimula la construcción "aumenta el PIB".</p>

<h2>La sociedad de la frustración</h2>
<p>La sociedad de consumo no es una sociedad que satisface necesidades: es una sociedad que las manufactura. Su modelo de negocio requiere insatisfacción permanente: si todo el mundo estuviera satisfecho, el sistema se detendría. La publicidad no informa sobre productos; crea necesidades. Por eso Latouche puede decir que la sociedad de consumo es una <em>sociedad de la frustración</em>: nunca llega a satisfacer porque no está diseñada para satisfacer.</p>
<p>El indicador más revelador de este problema es la diferencia entre PIB y PIB Neto. El PIB Bruto incluye todo lo producido y vendido: medicamentos para enfermedades causadas por la propia industria, gastos de seguridad generados por la desigualdad, costos de reparación de daños ambientales. El PIB Neto debería deducir la "amortización" —los recursos no renovables consumidos— pero los economistas lo dejaron de lado porque implicaba reconocer que el crecimiento tiene límites.</p>

<h2>Una guerra contra la naturaleza y contra el hombre</h2>
<p>Latouche describe el modelo de crecimiento ilimitado como una "guerra contra la naturaleza": se extrae a una velocidad que supera la capacidad de regeneración de la biosfera (ya rebasada en un 50%). Pero también es una guerra contra el propio ser humano, porque el modelo que prometía felicidad colectiva generó la condición obrera del siglo XIX (que Dickens documentó en <em>Oliver Twist</em>) y sigue generando desigualdades masivas.</p>

<h2>El proyecto del decrecimiento: ¿qué lugar tienen la ciencia y la tecnología?</h2>
<p>El decrecimiento no propone volver a las cavernas. Propone "descolonizar el imaginario": cuestionar cuánto crecimiento, qué tipo de desarrollo, para quiénes. En este proyecto, la ciencia y la tecnología tienen un papel ambivalente: son parte del problema (la tecnología fue el instrumento del modelo termoindustrial) pero también pueden ser parte de la solución, si se subordinan a criterios distintos del crecimiento indefinido.</p>
<p>Para Giuliano (en el Cierre), esto se traduce en una demanda concreta para la formación en ingeniería: incorporar las ciencias sociales y humanas, no como "parches" curriculares, sino como parte constitutiva del modo de pensar ingenieril. El ingeniero del futuro debe ser capaz de hacerse las preguntas que Latouche formula: ¿crecimiento de qué, para quiénes, hasta cuándo?</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Por qué Latouche critica el uso del PIB como indicador de bienestar?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp406a','','Incorrecto. El problema no es que sea difícil de calcular sino que mide lo que no debería medir. El PIB incluye transacciones nocivas como gastos en medicamentos para enfermedades causadas por la industria o gastos bélicos, y no descuenta los recursos naturales no renovables consumidos.')">Porque es difícil de calcular con precisión estadística</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp406a','Correcto. El PIB Bruto incluye toda transacción monetaria, incluyendo nocivas: medicamentos para enfermedades industriales, gastos de guerra, costos de limpieza ambiental. Y no deduce la amortización —los recursos no renovables consumidos. Un terremoto "aumenta el PIB" porque activa construcción. Eso revela que el indicador mide actividad económica, no bienestar real.','')">Porque incluye transacciones nocivas y no deduce los recursos naturales consumidos, midiendo actividad económica en vez de bienestar real</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp406a','','Incorrecto. El PIB sí mide con bastante precisión lo que se produce y vende. El problema es qué mide, no la precisión de la medición.')">Porque no mide correctamente lo que se produce en la economía informal</button>
<div class="cp-fb" id="cp406a"></div></div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Qué significa "descolonizar el imaginario" según Latouche?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp406b','','Incorrecto. Latouche no propone eliminar las tecnologías. Propone cuestionar el sistema de valores y representaciones que hace que el crecimiento indefinido parezca el único horizonte posible. Las tecnologías pueden rediseñarse bajo otros criterios.')">Eliminar las tecnologías que generan crecimiento y volver a formas de vida preindustriales</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp406b','Correcto. Para Latouche (siguiendo a Castoriadis e Illich), el imaginario es el sistema de representaciones y palabras que organizan nuestra comprensión del mundo. "Descolonizarlo" significa cuestionar las palabras fetiche —progreso, desarrollo, crecimiento— para preguntarse críticamente: ¿de qué?, ¿para quiénes?, ¿hasta cuándo? Es un trabajo sobre los supuestos, no solo sobre las tecnologías.','')">Cuestionar las palabras fetiche —progreso, desarrollo, crecimiento— y preguntar críticamente de qué, para quiénes y hasta cuándo</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp406b','','Incorrecto. El "imaginario" en Latouche/Castoriadis no es la dependencia material del petróleo sino el sistema de representaciones culturales que nos hace pensar que el crecimiento indefinido es deseable y necesario. La dependencia del petróleo es una consecuencia, no el imaginario mismo.')">Reducir la dependencia del petróleo reemplazando el combustible fósil por energías renovables</button>
<div class="cp-fb" id="cp406b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Latouche afirma que las palabras "crecimiento" y "desarrollo" son metáforas biológicas que los economistas adoptaron sin asumir todas sus consecuencias. Explicá el argumento y señalá qué consecuencia biológica olvidaron los economistas al hacer esa adopción.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">En biología, los organismos crecen (cambian cuantitativamente), se desarrollan (cambian cualitativamente), alcanzan una madurez y mueren. Es un proceso cíclico y acotado. Los economistas adoptaron las metáforas de "crecimiento" (aumento cuantitativo del producto) y "desarrollo" (transformación cualitativa de la economía) de la biología porque les parecían intuitivas y elegantes para describir los cambios económicos. Pero olvidaron la consecuencia biológica más importante: si la economía es como un organismo, debería tener un límite de madurez y eventualmente cesar. Un organismo que crece indefinidamente no existe en la naturaleza: es un tumor, no un ser vivo sano. Los economistas construyeron toda una teoría del crecimiento indefinido sobre una metáfora que, llevada a sus consecuencias lógicas, la contradice. Latouche señala que esta inconsistencia epistemológica —tomar la metáfora sin asumir sus límites— está en el origen del problema.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Latouche plantea que "los defensores más ardientes del crecimiento y el desarrollo no son los capitalistas, son los sindicalistas y los obreros". ¿Cómo explica este fenómeno aparentemente contradictorio? ¿Qué implicancias tiene para pensar el cambio tecnológico?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">El argumento de Latouche es que las víctimas del sistema de crecimiento se volvieron "tóxico-dependientes" de él. El modelo industrial generó un nivel de vida material para los trabajadores occidentales que es inseparable del crecimiento continuo: más empleos, mejores salarios, más consumo. Para un trabajador cuyo empleo depende de la planta automotriz, el decrecimiento es una amenaza directa a su sustento. El imaginario del crecimiento colonizó incluso la conciencia de quienes más sufren sus contradicciones. Implicancias para el cambio tecnológico: (1) Las transiciones tecnológicas "verdes" que implican desindustrialización (cierre de plantas de carbón, fin de los motores de combustión) generan resistencia de los propios trabajadores que deberían beneficiarse de un mundo más limpio. (2) Las propuestas de tecnologías de bajo crecimiento o decrecientes (reparación en lugar de obsolescencia, economía circular, tecnologías de larga vida) enfrentan la oposición no solo de corporaciones sino de sindicatos que asocian su poder a la industria existente. Esto muestra que el cambio tecnológico sustentable no puede ser solo técnico: requiere también transformaciones en el sistema de protecciones sociales para que las personas no tengan que depender del modelo que está destruyendo el planeta.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">La ingeniería asumió el desafío del "desarrollo sustentable". Pero Latouche y Giuliano sugieren que ese concepto puede ser contradictorio: "desarrollo" lleva implícito el crecimiento, y el crecimiento indefinido es el problema. Tomá posición: ¿puede la ingeniería ser genuinamente sustentable dentro del paradigma del desarrollo, o necesita un cambio de paradigma más profundo? Argumentá considerando al menos dos tecnologías o campos de la ingeniería concretos.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Esta es la tensión central de la U4 y merece una respuesta honesta sobre sus límites. La posición optimista ("sí puede"): La ingeniería puede operar dentro del paradigma del desarrollo sustentable si redefine sus indicadores de éxito. El caso de la economía circular (diseño para la reparación, reutilización y reciclaje) muestra que es posible crear valor económico desacoplando el crecimiento del consumo de materiales. Ejemplo 1: Los paneles solares han bajado su costo un 90% en una década, haciendo que la energía renovable sea más barata que la fósil en muchos contextos. Eso es crecimiento económico que reduce emisiones. Ejemplo 2: La agricultura de precisión (sensores, drones, IA) puede aumentar rendimientos con menos agua, menos fertilizante y menos tierra. La posición crítica ("necesita un cambio más profundo", más cercana a Latouche): El problema es que esas ganancias de eficiencia frecuentemente se "gastan" en más consumo (el efecto rebote o paradoja de Jevons: cuando algo se hace más eficiente, se usa más). La eficiencia energética de los automóviles mejoró enormemente desde 1970, pero el consumo total de combustible aumentó porque hay muchos más autos y se manejan más kilómetros. El cambio de paradigma que pide Latouche no es técnico: es sobre qué se considera el fin de la actividad económica. Si el fin es el crecimiento indefinido del PIB, ninguna mejora técnica alcanza. Si el fin es el bienestar humano dentro de los límites planetarios (como propone el modelo del "donut" de Kate Raworth), entonces la ingeniería tiene un rol diferente: no maximizar producción sino mantenerse dentro de los límites. La conclusión más honesta es que ambas perspectivas son necesarias: la ingeniería puede y debe mejorar la eficiencia, pero sin un cambio en los indicadores y los fines, esas mejoras serán insuficientes.</div></div></div>

<table class="sum"><tr><th>Concepto</th><th>Definición</th><th>Autor/Ejemplo</th></tr>
<tr><td>Imaginario del crecimiento</td><td>Sistema de representaciones y palabras que hace que el crecimiento indefinido parezca el único horizonte posible; "toxic words" según Illich</td><td>Latouche (siguiendo a Castoriadis e Illich)</td></tr>
<tr><td>Sueño de Adam Smith</td><td>Idea de que la búsqueda individual del interés propio genera felicidad colectiva; base de la ideología del crecimiento (1776)</td><td>Latouche</td></tr>
<tr><td>PIB vs. PIB Neto</td><td>El PIB Bruto incluye transacciones nocivas y no deduce recursos consumidos; el PIB Neto debería corregirlo pero no se usa porque implica reconocer límites</td><td>Latouche</td></tr>
<tr><td>Decrecimiento</td><td>Propuesta de reducir la escala de la economía en los países ricos para mantenerse dentro de los límites ecológicos; no es "crecimiento cero" sino reducción deliberada</td><td>Latouche</td></tr>
<tr><td>Efecto rebote (Jevons)</td><td>Las mejoras de eficiencia frecuentemente generan más consumo total, no menos, porque el menor costo por unidad incentiva un mayor uso</td><td>Paradoja de Jevons; relevante para evaluar soluciones técnicas de sustentabilidad</td></tr>
</table>
</div>` },

// ── Química I ────────────────────────────────────────────────────────────────

  501: { estimated_hours: 2, difficulty: 1, html: `<div class="cls">
<div class="hero"><div class="hero-label">Química I · U1</div>
<h1>La química y sus objetos de estudio</h1>
<p>La química estudia la composición, estructura, propiedades y transformaciones de la materia. Es la ciencia que conecta la física con la biología y permite entender desde la corrosión de un puente hasta el metabolismo celular.</p></div>

<h2>¿Qué es la química?</h2>
<p>La química es la ciencia que estudia la <strong>materia</strong> —su composición, estructura y propiedades— y los <strong>cambios</strong> que experimenta. Sus ramas principales: química inorgánica (compuestos sin carbono), orgánica (compuestos de carbono), física (termodinámica y cinética), analítica (determinación de composición) y bioquímica (química de seres vivos).</p>
<div class="box"><strong>Materia:</strong> todo lo que tiene masa y ocupa lugar en el espacio.<br><strong>Energía:</strong> capacidad de realizar trabajo o producir calor; siempre acompaña las transformaciones de la materia. Los procesos que liberan energía son <em>exotérmicos</em>; los que absorben, <em>endotérmicos</em>.</div>

<h2>Propiedades de la materia</h2>
<p>Las propiedades se clasifican según si dependen o no de la cantidad de materia:</p>
<div class="box"><strong>Propiedades extensivas:</strong> dependen de la cantidad de materia. Ejemplos: masa, volumen, cantidad de calor total, energía interna.<br><br>
<strong>Propiedades intensivas:</strong> independientes de la cantidad; son características de la sustancia. Ejemplos: densidad, punto de fusión, punto de ebullición, color, temperatura de ignición, índice de refracción.</div>
<p>Dentro de las intensivas se distinguen <em>propiedades físicas</em> (observables sin alterar la composición: color, dureza, punto de fusión, densidad) y <em>propiedades químicas</em> (describen cómo reacciona la sustancia: inflamabilidad, reactividad con ácidos, poder reductor).</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Cuál de las siguientes es una propiedad intensiva?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp501a','','Incorrecto. La masa depende de cuánta materia haya: 1 kg de hierro tiene más masa que 10 g de hierro. Es extensiva.')">Masa</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp501a','Correcto. La densidad (ρ = m/V) es idéntica para 1 mL o 1 L de agua líquida a la misma temperatura: ≈1,00 g/mL. No depende de la cantidad de materia presente.','')">Densidad</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp501a','','Incorrecto. El volumen depende de la cantidad de materia. 2 mol de gas ocupan el doble que 1 mol en iguales condiciones. Es extensiva.')">Volumen</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp501a','','Incorrecto. El calor total almacenado en un sistema depende de su masa. Es extensiva.')">Calor total</button>
<div class="cp-fb" id="cp501a"></div></div>

<h2>Cambios físicos y químicos</h2>
<p>Un <strong>cambio físico</strong> altera el estado, la forma o el tamaño de la materia sin modificar su composición química. La sustancia puede recuperarse en su forma original. Ejemplos: fusión del hielo (H₂O sólido → H₂O líquido), ebullición, disolución de NaCl en agua, corte de papel, compresión de un gas.</p>
<p>Un <strong>cambio químico</strong> (reacción química) altera la composición: se rompen y forman enlaces, aparecen nuevas sustancias con propiedades distintas. Señales: cambio de color permanente, formación de precipitado, desprendimiento de gas, cambio notable de temperatura, emisión de luz.</p>
<div class="warn">⚠️ La disolución de sal en agua es física (se recupera el sólido por evaporación). La oxidación del hierro es química (el óxido de hierro Fe₂O₃ tiene propiedades distintas al Fe metálico). No confundirlos.</div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Cuál de los siguientes es un cambio químico?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp501b','','Incorrecto. Fundir hierro es un cambio de estado: sólido → líquido. La composición química (Fe puro) no varía.')">Fundir hierro a 1538 °C</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp501b','','Incorrecto. Disolver azúcar es físico. El azúcar se dispersa en agua pero puede recuperarse por evaporación. Su fórmula C₁₂H₂₂O₁₁ no cambia.')">Disolver azúcar en agua</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp501b','Correcto. 4 Fe + 3 O₂ → 2 Fe₂O₃. La herrumbre es una sustancia nueva (óxido de hierro III) con propiedades completamente distintas al hierro metálico. No puede revertirse espontáneamente. Es un cambio químico irreversible.','')">Oxidación del hierro (herrumbre)</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp501b','','Incorrecto. Romper un vidrio es físico: el vidrio sigue siendo el mismo material (SiO₂ amorfo), solo cambió su tamaño y forma.')">Romper un vidrio</button>
<div class="cp-fb" id="cp501b"></div></div>

<h2>Temperatura: escala Celsius y escala Kelvin</h2>
<p>En química se usa frecuentemente la escala <strong>Kelvin (K)</strong>, temperatura absoluta, porque las leyes de gases y termodinámica la requieren. La conversión es:</p>
<div class="formula">T(K) = T(°C) + 273,15</div>
<p>Ejemplos: 0 °C = 273,15 K; 25 °C = 298,15 K; −273,15 °C = 0 K (cero absoluto, temperatura mínima posible). En los cálculos de gases siempre se trabaja con K.</p>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Clasificá las siguientes propiedades como extensivas (E) o intensivas (I): a) masa de una muestra de cobre; b) punto de fusión del cobre (1085 °C); c) volumen de 3 L de agua; d) color amarillo del azufre; e) calor liberado al quemar 10 g de carbono.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">a) Masa → E (depende de cuánto cobre hay).<br>b) Punto de fusión → I (siempre 1085 °C para Cu puro, sin importar la cantidad).<br>c) Volumen → E (depende de la cantidad de agua).<br>d) Color → I (el azufre es amarillo sea 1 g o 1 kg).<br>e) Calor liberado al quemar 10 g → E (si quemo 20 g libero el doble de calor).</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Identificá si cada cambio es físico (F) o químico (Q) y justificá: a) ebullición del agua; b) fermentación del jugo de uva (C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂); c) disolución de NaCl en agua; d) combustión del metano (CH₄ + 2O₂ → CO₂ + 2H₂O); e) compresión de un gas en un émbolo.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">a) Ebullición → F. H₂O pasa de líquido a vapor pero sigue siendo H₂O. Reversible por condensación.<br>b) Fermentación → Q. El azúcar se convierte en etanol y CO₂: cambia la composición química, aparecen nuevas sustancias.<br>c) Disolución NaCl → F. El NaCl se dispersa en iones Na⁺ y Cl⁻ pero puede recuperarse por evaporación del agua.<br>d) Combustión → Q. Se forman CO₂ y H₂O, sustancias completamente distintas al CH₄. No reversible espontáneamente.<br>e) Compresión → F. Solo cambia el volumen del gas, no su composición química.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Una sustancia desconocida tiene densidad = 1,84 g/mL a 20°C, punto de ebullición = 337°C, reacciona vigorosamente con zinc produciendo gas H₂, y es 96% (m/m) de pureza en solución comercial. Identificada como H₂SO₄: a) ¿Cuáles propiedades son físicas y cuáles químicas? b) Calculá la masa de H₂SO₄ puro en 50,0 mL de la solución comercial. c) Convertí 337°C a Kelvin.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">a) Físicas: densidad (1,84 g/mL), punto de ebullición (337°C). Química: reacción con zinc (H₂SO₄ + Zn → ZnSO₄ + H₂↑).<br>b) Paso 1 — masa de solución: m = V × ρ = 50,0 mL × 1,84 g/mL = 92,0 g.<br>Paso 2 — masa de H₂SO₄ puro (96% m/m): m(H₂SO₄) = 92,0 g × 0,96 = 88,3 g.<br>c) T(K) = 337 + 273,15 = 610,15 K ≈ 610 K.</div></div></div>

<table class="sum"><tr><th>Concepto</th><th>Definición</th><th>Ejemplo</th></tr>
<tr><td>Propiedad extensiva</td><td>Depende de la cantidad de materia</td><td>masa, volumen, calor total</td></tr>
<tr><td>Propiedad intensiva</td><td>Independiente de la cantidad</td><td>densidad, p. fusión, color</td></tr>
<tr><td>Cambio físico</td><td>No altera composición química</td><td>fusión, ebullición, disolución</td></tr>
<tr><td>Cambio químico</td><td>Altera composición, nuevas sustancias</td><td>combustión, oxidación, fermentación</td></tr>
<tr><td>T(K) = T(°C) + 273,15</td><td>Conversión Celsius a Kelvin</td><td>25 °C = 298,15 K</td></tr>
</table>
</div>` },

  502: { estimated_hours: 2, difficulty: 1, html: `<div class="cls">
<div class="hero"><div class="hero-label">Química I · U1</div>
<h1>Sistemas materiales</h1>
<p>Clasificar correctamente un sistema material es el primer paso para elegir el método de separación adecuado y entender qué propiedades van a determinar el comportamiento de la muestra.</p></div>

<h2>Clasificación de los sistemas materiales</h2>
<p>Un <strong>sistema material</strong> es cualquier porción de materia delimitada para su estudio. Se clasifica según su composición y homogeneidad:</p>
<div class="box"><strong>Sustancias puras:</strong> composición química definida e invariable. Se subdividen en:<br>
• <em>Elementos</em>: formados por un solo tipo de átomo (Fe, O₂, Cu, Au). No se descomponen por medios químicos ordinarios.<br>
• <em>Compuestos</em>: formados por dos o más elementos unidos en proporciones fijas (H₂O, NaCl, CO₂, H₂SO₄). Pueden descomponerse por reacciones químicas.<br><br>
<strong>Mezclas:</strong> dos o más sustancias puras sin proporciones fijas. Se subdividen en:<br>
• <em>Homogéneas</em> (soluciones): aspecto uniforme, una sola fase visible (agua con sal, alcohol en agua, aire).<br>
• <em>Heterogéneas</em>: dos o más fases distinguibles (aceite y agua, granito, arena con limaduras de hierro).</div>

<h2>Sustancias puras: elementos vs. compuestos</h2>
<p>Los <strong>elementos</strong> están representados en la Tabla Periódica (118 elementos conocidos). Algunos existen como moléculas diatómicas en condiciones normales: H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂ (mnemotecnia: <em>BrINClHOF</em>).</p>
<p>Los <strong>compuestos</strong> tienen propiedades distintas a los elementos que los forman. El agua (H₂O) tiene propiedades completamente distintas al hidrógeno gas y al oxígeno gas. La proporción de sus elementos es fija: siempre 1:8 en masa (1 g de H por cada 8 g de O).</p>

<h2>Mezclas: homogéneas y heterogéneas</h2>
<p>En una <strong>mezcla homogénea</strong> (solución) no se distinguen las fases a simple vista ni con microscopio óptico: el soluto está disperso a nivel molecular. Ejemplos: agua con azúcar, bronce (Cu+Sn), aire, vino.</p>
<p>En una <strong>mezcla heterogénea</strong> se distinguen dos o más fases. Ejemplos: aceite y agua (dos líquidos inmiscibles), granito (cuarzo + feldespato + mica), leche (dispersión coloidal), agua con barro (suspensión).</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — El agua de mar es:</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp502a','','Incorrecto. El agua de mar contiene múltiples sales disueltas (NaCl, MgCl₂, etc.) en proporciones que varían según la zona. No tiene composición fija: no es sustancia pura.')">Sustancia pura (compuesto)</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp502a','Correcto. El agua de mar es una mezcla homogénea (solución): tiene aspecto uniforme (no se distinguen fases a simple vista) pero su composición varía (más o menos sal según el océano). No tiene proporciones fijas: no es sustancia pura.','')">Mezcla homogénea</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp502a','','Incorrecto. No se distinguen fases visibles en el agua de mar: el NaCl y otras sales están disueltos a nivel iónico. No es heterogénea a simple vista.')">Mezcla heterogénea</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp502a','','Incorrecto. El agua de mar tiene más de un componente. Los elementos son sustancias de composición fija formadas por un único tipo de átomo.')">Elemento</button>
<div class="cp-fb" id="cp502a"></div></div>

<h2>Métodos de separación de mezclas</h2>
<p>La elección del método depende de las propiedades físicas de los componentes:</p>
<table class="sum"><tr><th>Método</th><th>Base física</th><th>Ejemplo</th></tr>
<tr><td>Decantación</td><td>Diferencia de densidad (líquido-sólido o dos líquidos inmiscibles)</td><td>Aceite+agua, barro</td></tr>
<tr><td>Filtración</td><td>Diferencia de tamaño de partícula (sólido en líquido)</td><td>Arena en agua</td></tr>
<tr><td>Destilación</td><td>Diferencia de punto de ebullición</td><td>Agua+alcohol; agua de mar</td></tr>
<tr><td>Evaporación/cristalización</td><td>Volatilidad del solvente</td><td>NaCl de agua de mar</td></tr>
<tr><td>Tamizado</td><td>Diferencia de tamaño (sólido-sólido)</td><td>Arena gruesa+fina</td></tr>
<tr><td>Imantación</td><td>Propiedades magnéticas</td><td>Limaduras Fe+arena</td></tr>
<tr><td>Cromatografía</td><td>Diferencia de afinidad con fases estacionaria/móvil</td><td>Pigmentos vegetales</td></tr>
</table>

<div class="cp"><div class="cp-q">🔍 Checkpoint — Para separar NaCl disuelto en agua el método adecuado es:</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp502b','','Incorrecto. La filtración separa sólidos en suspensión (no disueltos). El NaCl disuelto pasa a través del filtro en solución.')">Filtración</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp502b','','Incorrecto. La decantación separa líquidos inmiscibles o sólidos que sedimentan. El NaCl disuelto no sedimenta.')">Decantación</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp502b','Correcto. Al evaporar el agua (solvente volátil), el NaCl (soluto no volátil) queda como sólido cristalino. También puede usarse destilación si se quiere recuperar el agua pura además del sal.','')">Evaporación/cristalización</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp502b','','Incorrecto. La imantación solo funciona si uno de los componentes es magnético. El NaCl y el agua no son magnéticos.')">Imantación</button>
<div class="cp-fb" id="cp502b"></div></div>

<h2>Estados de la materia y cambios de estado</h2>
<p>La materia se presenta en tres estados principales. Las transiciones entre ellos son cambios físicos:</p>
<div class="box">Sólido ⇌ Líquido: <strong>fusión</strong> (↑T) / <strong>solidificación</strong> (↓T)<br>
Líquido ⇌ Gas: <strong>vaporización</strong> (↑T) / <strong>condensación</strong> (↓T)<br>
Sólido ⇌ Gas: <strong>sublimación</strong> (↑T) / <strong>sublimación inversa o deposición</strong> (↓T)<br>
Ejemplo de sublimación: naftalina, hielo seco (CO₂ sólido), yodo.</div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Clasificá cada sistema como elemento (E), compuesto (C), mezcla homogénea (MH) o mezcla heterogénea (MHe): a) O₂ puro; b) NaOH; c) leche entera; d) aire; e) diamante (C puro); f) bronce (90% Cu, 10% Sn); g) ensalada.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">a) O₂ → E (un solo elemento, oxígeno).<br>b) NaOH → C (compuesto: Na + O + H en proporciones fijas).<br>c) Leche → MHe (dispersión coloidal, se distinguen fases al microscopio).<br>d) Aire → MH (mezcla de N₂, O₂, Ar, etc., aspecto uniforme).<br>e) Diamante → E (carbono puro, aunque en red cristalina).<br>f) Bronce → MH (aleación metálica, una sola fase sólida uniforme).<br>g) Ensalada → MHe (se distinguen claramente los distintos componentes).</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Se tiene una mezcla de azufre (sólido amarillo), limaduras de hierro, y agua con sal disuelta. Proponé una secuencia de métodos de separación para obtener cada componente puro y explicá el principio en que se basa cada paso.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Paso 1 — Imantación: acercar un imán para separar las limaduras de hierro (magnéticas) del azufre y la solución salina. Principio: propiedades magnéticas.<br>Paso 2 — Filtración: filtrar la mezcla restante (azufre sólido + solución salina) para retener el azufre en el papel de filtro. El filtrado es la solución NaCl(aq). Principio: diferencia de tamaño de partícula.<br>Paso 3 — Evaporación: calentar el filtrado para evaporar el agua y obtener el NaCl cristalizado. Principio: diferencia de volatilidad (agua evapora, NaCl no).<br>Si se quiere recuperar también el agua pura: usar destilación en lugar del paso 3. Principio: diferencia de punto de ebullición.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Se disuelven 25,0 g de KNO₃ (nitrato de potasio) en 75,0 g de agua a 80°C. Al enfriar a 20°C, la solubilidad del KNO₃ es 31,6 g/100 g H₂O, mientras que a 80°C es 169 g/100 g H₂O. a) ¿Es la solución a 80°C saturada, insaturada o sobresaturada? b) ¿Qué masa de KNO₃ cristalizará al enfriar a 20°C? c) ¿Cómo se llamaría el proceso de obtener el KNO₃ sólido puro desde la solución?</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">a) A 80°C, solubilidad = 169 g KNO₃/100 g H₂O. En 75 g H₂O se pueden disolver 169 × 0,75 = 126,8 g. Como solo hay 25 g disueltos (< 126,8 g), la solución a 80°C es <strong>insaturada</strong>.<br>b) A 20°C, solubilidad = 31,6 g KNO₃/100 g H₂O. En 75 g H₂O se pueden disolver: 31,6 × 0,75 = 23,7 g. Como tenemos 25 g disueltos y solo caben 23,7 g, cristaliza: 25,0 − 23,7 = <strong>1,3 g de KNO₃</strong>.<br>c) El proceso de obtener sólido puro por enfriamiento de una solución saturada se llama <strong>cristalización</strong>. Es un método de purificación muy usado en laboratorio y en la industria química.</div></div></div>

<table class="sum"><tr><th>Sistema</th><th>Características</th><th>Ejemplo</th></tr>
<tr><td>Elemento</td><td>Un solo tipo de átomo, no descomponible</td><td>Fe, O₂, Au</td></tr>
<tr><td>Compuesto</td><td>Varios elementos, proporciones fijas</td><td>H₂O, NaCl, CO₂</td></tr>
<tr><td>Mezcla homogénea</td><td>Una sola fase visible, composición variable</td><td>Agua salada, aire</td></tr>
<tr><td>Mezcla heterogénea</td><td>Dos o más fases distinguibles</td><td>Aceite+agua, granito</td></tr>
<tr><td>Separación</td><td>Se basa en propiedades físicas distintas</td><td>Filtración, destilación, imantación</td></tr>
</table>
</div>` },

  503: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Química I · U2</div>
<h1>Leyes fundamentales de la química</h1>
<p>Las leyes fundamentales fueron formuladas entre finales del siglo XVIII y principios del XIX. Hoy son la base del cálculo estequiométrico y de todo el modelo atómico-molecular de la materia.</p></div>

<h2>Ley de conservación de la masa (Lavoisier, 1789)</h2>
<p>En toda reacción química, la masa total de los reactivos es igual a la masa total de los productos. La materia no se crea ni se destruye, solo se transforma.</p>
<div class="formula">m(reactivos) = m(productos)</div>
<p>Ejemplo: 12,0 g de C + 32,0 g de O₂ → 44,0 g de CO₂. Verificación: 12,0 + 32,0 = 44,0 g ✓. Esta ley obliga a que toda ecuación química esté <strong>balanceada</strong>: el número de átomos de cada elemento debe ser igual a ambos lados.</p>

<h2>Ley de proporciones definidas (Proust, 1799)</h2>
<p>Un compuesto puro siempre contiene los mismos elementos en las mismas proporciones en masa, sin importar su origen o método de preparación.</p>
<div class="box">Ejemplo con H₂O: la relación másica H:O es siempre 1:8 (o 2:16 = 1:8).<br>• 2 g H + 16 g O → 18 g H₂O (proporción: 11,1% H, 88,9% O)<br>• 10 g H + 80 g O → 90 g H₂O (misma proporción: 11,1% H, 88,9% O)<br>Si hay un exceso de un reactivo, el sobrante no reacciona.</div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — 9,0 g de H₂O se descomponen. Según la ley de Proust (H:O = 1:8), ¿cuántos gramos de H₂ y O₂ se obtienen?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp503a','','Incorrecto. La proporción de H en H₂O es 2/18 = 11,1%, no la mitad. Revisá la fórmula H₂O: 2 átomos H (masa 2) y 1 átomo O (masa 16), total 18.')">4,5 g H₂ y 4,5 g O₂</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp503a','Correcto. En H₂O: M(H₂) = 2 g/mol, M(O) = 16 g/mol, M(H₂O) = 18 g/mol. Fracción másica H: 2/18 = 0,111. Fracción O: 16/18 = 0,889. Para 9 g H₂O: m(H₂) = 9 × 2/18 = 1,0 g; m(O₂) = 9 × 16/18 = 8,0 g. Verificación: 1,0 + 8,0 = 9,0 g ✓','')">1,0 g H₂ y 8,0 g O₂</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp503a','','Incorrecto. La proporción H:O no es 1:1. En H₂O hay 2 H (masa 2) y 1 O (masa 16): la relación másica es 2:16 = 1:8.')">2,0 g H₂ y 7,0 g O₂</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp503a','','Incorrecto. La masa total debe conservarse: m(H₂) + m(O₂) debe ser 9,0 g.')">3,0 g H₂ y 6,0 g O₂</button>
<div class="cp-fb" id="cp503a"></div></div>

<h2>Ley de proporciones múltiples (Dalton, 1803)</h2>
<p>Cuando dos elementos forman más de un compuesto entre sí, las distintas masas de uno de los elementos que se combinan con una masa fija del otro guardan entre sí una razón de números enteros pequeños.</p>
<div class="box">Ejemplo con óxidos de nitrógeno:<br>N₂O: 28 g N con 16 g O → relación N:O = 7:4<br>NO:  14 g N con 16 g O<br>NO₂: 14 g N con 32 g O<br>N₂O₃: 28 g N con 48 g O<br>Masas de O que se combinan con 14 g N: 8 / 16 / 24 / 32 / 40 g → razón 1:2:3:4:5 (enteros pequeños) ✓</div>
<p>Esta ley apoya la idea de que la materia está formada por átomos discretos: si los átomos son indivisibles, las combinaciones solo pueden ocurrir en relaciones enteras.</p>

<h2>Hipótesis de Avogadro (1811)</h2>
<p>A igual temperatura y presión, volúmenes iguales de gases diferentes contienen igual número de moléculas. Esta hipótesis permite relacionar volúmenes de gases con moles y con masas.</p>
<div class="formula">En CNPT (0°C y 1 atm): 1 mol de cualquier gas ocupa 22,4 L</div>
<p>El <strong>número de Avogadro</strong>: N_A = 6,022 × 10²³ partículas/mol. Un mol es la cantidad de sustancia que contiene 6,022 × 10²³ entidades elementales (átomos, moléculas, iones, etc.).</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Cuántas moléculas hay en 0,50 mol de CO₂?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp503b','','Incorrecto. 0,50 mol × 6,022×10²³ moléculas/mol ≠ 6,022×10²³. Eso sería 1 mol completo.')">6,022 × 10²³ moléculas</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp503b','Correcto. N = n × NA = 0,50 mol × 6,022×10²³ mol⁻¹ = 3,011×10²³ moléculas de CO₂. Recuerda: NA relaciona mol con número de partículas.','')">3,011 × 10²³ moléculas</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp503b','','Incorrecto. 22,0 g de CO₂ no es la respuesta; la pregunta pide número de moléculas, no masa. M(CO₂) = 44 g/mol.')">22,0 g de CO₂</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp503b','','Incorrecto. 11,2 L en CNPT sería el volumen de 0,50 mol de gas, no el número de moléculas.')">11,2 L en CNPT</button>
<div class="cp-fb" id="cp503b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Al quemar completamente 24,0 g de carbono (C) con oxígeno (O₂) se obtiene CO₂. a) ¿Qué masa de O₂ se necesita? b) ¿Qué masa de CO₂ se produce? c) Verificá la ley de Lavoisier. Masas atómicas: C=12, O=16.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Reacción: C + O₂ → CO₂ (balanceada, 1:1:1 en mol).<br>a) 24,0 g C = 24,0/12,0 = 2,00 mol C. Se necesitan 2,00 mol O₂ = 2,00 × 32,0 g/mol = 64,0 g O₂.<br>b) Se producen 2,00 mol CO₂ = 2,00 × 44,0 g/mol = 88,0 g CO₂.<br>c) Lavoisier: m(C) + m(O₂) = 24,0 + 64,0 = 88,0 g = m(CO₂) ✓</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">El hierro forma dos óxidos: FeO (óxido ferroso) y Fe₂O₃ (óxido férrico). a) Calculá la masa de oxígeno que se combina con 55,8 g de Fe en cada compuesto. b) Verificá la ley de proporciones múltiples. Masas atómicas: Fe=55,8; O=16,0.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">a) En FeO: proporción O/Fe = 16,0/55,8. Para 55,8 g Fe → 16,0 g O.<br>En Fe₂O₃: proporción O/Fe = (3×16,0)/(2×55,8) = 48,0/111,6. Para 55,8 g Fe → 48,0/2 = 24,0 g O.<br>b) Masas de O que se combinan con 55,8 g Fe: FeO → 16,0 g; Fe₂O₃ → 24,0 g.<br>Razón: 16,0:24,0 = 2:3. Números enteros pequeños ✓. Confirma la Ley de Proporciones Múltiples.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Se mezclan 18,0 g de H₂ con 128,0 g de O₂ para producir H₂O. Reacción: 2H₂ + O₂ → 2H₂O. a) ¿Cuál es el reactivo en exceso y cuánto sobra? b) ¿Qué masa de H₂O se produce? c) ¿Cuántas moléculas de H₂O se producen? Masas atómicas: H=1,00; O=16,0.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">a) Moles disponibles: n(H₂) = 18,0/2,00 = 9,00 mol; n(O₂) = 128,0/32,0 = 4,00 mol.<br>Relación estequiométrica: 2 mol H₂ por 1 mol O₂. Para 9,00 mol H₂ se necesitan 4,50 mol O₂. Solo hay 4,00 mol O₂ → O₂ es el reactivo limitante.<br>H₂ necesario para 4,00 mol O₂: 4,00 × 2 = 8,00 mol H₂. Sobra: 9,00 − 8,00 = 1,00 mol H₂ = 2,00 g H₂.<br>b) 4,00 mol O₂ × (2 mol H₂O / 1 mol O₂) = 8,00 mol H₂O = 8,00 × 18,0 = 144 g H₂O.<br>c) N(H₂O) = 8,00 mol × 6,022×10²³ = 4,82×10²⁴ moléculas.</div></div></div>

<table class="sum"><tr><th>Ley</th><th>Enunciado clave</th><th>Fórmula/Relación</th></tr>
<tr><td>Lavoisier (1789)</td><td>Masa se conserva en toda reacción</td><td>m(reactivos) = m(productos)</td></tr>
<tr><td>Proust (1799)</td><td>Compuesto tiene proporciones fijas</td><td>%masa(H en H₂O) = 11,1% siempre</td></tr>
<tr><td>Dalton (1803)</td><td>Masas de un elemento en compuestos: razón entera</td><td>m(O) en FeO:Fe₂O₃ = 2:3</td></tr>
<tr><td>Avogadro (1811)</td><td>Igual V, T, P → igual nro. moléculas</td><td>1 mol gas = 22,4 L en CNPT</td></tr>
<tr><td>Número de Avogadro</td><td>Partículas por mol</td><td>NA = 6,022 × 10²³ mol⁻¹</td></tr>
</table>
</div>` },

  504: { estimated_hours: 3, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Química I · U2</div>
<h1>Nomenclatura inorgánica</h1>
<p>Nombrar y formular correctamente los compuestos inorgánicos es imprescindible para interpretar ecuaciones, leer etiquetas de laboratorio y comunicarse con precisión. Se usan tres sistemas en paralelo: IUPAC, Stock y Tradicional.</p></div>

<h2>Valencias y estado de oxidación</h2>
<p>La <strong>valencia</strong> (o estado de oxidación) indica la capacidad de combinación de un elemento. Muchos metales de transición tienen valencias múltiples. Los no metales también pueden tener varias valencias según el compuesto.</p>
<div class="box">Valencia fija: Na(+1), K(+1), Ca(+2), Mg(+2), Al(+3), Zn(+2).<br>Valencia variable (la más común primero en IUPAC): Fe(+2,+3), Cu(+1,+2), Pb(+2,+4), Sn(+2,+4), Cr(+2,+3), Mn(+2,+4,+7).<br>No metales: O(-2), H(+1), Cl(-1 a +7), S(-2 a +6), N(-3 a +5), P(-3 a +5).</div>

<h2>Óxidos</h2>
<p>Los óxidos se forman por la combinación de un elemento con el oxígeno. La fórmula genérica es <strong>E₂Oₙ</strong> (para metales) o <strong>EₙO_m</strong> (para no metales).</p>
<div class="box"><strong>Óxidos metálicos</strong> (óxidos básicos): metal + O. Ej: Na₂O, CaO, Fe₂O₃, CuO.<br><strong>Óxidos no metálicos</strong> (anhídridos o óxidos ácidos): no metal + O. Ej: CO₂, SO₃, NO₂, P₄O₁₀.<br><br>Nomenclatura: <br>• <em>IUPAC (composición):</em> usar prefijos (mono-, di-, tri-, tetra-...) para indicar número de átomos. CO₂ = dióxido de carbono; SO₃ = trióxido de azufre.<br>• <em>Stock:</em> nombre del metal o no metal seguido del estado de oxidación en número romano. Fe₂O₃ = óxido de hierro (III); FeO = óxido de hierro (II).<br>• <em>Tradicional:</em> prefijos -oso (menor valencia) e -ico (mayor valencia). Fe₂O₃ = óxido férrico; FeO = óxido ferroso.</div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — El Fe₂O₃ se llama según Stock:</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp504a','','Incorrecto. Si Fe tuviera valencia +2 en Fe₂O₃, la fórmula sería FeO o Fe₂O₂. En Fe₂O₃: carga total O = 3×(−2) = −6; carga Fe = +6/2 = +3. Es hierro (III).')">Óxido de hierro (II)</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp504a','Correcto. En Fe₂O₃: los 3 oxígenos aportan −6 en total. Los 2 hierros deben compensar: +6/2 = +3 cada uno. Nomenclatura Stock: óxido de hierro (III). Tradicional: óxido férrico.','')">Óxido de hierro (III)</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp504a','','Incorrecto. Ese sería el nombre IUPAC (prefijos). En Stock se usa el numeral romano entre paréntesis. Además, Fe₂O₃ tiene 2 átomos de Fe y 3 de O.')">Dióxido de hierro</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp504a','','Incorrecto. "Óxido férrico" es el nombre tradicional, no el Stock. El sistema Stock usa la notación con número romano entre paréntesis.')">Óxido férrico</button>
<div class="cp-fb" id="cp504a"></div></div>

<h2>Hidróxidos</h2>
<p>Los hidróxidos se forman por la combinación del óxido metálico con agua, o directamente metal + agua (metales alcalinos). Fórmula genérica: <strong>M(OH)ₙ</strong> donde n es la valencia del metal.</p>
<div class="box">NaOH = hidróxido de sodio; KOH = hidróxido de potasio; Ca(OH)₂ = hidróxido de calcio;<br>Fe(OH)₂ = hidróxido de hierro (II) / hidróxido ferroso; Fe(OH)₃ = hidróxido de hierro (III) / hidróxido férrico;<br>Cu(OH)₂ = hidróxido de cobre (II) / hidróxido cúprico; Cu(OH) = hidróxido de cobre (I) / hidróxido cuproso;<br>Al(OH)₃ = hidróxido de aluminio.</div>

<h2>Ácidos</h2>
<p>Dos tipos principales:</p>
<div class="box"><strong>Hidrácidos</strong> (H + no metal): HCl, HBr, HI, H₂S, HF. En solución acuosa: ácido clorhídrico, bromhídrico, yodhídrico, sulfhídrico, fluorhídrico. Sin agua: cloruro de hidrógeno, etc.<br><br>
<strong>Oxoácidos</strong> (H + no metal + O): H₂SO₄ (ác. sulfúrico), H₂SO₃ (ác. sulfuroso), HNO₃ (ác. nítrico), HNO₂ (ác. nitroso), H₃PO₄ (ác. fosfórico), HClO₄ (ác. perclórico), HClO₃ (ác. clórico), HClO₂ (ác. cloroso), HClO (ác. hipocloroso).<br><br>
Regla para oxoácidos del mismo no metal: <em>per...ico</em> (+1 O que ico), <em>...ico</em> (más O), <em>...oso</em> (menos O), <em>hipo...oso</em> (−1 O que oso).</div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — ¿Cuál es la fórmula del ácido sulfuroso?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp504b','','Incorrecto. H₂SO₄ es el ácido sulfúrico (mayor número de oxidación del S: +6). El sulfuroso tiene S en estado +4.')">H₂SO₄</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp504b','Correcto. H₂SO₃ = ácido sulfuroso. El azufre está en estado +4. El ácido sulfúrico (H₂SO₄) tiene S en +6. Regla: el nombre terminado en -oso tiene menos oxígeno que el terminado en -ico.','')">H₂SO₃</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp504b','','Incorrecto. H₂S es el ácido sulfhídrico (hidrácido, sin oxígeno). El sulfuroso es un oxoácido.')">H₂S</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp504b','','Incorrecto. HSO₃ no corresponde a un ácido inorgánico estable. El ácido sulfuroso es H₂SO₃ (diprotónico).')">HSO₃</button>
<div class="cp-fb" id="cp504b"></div></div>

<h2>Sales</h2>
<p>Las sales se forman por reacción de un ácido con un hidróxido (neutralización). Tienen cation metálico (o NH₄⁺) y anión del ácido.</p>
<div class="box">Sales de hidrácidos: NaCl (cloruro de sodio), FeCl₂ (cloruro de hierro II / cloruro ferroso), FeCl₃ (cloruro de hierro III).<br>Sales de oxoácidos: Na₂SO₄ (sulfato de sodio), CaSO₃ (sulfito de calcio), Fe(NO₃)₃ (nitrato de hierro III), Na₃PO₄ (fosfato de sodio), Cu₂SO₄ (sulfato de cobre I).<br>Nomenclatura: anión primero (sufijo -ato si deriva de ácido -ico; -ito si de ácido -oso; -uro si de hidrácido) + catión con su valencia en Stock o Traditional.</div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Escribí las fórmulas de: a) hidróxido cúprico; b) óxido ferroso; c) ácido nítrico; d) cloruro de potasio; e) sulfato férrico.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">a) Hidróxido cúprico = Cu(II): Cu(OH)₂<br>b) Óxido ferroso = Fe(II): FeO<br>c) Ácido nítrico: HNO₃<br>d) Cloruro de potasio: KCl<br>e) Sulfato férrico = Fe(III), SO₄²⁻: Fe₂(SO₄)₃</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Nombrá según los tres sistemas (IUPAC, Stock, Tradicional) donde corresponda: a) Cu₂O; b) SO₂; c) Fe(OH)₃; d) HClO₃; e) Pb(NO₂)₂.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">a) Cu₂O: IUPAC = óxido de dícobre; Stock = óxido de cobre (I); Trad = óxido cuproso.<br>b) SO₂: IUPAC = dióxido de azufre; Stock = óxido de azufre (IV); Trad = anhídrido sulfuroso.<br>c) Fe(OH)₃: Stock = hidróxido de hierro (III); Trad = hidróxido férrico.<br>d) HClO₃: ácido clórico (Cl en +5). [HClO₄=perclórico(+7); HClO₃=clórico(+5); HClO₂=cloroso(+3); HClO=hipocloroso(+1)].<br>e) Pb(NO₂)₂: NO₂⁻ = nitrito → nitrito de plomo (II) / nitrito plumboso.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Formulá las siguientes sales y verificá que la fórmula cumple la electroneutralidad (suma de cargas = 0): a) sulfato de hierro (III); b) perclorato plúmbico; c) fosfato de aluminio; d) carbonato cuproso; e) nitrito de cromo (III).</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">a) Fe(III)=+3; SO₄²⁻=−2. MCM(3,2)=6. 2 Fe(+3×2=+6) y 3 SO₄(−2×3=−6). → Fe₂(SO₄)₃. ✓ (+6−6=0)<br>b) Pb(IV)=+4 (plúmbico); ClO₄⁻=−1. 1 Pb(+4) y 4 ClO₄(−1×4=−4). → Pb(ClO₄)₄. ✓<br>c) Al(III)=+3; PO₄³⁻=−3. 1:1. → AlPO₄. ✓<br>d) Cu(I)=+1 (cuproso); CO₃²⁻=−2. 2 Cu(+1×2=+2) y 1 CO₃(−2). → Cu₂CO₃. ✓<br>e) Cr(III)=+3; NO₂⁻=−1. 1 Cr(+3) y 3 NO₂(−1×3=−3). → Cr(NO₂)₃. ✓</div></div></div>

<table class="sum"><tr><th>Familia</th><th>Fórmula genérica</th><th>Ejemplo → Nombre Stock</th></tr>
<tr><td>Óxido</td><td>M₂Oₙ / EₘOₙ</td><td>Fe₂O₃ → óxido de hierro (III)</td></tr>
<tr><td>Hidróxido</td><td>M(OH)ₙ</td><td>Fe(OH)₂ → hidróxido de hierro (II)</td></tr>
<tr><td>Hidrácido</td><td>HₓA (aq)</td><td>HCl (aq) → ácido clorhídrico</td></tr>
<tr><td>Oxoácido</td><td>Hₓ(EO_n)</td><td>H₂SO₄ → ácido sulfúrico</td></tr>
<tr><td>Sal</td><td>Mₓ(Aₙ)</td><td>Fe₂(SO₄)₃ → sulfato de hierro (III)</td></tr>
</table>
</div>` },

  505: { estimated_hours: 3, difficulty: 3, html: `<div class="cls">
<div class="hero"><div class="hero-label">Química I · U3</div>
<h1>Estequiometría</h1>
<p>La estequiometría permite calcular cuánto reacciona y cuánto se produce. Se basa en la ley de Lavoisier (masa se conserva) y en los coeficientes estequiométricos de la ecuación balanceada.</p></div>

<h2>El mol y la masa molar</h2>
<p>El <strong>mol</strong> es la unidad de cantidad de sustancia del SI: 1 mol = 6,022×10²³ partículas (átomos, moléculas, iones, etc.).</p>
<p>La <strong>masa molar M</strong> es la masa de 1 mol de una sustancia, numéricamente igual a la masa atómica/molecular en g/mol.</p>
<div class="box">H₂O: M = 2×1,00 + 16,0 = 18,0 g/mol → 1 mol H₂O = 18,0 g<br>CO₂: M = 12,0 + 2×16,0 = 44,0 g/mol → 1 mol CO₂ = 44,0 g<br>Fe₂O₃: M = 2×55,8 + 3×16,0 = 159,6 g/mol<br><br>Conversión: n = m/M → m = n × M → M = m/n</div>

<h2>Coeficientes estequiométricos e índice de reacción</h2>
<p>En la reacción: <code>3 NO₂ + H₂O → 2 HNO₃ + NO</code>, los coeficientes (3, 1, 2, 1) expresan la relación molar entre reactivos y productos. Se usa el <strong>índice de reacción</strong> para calcular cantidades:</p>
<div class="formula">nA/νA = nB/νB = nC/νC = ξ (índice de avance)</div>
<p>donde νA, νB, νC son los coeficientes estequiométricos. Ejemplo: si reaccionan 0,25 mol de NO₂, el índice ξ = 0,25/3 = 0,0833 mol. Entonces: n(H₂O) = 1 × 0,0833 = 0,083 mol; n(HNO₃) = 2 × 0,0833 = 0,167 mol.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — En 2H₂ + O₂ → 2H₂O, si reaccionan 4,0 mol de H₂, ¿cuántos mol de O₂ se consumen?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp505a','','Incorrecto. La relación estequiométrica es 2 mol H₂ por 1 mol O₂ (no 1:1). Con 4,0 mol H₂: n(O₂) = 4,0/2 = 2,0 mol.')">4,0 mol O₂</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp505a','Correcto. Coeficientes: H₂:O₂ = 2:1. ξ = 4,0 mol H₂ / 2 = 2,0 mol. n(O₂) = 1 × 2,0 = 2,0 mol. También se produce: n(H₂O) = 2 × 2,0 = 4,0 mol.','')">2,0 mol O₂</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp505a','','Incorrecto. Si n(O₂) = 8,0 mol, necesitaría 16 mol H₂, no 4. Revisá la relación molar.')">8,0 mol O₂</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp505a','','Incorrecto. Con 1,0 mol O₂ solo reaccionarían 2,0 mol H₂, no 4,0.')">1,0 mol O₂</button>
<div class="cp-fb" id="cp505a"></div></div>

<h2>Pureza</h2>
<p>Las sustancias reales contienen impurezas. La <strong>pureza (P)</strong> o riqueza es la fracción másica de sustancia activa en la muestra:</p>
<div class="formula">P = m(sustancia pura) / m(muestra) × 100%</div>
<p>En los cálculos estequiométricos, siempre se trabaja con la masa pura del reactivo: <code>m(pura) = m(muestra) × P/100</code>.</p>

<h2>Rendimiento de reacción</h2>
<p>En la práctica, la cantidad de producto obtenida es menor a la teórica (calculada estequiométricamente). El <strong>rendimiento (η)</strong> o rendimiento porcentual es:</p>
<div class="formula">η = m(obtenida) / m(teórica) × 100%</div>
<p>En un cálculo de rendimiento: primero calcular la masa teórica del producto (estequiometría pura), luego aplicar η para obtener la masa real.</p>

<h2>Reactivo limitante</h2>
<p>El <strong>reactivo limitante</strong> es el que se agota primero y determina la cantidad máxima de producto posible. El otro es el reactivo en exceso.</p>
<div class="box">Método para encontrar el reactivo limitante:<br>1. Calcular moles de cada reactivo disponible.<br>2. Dividir moles de cada reactivo por su coeficiente estequiométrico: n/ν.<br>3. El reactivo con menor n/ν es el limitante.<br>4. Usar el limitante para calcular el producto.</div>

<div class="cp"><div class="cp-q">🔍 Checkpoint — En N₂ + 3H₂ → 2NH₃, se dispone de 2,0 mol N₂ y 3,0 mol H₂. ¿Cuál es el reactivo limitante?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp505b','','Incorrecto. n(N₂)/ν(N₂) = 2,0/1 = 2,0. n(H₂)/ν(H₂) = 3,0/3 = 1,0. H₂ tiene menor cociente: H₂ es el limitante, no N₂.')">N₂</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp505b','Correcto. n/ν para N₂: 2,0/1 = 2,0. n/ν para H₂: 3,0/3 = 1,0. El menor cociente corresponde a H₂ → H₂ es el reactivo limitante. Se producen: n(NH₃) = 2 × (3,0/3) = 2,0 mol NH₃.','')">H₂</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp505b','','Incorrecto. Cuando hay reactivo limitante, uno de los reactivos NO se agota completamente. N₂ queda en exceso.')">Ambos se agotan simultáneamente</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp505b','','Incorrecto. NH₃ es el producto, no un reactivo en esta reacción.')">NH₃</button>
<div class="cp-fb" id="cp505b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">En la reacción: 3 NO₂ + H₂O → 2 HNO₃ + NO. A partir de 0,25 mol de NO₂: a) ¿Cuántos mol de HNO₃ se obtienen? b) ¿Qué masa de HNO₃ se produce? c) ¿Cuántos litros de NO se producen en CNPT? M(H)=1, M(N)=14, M(O)=16.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">ξ = 0,25 mol / 3 = 0,0833 mol.<br>a) n(HNO₃) = 2 × 0,0833 = 0,167 mol.<br>b) M(HNO₃) = 1+14+3×16 = 63,0 g/mol. m(HNO₃) = 0,167 × 63,0 = 10,5 g.<br>c) n(NO) = 1 × 0,0833 = 0,0833 mol. V(NO) en CNPT = 0,0833 × 22,4 L/mol = 1,87 L.</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Se dispone de 500 g de mineral de hierro con 80,0% (m/m) de Fe₂O₃. Se reduce con CO según: Fe₂O₃ + 3CO → 2Fe + 3CO₂. El rendimiento de la reacción es 90,0%. ¿Qué masa de Fe se obtiene? M(Fe)=55,8; M(O)=16,0.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">Paso 1 — masa de Fe₂O₃ pura: m = 500 × 0,800 = 400 g.<br>Paso 2 — moles de Fe₂O₃: M(Fe₂O₃) = 2×55,8+3×16,0 = 159,6 g/mol. n(Fe₂O₃) = 400/159,6 = 2,506 mol.<br>Paso 3 — moles teóricos de Fe: n(Fe) = 2 × 2,506 = 5,012 mol (coef. 1:2).<br>Paso 4 — masa teórica de Fe: m = 5,012 × 55,8 = 279,7 g.<br>Paso 5 — masa real con η=90%: m(real) = 279,7 × 0,90 = 251,7 g ≈ 252 g de Fe.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Se mezclan 92,0 g de NO₂ y 36,0 g de H₂O para la reacción: 3NO₂ + H₂O → 2HNO₃ + NO. a) Determiná el reactivo limitante. b) Calculá la masa de HNO₃ producido. c) ¿Cuántos gramos del reactivo en exceso sobran? M(N)=14,0; M(O)=16,0; M(H)=1,00.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">M(NO₂) = 14,0+2×16,0 = 46,0 g/mol. M(H₂O) = 18,0 g/mol.<br>n(NO₂) = 92,0/46,0 = 2,00 mol. n(H₂O) = 36,0/18,0 = 2,00 mol.<br>a) Cocientes n/ν: NO₂ → 2,00/3 = 0,667; H₂O → 2,00/1 = 2,00. Menor: NO₂ → <strong>reactivo limitante: NO₂</strong>.<br>b) ξ = 2,00/3 = 0,667 mol. n(HNO₃) = 2 × 0,667 = 1,333 mol. M(HNO₃) = 63,0 g/mol. m(HNO₃) = 1,333 × 63,0 = 84,0 g.<br>c) H₂O consumida: n(H₂O)_reac = 1 × 0,667 = 0,667 mol. H₂O inicial: 2,00 mol. Exceso: 2,00 − 0,667 = 1,333 mol = 1,333 × 18,0 = 24,0 g de H₂O en exceso.</div></div></div>

<table class="sum"><tr><th>Concepto</th><th>Fórmula</th><th>Aplicación</th></tr>
<tr><td>Mol</td><td>n = m/M</td><td>Convertir gramos a mol</td></tr>
<tr><td>Índice de reacción</td><td>ξ = nA/νA = nB/νB</td><td>Relacionar moles de distintas especies</td></tr>
<tr><td>Pureza</td><td>m(pura) = m(muestra) × P/100</td><td>Reactivos con impurezas</td></tr>
<tr><td>Rendimiento</td><td>η = m(real)/m(teórica) × 100%</td><td>Producto real vs. teórico</td></tr>
<tr><td>Reactivo limitante</td><td>min(n/ν) → limitante</td><td>Determina cantidad máx. de producto</td></tr>
</table>
</div>` },

  506: { estimated_hours: 3, difficulty: 3, html: `<div class="cls">
<div class="hero"><div class="hero-label">Química I · U3</div>
<h1>Estado gaseoso</h1>
<p>Los gases se comportan de manera predecible a bajas presiones. Cuatro variables de estado (P, V, T, n) están conectadas por las leyes de los gases, que culminan en la ecuación de estado del gas ideal: PV = nRT.</p></div>

<h2>Variables de estado y propiedades de los gases</h2>
<p>El comportamiento de un gas está determinado por cuatro variables: <strong>presión (P)</strong>, <strong>volumen (V)</strong>, <strong>temperatura absoluta (T)</strong> y <strong>cantidad de moles (n)</strong>. Los gases comparten propiedades características:</p>
<div class="box">1. Se adaptan a la forma y volumen del recipiente.<br>2. Son compresibles (hay espacios intermoleculares grandes).<br>3. Difunden espontáneamente (no hay fuerzas intermoleculares significativas).<br>4. Se dilatan al aumentar T (a P constante).<br><br>Unidades: P en atm o Pa; V en L o m³; T siempre en K; n en mol; R = 0,0821 L·atm/(mol·K).</div>
<p>Condiciones normales de presión y temperatura (CNPT): T = 273,15 K (0°C), P = 1 atm. En CNPT, 1 mol de gas ideal ocupa <strong>22,4 L</strong> (volumen molar).</p>

<h2>Ley de Boyle-Mariotte (T y n constantes)</h2>
<p>A temperatura constante, la presión y el volumen de una masa fija de gas son inversamente proporcionales.</p>
<div class="formula">P · V = constante → P₁V₁ = P₂V₂</div>
<p>Ejemplo: un gas a 2,00 atm ocupa 5,00 L. ¿Qué volumen ocupa a 4,00 atm (T constante)?<br>V₂ = P₁V₁/P₂ = (2,00 × 5,00)/4,00 = 2,50 L. Al duplicar la presión, el volumen se reduce a la mitad.</p>

<h2>Ley de Charles y Gay-Lussac (P y n constantes)</h2>
<p>A presión constante, el volumen de una masa fija de gas es directamente proporcional a la temperatura absoluta (en K).</p>
<div class="formula">V/T = constante → V₁/T₁ = V₂/T₂</div>
<p>También, a volumen constante: P/T = constante → P₁/T₁ = P₂/T₂ (2ª ley de Gay-Lussac).</p>
<p>Ejemplo: un gas ocupa 10,0 L a 300 K. ¿Qué volumen ocupa a 600 K (P constante)?<br>V₂ = V₁ × T₂/T₁ = 10,0 × 600/300 = 20,0 L.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — Un gas a 1,00 atm y 27°C ocupa 8,00 L. Se calienta a 127°C a presión constante. ¿Nuevo volumen?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp506a','','Incorrecto. Recordá: la temperatura SIEMPRE en Kelvin. 27°C = 300 K y 127°C = 400 K. No uses grados Celsius en la ley de Charles.')">10,7 L (usando °C directamente)</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp506a','Correcto. T₁ = 27+273 = 300 K; T₂ = 127+273 = 400 K. V₂ = V₁×T₂/T₁ = 8,00×400/300 = 10,67 L ≈ 10,7 L. La temperatura siempre en Kelvin.','')">10,7 L (usando K: 300→400 K)</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp506a','','Incorrecto. 16,0 L correspondería a duplicar el volumen (T doble). Pero T₁=300 K y T₂=400 K no es el doble.')">16,0 L</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp506a','','Incorrecto. El volumen aumenta al aumentar T a P constante (ley de Charles). No puede disminuir.')">6,00 L</button>
<div class="cp-fb" id="cp506a"></div></div>

<h2>Ecuación de estado del gas ideal: PV = nRT</h2>
<p>Combinando las leyes anteriores con la hipótesis de Avogadro se obtiene la ecuación de estado del gas ideal, que vincula las cuatro variables simultáneamente:</p>
<div class="formula">PV = nRT</div>
<div class="box">R = 0,0821 L·atm·mol⁻¹·K⁻¹ (cuando P en atm y V en litros)<br>R = 8,314 J·mol⁻¹·K⁻¹ (cuando P en Pa y V en m³)<br>T siempre en Kelvin. n en mol.<br><br>Forma intensiva (solo propiedades intensivas): P·Vm = RT, donde Vm = V/n es el volumen molar.</div>
<p>Ejemplo: ¿Cuántos moles de gas ideal hay en 5,00 L a 2,00 atm y 25°C?<br>n = PV/(RT) = (2,00 × 5,00)/(0,0821 × 298) = 10,0/24,47 = 0,409 mol.</p>

<h2>Ley de Dalton de las presiones parciales</h2>
<p>En una mezcla de gases que no reaccionan entre sí, la presión total es igual a la suma de las presiones parciales de cada componente:</p>
<div class="formula">P_total = P₁ + P₂ + P₃ + ... = Σ Pᵢ</div>
<p>La presión parcial de cada gas: Pᵢ = xᵢ × P_total, donde xᵢ = nᵢ/n_total es la fracción molar del gas i.</p>
<p>Ejemplo: mezcla de 10,9 mol N₂, 2,90 mol O₂ y 0,10 mol Ar a P_total = 15,0 atm.<br>n_total = 13,9 mol. x(N₂) = 10,9/13,9 = 0,784. P(N₂) = 0,784 × 15,0 = 11,8 atm.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — En PV=nRT, ¿por qué la temperatura DEBE estar en Kelvin?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp506b','','Incorrecto. La constante R se puede expresar en distintas unidades pero siempre requiere T en K. El motivo es otro.')">Porque R solo tiene valor numérico para grados Kelvin</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp506b','Correcto. Si T = 0°C se usara en Celsius, el producto nRT sería cero (aunque el gas siga ocupando volumen y ejerciendo presión). La escala Kelvin es absoluta: T=0 K es el cero absoluto real (energía cinética mínima). En Celsius, "0°C" no implica que las moléculas estén quietas.','')">Porque a 0°C el gas no tiene T=0: en Kelvin T=273 K, lo que evita que PV=0 cuando el gas aún existe</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp506b','','Incorrecto. La ecuación fue derivada originalmente con Kelvin. Usar Celsius es un error conceptual, no solo un problema de escala.')">Porque la ecuación fue derivada por Kelvin, que usaba esa escala</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp506b','','Incorrecto. El punto de ebullición del agua no tiene relación con la derivación de la ecuación de estado.')">Porque el punto de ebullición del agua es 373 K, no 100 K</button>
<div class="cp-fb" id="cp506b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Calculá el volumen ocupado por 6,65 mol de gas ideal a 150,15°C y 1,83 atm. ¿Cuál es el volumen molar a esas condiciones? R = 0,0821 L·atm·mol⁻¹·K⁻¹.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">T = 150,15 + 273,15 = 423,30 K.<br>PV = nRT → V = nRT/P = (6,65 × 0,0821 × 423,30) / 1,83<br>V = (231,1) / 1,83 = 126 L.<br>Volumen molar: Vm = V/n = 126/6,65 = 19,0 L/mol. (A P=1,83 atm y T=423,30 K el gas está más comprimido y caliente que en CNPT: Vm < 22,4 L/mol porque mayor P; > 22,4 L/mol si solo T, pero P mayor domina).</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Un gas a 3,00 atm y 100°C ocupa 10,0 L. Se lleva a 1,00 atm y 25°C. ¿Cuál es el nuevo volumen? Usá la ecuación combinada P₁V₁/T₁ = P₂V₂/T₂.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">T₁ = 100+273 = 373 K; T₂ = 25+273 = 298 K.<br>P₁V₁/T₁ = P₂V₂/T₂ → V₂ = P₁V₁T₂/(T₁P₂)<br>V₂ = (3,00 × 10,0 × 298)/(373 × 1,00) = 8940/373 = 23,97 L ≈ 24,0 L.<br>Verificación cualitativa: al bajar P de 3→1 atm, V aumenta 3×. Al bajar T de 373→298 K, V disminuye factor 298/373 ≈ 0,80. Neto: 10,0 × 3 × 0,80 ≈ 24,0 L ✓</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">En la reacción: 3NO₂(g) + H₂O(l) → 2HNO₃(aq) + NO(g). A partir de 225 L de NO₂ en CNPT: a) ¿Cuántos litros de NO(g) se producen en CNPT? b) ¿Qué masa de HNO₃ se produce? c) Si el NO producido se recoge a 25°C y 2,00 atm, ¿qué volumen ocupa? M(H)=1,00; M(N)=14,0; M(O)=16,0; R=0,0821 L·atm·mol⁻¹·K⁻¹.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">a) En CNPT, 1 mol gas = 22,4 L. n(NO₂) = 225/22,4 = 10,04 mol. ξ = 10,04/3 = 3,346 mol. n(NO) = 1 × 3,346 = 3,346 mol. V(NO) en CNPT = 3,346 × 22,4 = 75,0 L.<br>b) n(HNO₃) = 2 × 3,346 = 6,692 mol. M(HNO₃) = 1+14+48 = 63,0 g/mol. m(HNO₃) = 6,692 × 63,0 = 421,6 g ≈ 422 g.<br>c) n(NO) = 3,346 mol. T = 25+273 = 298 K. V = nRT/P = (3,346 × 0,0821 × 298)/2,00 = 81,87/2,00 = 40,9 L.</div></div></div>

<table class="sum"><tr><th>Ley</th><th>Variables constantes</th><th>Ecuación</th></tr>
<tr><td>Boyle-Mariotte</td><td>T, n</td><td>P₁V₁ = P₂V₂</td></tr>
<tr><td>Charles (V)</td><td>P, n</td><td>V₁/T₁ = V₂/T₂</td></tr>
<tr><td>Gay-Lussac (P)</td><td>V, n</td><td>P₁/T₁ = P₂/T₂</td></tr>
<tr><td>Avogadro</td><td>P, T</td><td>V₁/n₁ = V₂/n₂</td></tr>
<tr><td>Gas ideal</td><td>—</td><td>PV = nRT; R = 0,0821 L·atm/(mol·K)</td></tr>
<tr><td>Dalton</td><td>T, V</td><td>P_total = Σ Pᵢ = Σ xᵢ·P_total</td></tr>
</table>
</div>` },

  507: { estimated_hours: 2, difficulty: 2, html: `<div class="cls">
<div class="hero"><div class="hero-label">Química I · U4</div>
<h1>Soluciones</h1>
<p>Las soluciones son mezclas homogéneas que aparecen en casi todos los procesos químicos. Expresar y calcular la concentración correctamente —en %(m/m), %(m/v), molaridad o molalidad— es fundamental para preparar reactivos y resolver problemas de estequiometría en solución.</p></div>

<h2>Definición y terminología</h2>
<p>Una <strong>solución</strong> es una mezcla homogénea de dos o más componentes. El <strong>soluto</strong> es el componente en menor cantidad (el que se disuelve); el <strong>solvente</strong> es el componente mayoritario (generalmente agua, indicada como aq). La relación de masas: <code>m(solución) = m(soluto) + m(solvente)</code>.</p>
<div class="box">Notación usada: soluto = st; solvente = sv; solución = sc.<br>Ej.: al disolver 5 g de NaCl en 120 g de agua: m(sc) = 5+120 = 125 g; m(st) = 5 g; m(sv) = 120 g.</div>

<h2>Porcentaje masa/masa — %(m/m)</h2>
<p>Masa de soluto en gramos por cada 100 g de solución. Independiente de la temperatura (relación de masas).</p>
<div class="formula">%(m/m) = [m(st) / m(sc)] × 100</div>
<p>Ejemplo: 5 g NaCl en 120 g H₂O. m(sc) = 125 g. %(m/m) = (5/125)×100 = 4,00%.</p>

<h2>Porcentaje masa/volumen — %(m/v)</h2>
<p>Gramos de soluto por cada 100 cm³ (mL) de solución. Depende de la temperatura (el volumen cambia con T).</p>
<div class="formula">%(m/v) = [m(st) (g) / V(sc) (mL)] × 100</div>
<p>Ejemplo: 40 g NaCl en 100 mL de solución → 40% (m/v). La solución fisiológica de NaCl es 0,9% (m/v).</p>

<h2>Densidad y conversión entre unidades de concentración</h2>
<p>La <strong>densidad de la solución</strong> (ρ) permite convertir entre unidades basadas en masa y en volumen:</p>
<div class="formula">ρ = m(sc) / V(sc) → V(sc) = m(sc)/ρ o m(sc) = V(sc) × ρ</div>
<p>Ejemplo: solución de NaCl 40%(m/v), ρ = 1,25 g/cm³. Convertir a %(m/m):<br>40 g NaCl en 100 mL sc. m(sc) = 100 cm³ × 1,25 g/cm³ = 125 g. %(m/m) = (40/125)×100 = 32%.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — Si se disuelven 10,0 g de glucosa en 90,0 g de agua, ¿cuál es el %(m/m)?</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp507a','','Incorrecto. El %(m/m) se calcula respecto a la masa de SOLUCIÓN (soluto + solvente), no solo respecto al solvente. m(sc) = 10+90 = 100 g.')">10,0/90,0 × 100 = 11,1%</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp507a','Correcto. m(sc) = m(st) + m(sv) = 10,0 + 90,0 = 100,0 g. %(m/m) = (10,0/100,0) × 100 = 10,0%. En este caso coincide numéricamente que la masa de solución es 100 g, pero la fórmula siempre usa m(sc).','')">10,0/100,0 × 100 = 10,0%</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp507a','','Incorrecto. Eso sería el porcentaje de solvente, no de soluto. La fórmula pide la masa de soluto.')">90,0/100,0 × 100 = 90,0%</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp507a','','Incorrecto. No hay información de volumen para calcular %(m/v). Además, ρ ≠ 1 g/mL para esta solución en general.')">No se puede calcular sin la densidad</button>
<div class="cp-fb" id="cp507a"></div></div>

<h2>Molaridad (M)</h2>
<p>La <strong>molaridad (M o c)</strong> es la cantidad de moles de soluto por litro (dm³) de solución. Es la unidad más usada en estequiometría de soluciones.</p>
<div class="formula">M = n(st) [mol] / V(sc) [L] → n = M × V</div>
<p>Ejemplo: solución de HNO₃ 63%(m/m), ρ = 1,20 g/cm³. Calcular M:<br>En 100 g sc: 63 g HNO₃. V(sc) = 100/1,20 = 83,33 cm³ = 0,08333 L. n(HNO₃) = 63,0/63,0 g/mol = 1,00 mol. M = 1,00/0,08333 = 12,0 mol/L = 12,0 M.</p>
<p>La molaridad <em>depende de la temperatura</em> (V cambia con T), a diferencia del %(m/m) y la molalidad.</p>

<h2>Preparación y dilución de soluciones</h2>
<p>Para <strong>preparar</strong> una solución de molaridad M y volumen V: calcular la masa de soluto necesaria (m = M × V × MM), disolverla y llevar a volumen exacto (usando matraz aforado).</p>
<p>La <strong>dilución</strong> mantiene constante la cantidad de moles de soluto: al agregar solvente, M baja pero n se conserva.</p>
<div class="formula">M₁ × V₁ = M₂ × V₂ (para diluciones)</div>
<p>Ejemplo: ¿Qué volumen de HCl 12,0 M se necesita para preparar 500 mL de HCl 0,100 M?<br>V₁ = M₂V₂/M₁ = (0,100 × 0,500)/12,0 = 0,00417 L = 4,17 mL. Tomar 4,17 mL de HCl concentrado y diluir a 500 mL total.</p>

<div class="cp"><div class="cp-q">🔍 Checkpoint — Se preparan 250 mL de Al₂(SO₄)₃ 0,500 M. ¿Qué masa de Al₂(SO₄)₃ se necesita? M(Al)=27,0; M(S)=32,1; M(O)=16,0.</div>
<button class="cp-btn" onclick="cpAns(this,false,'cp507b','','Incorrecto. Antes de calcular la masa, hay que calcular los moles. n = M × V = 0,500 × 0,250 = 0,125 mol. Masa molar de Al₂(SO₄)₃ = 342,2 g/mol.')">0,500 g</button>
<button class="cp-btn" onclick="cpAns(this,true,'cp507b','Correcto. n = M × V = 0,500 mol/L × 0,250 L = 0,125 mol. M(Al₂(SO₄)₃) = 2×27,0 + 3×(32,1+4×16,0) = 54,0+3×96,1 = 54,0+288,3 = 342,3 g/mol. m = 0,125 × 342,3 = 42,8 g.','')">42,8 g</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp507b','','Incorrecto. 171 g correspondería a 0,500 mol × 342 = 171 g, pero el volumen es 250 mL (0,250 L), no 1 L.')">171 g</button>
<button class="cp-btn" onclick="cpAns(this,false,'cp507b','','Incorrecto. 85,5 g correspondería a preparar 500 mL de solución 0,500 M, no 250 mL.')">85,5 g</button>
<div class="cp-fb" id="cp507b"></div></div>

<div class="ej-section"><h2>Ejercicios</h2>
<div class="ej-card"><div class="ej-label easy">Básico</div><div class="ej-text">Una solución de H₂SO₄ es 30%(m/m) y tiene densidad ρ = 1,22 g/mL. a) ¿Cuál es el %(m/v)? b) ¿Cuántos gramos de H₂SO₄ hay en 200 mL de esta solución? M(H)=1,00; M(S)=32,1; M(O)=16,0.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">a) %(m/v): en 100 mL de sc, m(sc) = 100 × 1,22 = 122 g. m(H₂SO₄) = 122 × 0,30 = 36,6 g. %(m/v) = 36,6 g/100 mL = 36,6%(m/v).<br>b) En 200 mL: m(sc) = 200 × 1,22 = 244 g. m(H₂SO₄) = 244 × 0,30 = 73,2 g. (O bien: 73,2 = 2 × 36,6 g por porcentaje m/v).</div></div>

<div class="ej-card"><div class="ej-label med">Intermedio</div><div class="ej-text">Se tiene una solución de HNO₃ (ácido nítrico) 63%(m/m) con densidad ρ = 1,20 g/cm³. a) Calculá la molaridad de esta solución. b) ¿Qué volumen de esta solución concentrada se necesita para preparar 1,00 L de solución 2,00 M de HNO₃? M(H)=1,00; M(N)=14,0; M(O)=16,0.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">M(HNO₃) = 1,00+14,0+3×16,0 = 63,0 g/mol.<br>a) Base de cálculo: 100 g de sc. m(HNO₃) = 63,0 g. V(sc) = m(sc)/ρ = 100/1,20 = 83,33 mL = 0,08333 L. n(HNO₃) = 63,0/63,0 = 1,00 mol. M = 1,00/0,08333 = 12,0 M.<br>b) Dilución: M₁V₁ = M₂V₂ → V₁ = M₂V₂/M₁ = (2,00 × 1,00)/12,0 = 0,1667 L = 167 mL. Tomar 167 mL del HNO₃ concentrado y completar a 1,00 L con agua destilada.</div></div>

<div class="ej-card"><div class="ej-label hard">Difícil</div><div class="ej-text">Reacción: NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l). Se mezclan 250 mL de NaOH 0,200 M con 150 mL de HCl 0,400 M. a) ¿Cuál es el reactivo limitante? b) ¿Qué masa de NaCl se produce? c) ¿Cuántos milimoles del reactivo en exceso sobran? M(Na)=23,0; M(Cl)=35,5.</div>
<button class="ej-show" onclick="toggleSol(this)">Ver solución</button>
<div class="ej-sol">a) n(NaOH) = 0,200 M × 0,250 L = 0,0500 mol = 50,0 mmol. n(HCl) = 0,400 × 0,150 = 0,0600 mol = 60,0 mmol. Coeficientes 1:1. Cocientes n/ν: NaOH→50,0; HCl→60,0. Menor: <strong>NaOH es el reactivo limitante</strong>.<br>b) n(NaCl) = n(NaOH) = 50,0 mmol = 0,0500 mol. M(NaCl) = 23,0+35,5 = 58,5 g/mol. m(NaCl) = 0,0500 × 58,5 = 2,93 g.<br>c) HCl consumido: 50,0 mmol. HCl inicial: 60,0 mmol. Exceso: 60,0 − 50,0 = 10,0 mmol de HCl.</div></div></div>

<table class="sum"><tr><th>Unidad</th><th>Fórmula</th><th>Depende de T</th></tr>
<tr><td>%(m/m)</td><td>m(st)/m(sc) × 100</td><td>No (relación de masas)</td></tr>
<tr><td>%(m/v)</td><td>m(st)[g] / V(sc)[mL] × 100</td><td>Sí (V cambia con T)</td></tr>
<tr><td>Molaridad M</td><td>n(st)[mol] / V(sc)[L]</td><td>Sí</td></tr>
<tr><td>Densidad ρ</td><td>m(sc) / V(sc)</td><td>Sí</td></tr>
<tr><td>Dilución</td><td>M₁V₁ = M₂V₂</td><td>n(st) se conserva</td></tr>
</table>
</div>` },



}; // end CLASES_INTRO (401-507)

// Merge into single CLASES lookup
Object.assign(CLASES, CLASES_INTRO);

// ============================================================
// EXÁMENES — INTRODUCCIÓN A LA INGENIERÍA
// 4 exámenes de unidad (8 preguntas c/u) + 1 examen final (15 preguntas)
// ============================================================

const EXAMENES_UNIDAD_INTRO = {

  // ── EXAMEN U1: La Racionalidad ──────────────────────────────
  "4_0": { html: `<div class="cls">
<h2>Examen — U1: La Racionalidad</h2>
<div id="exam4_0_score" style="display:none;background:rgba(124,106,247,0.1);border:1px solid var(--accent);border-radius:8px;padding:16px;margin-bottom:16px;text-align:center">
  <div style="font-size:32px;font-weight:800;font-family:Syne,sans-serif" id="exam4_0_nota">—</div>
  <div style="font-size:13px;color:var(--text2)" id="exam4_0_fb">—</div>
</div>

<div class="cp"><div class="cp-q">1. ¿Cuál es la diferencia central entre la racionalidad técnica y la racionalidad científica?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_1','','Incorrecto. Ambas son formas rigurosas de razonar; la distinción no es de rigor sino de orientación y criterio de éxito.')">La científica es rigurosa y la técnica no</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_0_1','Correcto. La racionalidad científica busca explicar por qué las cosas son como son (criterio: verdad/falsedad). La técnica busca resolver problemas con máxima eficiencia (criterio: funciona/no funciona, es eficiente/no). Son lógicas diferentes, no jerarquizadas.','')">La científica busca verdad; la técnica busca soluciones eficientes</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_1','','Incorrecto. La ingeniería usa conocimiento científico pero su finalidad no es producir ciencia. Un ingeniero puede usar la ecuación de Bernoulli sin que su objetivo sea probar esa ecuación.')">La técnica es ciencia aplicada, por lo tanto comparten el mismo tipo de racionalidad</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_1','','Incorrecto. La heurística es una herramienta de la racionalidad técnica, no su definición central. La diferencia fundamental está en el criterio de éxito.')">La técnica usa heurística y la científica no usa ningún tipo de atajo racional</button>
<div class="cp-fb" id="ex4_0_1"></div></div>

<div class="cp"><div class="cp-q">2. El "estado del arte" en ingeniería es relevante porque:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_2','','Incorrecto. No es sobre calidad de los ingenieros. El estado del arte define el horizonte de lo técnicamente posible en un momento dado: qué materiales, procesos y conocimientos están disponibles.')">Permite saber qué ingenieros son los mejores en cada especialidad</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_2','','Incorrecto. El estado del arte no es un manual normativo. Describe el conocimiento técnico acumulado, que es el horizonte de lo concebible para los diseñadores de una época.')">Fija los estándares normativos que los diseños deben cumplir legalmente</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_0_2','Correcto. El estado del arte delimita el horizonte de lo posible: qué materiales existen, qué procesos son conocidos, qué herramientas están disponibles. Por eso los diseños de una misma época se parecen, y las rupturas ocurren cuando ese horizonte se amplía.','')">Define qué soluciones son técnicamente concebibles en un momento histórico dado</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_2','','Incorrecto. El presupuesto es una restricción económica importante, pero el estado del arte define el horizonte de lo técnicamente pensable, independientemente del presupuesto disponible.')">Indica el presupuesto máximo disponible para un proyecto de ingeniería</button>
<div class="cp-fb" id="ex4_0_2"></div></div>

<div class="cp"><div class="cp-q">3. La heurística en ingeniería puede describirse mejor como:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_3','','Incorrecto. La heurística no garantiza resultados óptimos. Es un conjunto de atajos racionales que permite encontrar soluciones buenas cuando el óptimo calculable no existe o es muy costoso de encontrar.')">Un método que garantiza encontrar la solución óptima a cualquier problema</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_0_3','Correcto. La heurística son las reglas prácticas y atajos racionales, basados en experiencia acumulada, que guían al ingeniero cuando no hay una solución óptima calculable de antemano. Distingue al experto del novato: no tiene más fórmulas, tiene mejores criterios de búsqueda.','')">Un conjunto de reglas prácticas y experiencia acumulada que guía la búsqueda cuando no hay óptimo calculable</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_3','','Incorrecto. La heurística no es improvisación. Es conocimiento sistemático sobre cómo buscar soluciones, acumulado por experiencia. Es lo contrario de improvisar.')">La improvisación creativa del ingeniero ante problemas nuevos</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_3','','Incorrecto. Las fórmulas matemáticas son herramientas de cálculo exacto, no heurísticas. La heurística opera justamente cuando las fórmulas no alcanzan para decidir.')">El conjunto de fórmulas matemáticas que el ingeniero debe memorizar</button>
<div class="cp-fb" id="ex4_0_3"></div></div>

<div class="cp"><div class="cp-q">4. Según Giuliano, la formación en ingeniería históricamente atravesó tres etapas. ¿Cuál es la tercera demanda que identifica para la formación actual?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_4','','Incorrecto. La segunda etapa es la incorporación de ciencias exactas (por qué funcionan). La primera es aprender cómo funcionan los mecanismos.')">Aprender cómo funcionan los mecanismos técnicos</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_4','','Incorrecto. Esta es la segunda etapa: incorporar las ciencias exactas para entender por qué los mecanismos funcionan como lo hacen.')">Incorporar las bases científicas para explicar por qué funcionan los mecanismos</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_0_4','Correcto. Giuliano identifica una tercera demanda: entender en qué contexto cultural, social y político se insertan las soluciones técnicas. No solo el cómo (primera etapa) ni el por qué (segunda etapa) sino el para qué, para quiénes y con qué consecuencias.','')">Comprender el contexto cultural, social y político en que se insertan las soluciones técnicas</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_4','','Incorrecto. La gestión de proyectos es una habilidad importante, pero Giuliano se refiere a una demanda formativa más profunda: la reflexión tecnológica sistemática sobre las implicancias culturales del hacer ingenieril.')">Dominar la gestión de proyectos y las metodologías ágiles</button>
<div class="cp-fb" id="ex4_0_4"></div></div>

<div class="cp"><div class="cp-q">5. ¿Cuál de las siguientes afirmaciones sobre el "imperativo de eficiencia" es correcta, según el programa de la materia?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_5','','Incorrecto. El imperativo de eficiencia es el criterio central de la racionalidad técnica, no un factor secundario.')">Es un criterio secundario; lo principal en ingeniería es la seguridad estructural</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_5','','Incorrecto. La eficiencia es relativa a un objetivo: eficiencia en consumo de materiales, en tiempo, en costo, en energía. Qué tipo de eficiencia importa depende de quién define los objetivos y con qué valores.')">Define objetivamente qué es un buen diseño, independientemente de los valores del diseñador</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_0_5','Correcto. El imperativo de la eficiencia es el criterio central de evaluación en ingeniería. Pero "eficiencia respecto a qué" no se deduce sola: depende de qué objetivos se priorizan y qué restricciones se definen, lo que involucra juicios de valor.','')">Es el criterio central de la racionalidad técnica, pero "eficiencia respecto a qué" involucra juicios de valor</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_5','','Incorrecto. La eficiencia es el criterio técnico por excelencia. Lo que el programa cuestiona no es la eficiencia sino la pretensión de que es el único criterio relevante.')">Ha sido superado en la ingeniería moderna por criterios de innovación y creatividad</button>
<div class="cp-fb" id="ex4_0_5"></div></div>

<div class="cp"><div class="cp-q">6. El colapso del puente Tacoma Narrows (1940) es útil para ilustrar el concepto de "estado del arte como horizonte de lo posible" porque:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_6','','Incorrecto. El ingeniero Leon Moisseiff siguió correctamente los estándares de diseño vigentes. El fallo no fue por negligencia individual.')">Muestra que el ingeniero fue negligente y no siguió las normas de diseño</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_0_6','Correcto. Moisseiff aplicó la teoría deflectiva vigente en su época, que no incluía modelos aerodinámicos para puentes. La aerodinámica estructural no existía como opción de diseño. El fallo no fue individual sino del horizonte técnico colectivo disponible en ese momento.','')">Ilustra que el fallo fue de los límites del conocimiento técnico de la época, no del ingeniero individual</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_6','','Incorrecto. El puente colapsó por resonancia eólica, un fenómeno físico no contemplado en los modelos de diseño vigentes. No fue un problema de materiales de mala calidad.')">Demuestra que los materiales de construcción eran de mala calidad en esa época</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_6','','Incorrecto. El puente fue más económico y esbelto que los diseños anteriores, aplicando la teoría vigente. El problema fue que esa teoría no contemplaba efectos aerodinámicos.')">Prueba que el ahorro en costos siempre lleva a diseños inseguros</button>
<div class="cp-fb" id="ex4_0_6"></div></div>

<div class="cp"><div class="cp-q">7. La racionalidad técnica es "instrumental-práctica". ¿Qué implica eso?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_7','','Incorrecto. Instrumental no significa manipuladora. Significa orientada a fines concretos, que usa medios (instrumentos) para lograr objetivos definidos.')">Que la ingeniería es instrumental en el sentido de ser manipuladora de la sociedad</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_0_7','Correcto. "Instrumental" significa orientada a fines: usa medios (instrumentos, tecnologías) para lograr objetivos concretos. "Práctica" significa que evalúa por resultados en el mundo real, no por verdad abstracta. El criterio de éxito es si la solución funciona, no si describe correctamente la realidad.','')">Que está orientada a fines concretos y se evalúa por si la solución funciona, no por si describe correctamente la realidad</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_7','','Incorrecto. La ingeniería no "aplica" la ciencia mecánicamente. Usa conocimiento científico pero opera con una lógica diferente: resuelve problemas específicos con recursos dados, no descubre leyes universales.')">Que aplica mecánicamente leyes científicas a situaciones concretas</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_7','','Incorrecto. Los instrumentos de medición son herramientas, no la definición de "racionalidad instrumental". El término se refiere al tipo de lógica, no a los instrumentos físicos que se usan.')">Que se basa fundamentalmente en el uso de instrumentos de medición precisos</button>
<div class="cp-fb" id="ex4_0_7"></div></div>

<div class="cp"><div class="cp-q">8. Giuliano señala que "la ponderación del conjunto de resultados no es ajena a las concepciones antropológicas e ideológicas". En el contexto de U1, esto significa que:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_8','','Incorrecto. El diseño puede ser ideológicamente influido sin que el ingeniero lo note. De hecho, ese es el problema más grave: las influencias invisibles.')">Los ingenieros deben tener una ideología política explícita para diseñar bien</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_8','','Incorrecto. Reconocer la dimensión valorativa de la ingeniería no la hace subjetiva ni inválida. El objetivo es hacerla más consciente de sus propios supuestos, no abandonar el rigor técnico.')">La ingeniería es subjetiva y sus conclusiones no son válidas</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_0_8','Correcto. La elección de qué criterios de éxito usar y cuánto peso darles no surge de cálculos técnicos. Refleja concepciones sobre qué vale más en el mundo. Un ingeniero que maximiza rentabilidad económica sobre impacto ambiental está tomando una decisión valorativa, aunque la llame técnica.','')">La elección de qué criterios de éxito usar y cuánto peso darles refleja concepciones sobre qué vale más en el mundo</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_0_8','','Incorrecto. Las matemáticas son herramientas; no determinan qué se optimiza. Que se use una fórmula de optimización no dice nada sobre qué variable se eligió optimizar ni por qué.')">Las matemáticas usadas en ingeniería contienen sesgos ideológicos que las invalidan</button>
<div class="cp-fb" id="ex4_0_8"></div></div>

<button onclick="calcExamScore('4_0',8)" style="background:var(--accent);color:#fff;border:none;border-radius:6px;padding:10px 24px;font-size:13px;font-weight:600;cursor:pointer;margin-top:16px;width:100%">Ver mi nota</button>
</div>` },

  // ── EXAMEN U2: La Metodología ───────────────────────────────
  "4_1": { html: `<div class="cls">
<h2>Examen — U2: La Metodología</h2>
<div id="exam4_1_score" style="display:none;background:rgba(124,106,247,0.1);border:1px solid var(--accent);border-radius:8px;padding:16px;margin-bottom:16px;text-align:center">
  <div style="font-size:32px;font-weight:800;font-family:Syne,sans-serif" id="exam4_1_nota">—</div>
  <div style="font-size:13px;color:var(--text2)" id="exam4_1_fb">—</div>
</div>

<div class="cp"><div class="cp-q">1. El "principio de indeterminación de la relación forma-función" afirma que:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_1','','Incorrecto. Lo contrario: para una función hay muchas formas posibles. La relación no es biunívoca.')">Para cada función técnica existe una única forma óptima que la realiza</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_1_1','Correcto. Una misma función puede realizarse con distintas formas. Eso significa que la elección de una forma concreta no está técnicamente determinada: involucra valores, intereses y restricciones que van más allá de la pura optimización técnica.','')">Una misma función puede realizarse con distintas formas, por lo que la elección de forma implica decisiones no meramente técnicas</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_1','','Incorrecto. El principio no dice que cualquier forma sirva para cualquier función. Hay restricciones físicas que acotan las posibilidades, pero dentro de ese espacio hay múltiples opciones.')">Cualquier forma puede cumplir cualquier función con los materiales adecuados</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_1','','Incorrecto. Las formas pueden ser muy similares entre épocas por razones técnicas o culturales, pero eso no contradice el principio: varias formas siguen siendo posibles para la misma función.')">Las formas técnicas de una época son idénticas en todos los contextos culturales</button>
<div class="cp-fb" id="ex4_1_1"></div></div>

<div class="cp"><div class="cp-q">2. En el modelo de cinco etapas del diseño, la "identificación del problema" es políticamente relevante porque:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_2','','Incorrecto. El ingeniero puede participar en la identificación pero no tiene autoridad exclusiva. La relevancia política está en quién tiene poder para que algo sea reconocido como problema.')">El ingeniero tiene la autoridad técnica exclusiva para definir qué es un problema</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_1_2','Correcto. Los problemas no existen como hechos objetivos: son reconocidos como tales por grupos con poder para ponerlos en agenda. Quien define el problema decide implícitamente para quién se diseña y qué intereses se priorizan. Es la etapa donde más poder se ejerce, a menudo de forma invisible.','')">Define para quién se diseña: solo se resuelven los problemas que ciertos grupos con poder logran poner en agenda</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_2','','Incorrecto. Los problemas no se identifican solos ni son objetivos. Son construidos socialmente por grupos que tienen capacidad de hacerlos visibles.')">Los problemas técnicos son objetivos y se identifican solos, sin necesidad de grupos sociales</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_2','','Incorrecto. La identificación del problema es previa a la definición de requerimientos del cliente. El cliente define requerimientos solo después de que alguien ya decidió que hay un problema a resolver.')">Es la etapa donde el cliente define sus requerimientos técnicos específicos</button>
<div class="cp-fb" id="ex4_1_2"></div></div>

<div class="cp"><div class="cp-q">3. ¿Qué es la "flexibilidad interpretativa" de un artefacto técnico?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_3','','Incorrecto. La flexibilidad interpretativa no es sobre los materiales. Es sobre los significados y usos que distintos grupos sociales pueden asignar al artefacto.')">La capacidad del artefacto de ser fabricado con distintos materiales según disponibilidad</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_1_3','Correcto. La flexibilidad interpretativa describe que distintos grupos sociales pueden darle significados y usos distintos al mismo artefacto, incluso diferentes a los que el diseñador previó. Es máxima en las etapas tempranas de desarrollo y se reduce cuando el artefacto se "estabiliza".','')">La capacidad de distintos grupos sociales de asignar distintos significados y usos al mismo artefacto</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_3','','Incorrecto. La posibilidad de modificar el diseño original es un criterio de las tecnologías entrañables de Parselis (apertura), no la flexibilidad interpretativa de Pinch y Bijker.')">La capacidad del usuario de modificar el diseño original del artefacto</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_3','','Incorrecto. La vida útil es una característica técnica-material, no social. La flexibilidad interpretativa es sobre cómo los grupos leen y usan el artefacto, no sobre cuánto dura físicamente.')">La vida útil del artefacto antes de que deba ser reemplazado</button>
<div class="cp-fb" id="ex4_1_3"></div></div>

<div class="cp"><div class="cp-q">4. Giuliano señala en el Cierre que "el primer diseño que llega a la calle limita en gran medida las posibilidades de resignificación". Esto implica que:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_4','','Incorrecto. Giuliano no dice que la resignificación sea imposible, sino que el primer diseño la limita. Hay ejemplos de artefactos que se resignificaron (como la bicicleta), pero es difícil.')">Una vez que un artefacto llega al mercado, es imposible resignificarlo socialmente</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_4','','Incorrecto. El primer diseño que llega a la calle puede no ser el mejor técnicamente, pero por efecto de red, inercia y costos de cambio, tiende a estabilizarse. El mercado no garantiza que triunfe el mejor diseño.')">El primer diseño siempre es el técnicamente superior, por eso gana en el mercado</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_1_4','Correcto. El primer diseño crea inercias: genera hábitos de uso, espectativas, ecosistemas de productos complementarios y modelos de negocio difíciles de cambiar. Por eso la responsabilidad del ingeniero es especialmente alta en las etapas tempranas de diseño.','')">Los ingenieros tienen especial responsabilidad en etapas tempranas, porque sus elecciones crean inercias difíciles de revertir</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_4','','Incorrecto. Los artefactos más complejos (con más componentes) no son necesariamente más difíciles de resignificar. La dificultad viene de las inercias sociales, económicas y culturales que se generan alrededor del primer diseño.')">Los artefactos más complejos técnicamente son siempre más difíciles de resignificar</button>
<div class="cp-fb" id="ex4_1_4"></div></div>

<div class="cp"><div class="cp-q">5. ¿Cuál de estas afirmaciones sobre el constructivismo SCOT es correcta?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_5','','Incorrecto. El constructivismo no niega la física. Dice que dentro del espacio de lo físicamente posible, qué se construye depende de negociaciones sociales.')">Afirma que las restricciones físicas son socialmente construidas y por lo tanto arbitrarias</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_5','','Incorrecto. Los ingenieros son uno de los grupos relevantes, pero no el único. El constructivismo incluye usuarios, afectados, reguladores y opositores.')">Sostiene que solo los ingenieros determinan la forma final de los artefactos</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_1_5','Correcto. El constructivismo SCOT afirma que la forma concreta que adopta un artefacto resulta de negociaciones entre grupos sociales con distintas interpretaciones y poder diferencial. No niega la física; opera dentro de ella.','')">Propone que la forma de los artefactos resulta de negociaciones entre grupos sociales con distintas interpretaciones</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_5','','Incorrecto. El constructivismo no implica que la tecnología sea mala. Implica que es una construcción social, y por lo tanto podría ser distinta.')">Concluye que toda tecnología es intrínsecamente mala porque está socialmente construida</button>
<div class="cp-fb" id="ex4_1_5"></div></div>

<div class="cp"><div class="cp-q">6. El proceso de "cierre" de un artefacto en el análisis constructivista ocurre cuando:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_6','','Incorrecto. El cierre no es un evento técnico sino social: ocurre cuando los grupos sociales dejan de disputar el significado del artefacto, no cuando se termina el proceso de fabricación.')">El proceso de fabricación industrial del artefacto está completo</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_1_6','Correcto. El cierre ocurre cuando la flexibilidad interpretativa se reduce porque los grupos sociales llegan (o son forzados) a una interpretación dominante del artefacto. Puede suceder por consenso, por redefinición del problema, o por imposición del grupo más poderoso.','')">La flexibilidad interpretativa se reduce porque los grupos sociales convergen en una interpretación dominante</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_6','','Incorrecto. La patente protege la propiedad intelectual pero no determina el cierre social de un artefacto. Un artefacto puede tener patente y seguir siendo disputado socialmente en su significado.')">La empresa patenta el diseño y obtiene derechos de propiedad intelectual</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_6','','Incorrecto. Ningún artefacto llega a "perfección técnica" en sentido absoluto. El cierre es un fenómeno social, no una propiedad técnica del objeto.')">El artefacto alcanza la perfección técnica y ya no puede mejorarse</button>
<div class="cp-fb" id="ex4_1_6"></div></div>

<div class="cp"><div class="cp-q">7. En el modelo de cinco etapas, la evaluación y selección de alternativas es donde se produce la "ponderación del barrilete". ¿Por qué esto es relevante?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_7','','Incorrecto. El barrilete tiene cuatro vértices: técnico, económico, ambiental y cultural/social. En la evaluación se decide cuánto peso darle a cada uno, lo cual involucra juicios de valor.')">Porque en esa etapa se elige la alternativa más barata, que siempre es la mejor</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_1_7','Correcto. Al evaluar alternativas, el ingeniero asigna peso a distintos criterios (eficiencia técnica, costo, impacto ambiental, equidad social). Esa asignación de pesos no surge de cálculos técnicos: refleja valores y concepciones sobre qué importa más. Es donde las decisiones implícitas del diseño se vuelven concretas.','')">Porque la asignación de peso a distintos criterios de evaluación refleja valores y no es puramente técnica</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_7','','Incorrecto. La evaluación no elimina las restricciones; trabaja dentro de ellas. Las restricciones son el marco; la evaluación elige entre las alternativas que las cumplen.')">Porque es la etapa donde se eliminan todas las restricciones del diseño</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_7','','Incorrecto. No hay un único criterio objetivo. Si hubiera un criterio único y objetivo, no habría necesidad de ponderar ni de un modelo como el del barrilete.')">Porque establece un criterio técnico único y objetivo para comparar alternativas</button>
<div class="cp-fb" id="ex4_1_7"></div></div>

<div class="cp"><div class="cp-q">8. ¿Qué diferencia a la perspectiva constructivista SCOT del "determinismo social de la tecnología" que critica Winner?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_8','','Incorrecto. Tanto el determinismo social como el constructivismo reconocen el rol de los factores sociales. La diferencia es más sutil: el constructivismo da más agencia a los actores y más importancia a las características propias de los artefactos.')">El constructivismo niega los factores sociales; el determinismo social los afirma</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_1_8','Correcto. El determinismo social dice que las fuerzas sociales "influyen" en la tecnología, pero deja a la tecnología como un objeto pasivo. El constructivismo dice que la tecnología es literalmente una construcción social: sus características no existen previas a la negociación entre grupos. Va más lejos que el determinismo social.','')">El constructivismo no solo dice que lo social influye en la tecnología sino que la constituye; va más allá del determinismo social</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_8','','Incorrecto. Ambas perspectivas se preocupan por cómo la tecnología afecta la sociedad. La diferencia está en el peso que dan a los factores sociales en la constitución de la tecnología misma.')">El constructivismo solo estudia los efectos de la tecnología en la sociedad, no al revés</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_1_8','','Incorrecto. Ambas son perspectivas académicas legítimas con evidencia empírica. No es una cuestión de evidencia sino de marco teórico.')">El determinismo social tiene evidencia empírica; el constructivismo es solo teoría sin evidencia</button>
<div class="cp-fb" id="ex4_1_8"></div></div>

<button onclick="calcExamScore('4_1',8)" style="background:var(--accent);color:#fff;border:none;border-radius:6px;padding:10px 24px;font-size:13px;font-weight:600;cursor:pointer;margin-top:16px;width:100%">Ver mi nota</button>
</div>` },

  // ── EXAMEN U3: La Cultura ───────────────────────────────────
  "4_2": { html: `<div class="cls">
<h2>Examen — U3: La Cultura</h2>
<div id="exam4_2_score" style="display:none;background:rgba(124,106,247,0.1);border:1px solid var(--accent);border-radius:8px;padding:16px;margin-bottom:16px;text-align:center">
  <div style="font-size:32px;font-weight:800;font-family:Syne,sans-serif" id="exam4_2_nota">—</div>
  <div style="font-size:13px;color:var(--text2)" id="exam4_2_fb">—</div>
</div>

<div class="cp"><div class="cp-q">1. Los puentes de Robert Moses en Long Island son un ejemplo de "planes técnicos como formas de orden" porque:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_1','','Incorrecto. Los puentes no colapsaron. Eran estructuralmente sólidos. El problema era su intención política: excluir el transporte público para limitar el acceso a personas negras y de bajos recursos.')">Eran estructuralmente deficientes y colapsaron bajo el peso del tráfico</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_2_1','Correcto. Moses diseñó puentes de 9 pies de alto (los autobuses miden 12 pies) para que los parques de Long Island no fueran accesibles en transporte público. Así implementó una política de exclusión racial sin necesidad de legislarla explícitamente. El cemento hizo la ley.','')">Su diseño técnico (altura de 9 pies) implementaba una política de exclusión racial sin necesidad de legislación</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_1','','Incorrecto. Hay muchos puentes con restricciones de altura por razones técnicas legítimas. Lo que hace a los puentes de Moses casos de "política en artefactos" es la intención documentada de exclusión social, no la restricción en sí.')">Cualquier puente con restricciones de altura es automáticamente un instrumento de exclusión</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_1','','Incorrecto. Los puentes fueron diseñados específicamente para Long Island, que no tenía ese problema de inundaciones. La intención documentada es la exclusión del transporte público.')">Fueron diseñados para evitar inundaciones en zonas costeras</button>
<div class="cp-fb" id="ex4_2_1"></div></div>

<div class="cp"><div class="cp-q">2. ¿Qué distingue a las "tecnologías inherentemente políticas" (Tipo 2 de Winner) de los "planes técnicos como formas de orden" (Tipo 1)?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_2','','Incorrecto. Ambos tipos pueden ser creados tanto por el Estado como por actores privados. Moses era un funcionario público, pero el caso de McCormick involucra una empresa privada.')">El Tipo 1 es creado por el Estado y el Tipo 2 por actores privados</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_2_2','Correcto. El Tipo 1 requiere intención: alguien diseñó el artefacto para producir un efecto político concreto (Moses y sus puentes, McCormick y sus máquinas). El Tipo 2 no requiere intención: ciertas tecnologías por su escala o naturaleza son estructuralmente compatibles con formas autoritarias de gestión, independientemente de quién las diseñó.','')">El Tipo 1 requiere intención deliberada del diseñador; el Tipo 2 es una compatibilidad estructural independiente de la intención</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_2','','Incorrecto. Ambos tipos pueden generar efectos negativos o positivos. Winner no hace una distinción de valor moral sino de mecanismo: intencional vs. estructural.')">El Tipo 1 siempre produce efectos positivos y el Tipo 2 siempre negativos</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_2','','Incorrecto. Ambos tipos pueden existir en distintas escalas. La energía nuclear es grande pero los puentes de Moses son infraestructura de escala media. La distinción no es de escala sino de mecanismo.')">El Tipo 1 se aplica a tecnologías pequeñas y el Tipo 2 a sistemas de gran escala</button>
<div class="cp-fb" id="ex4_2_2"></div></div>

<div class="cp"><div class="cp-q">3. ¿Por qué Winner critica a los defensores de la energía nuclear que creen poder controlar sus efectos sociales adversos con cambios de diseño?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_3','','Incorrecto. Winner no niega los riesgos de contaminación radiactiva, pero su crítica principal es sobre las implicancias políticas de la escala y el tipo de gestión que requiere la nuclear, no sobre accidentes.')">Porque los reactores nucleares siempre contaminan independientemente del diseño</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_2_3','Correcto. Winner argumenta que la energía nuclear es una tecnología inherentemente política: su gestión segura requiere control centralizado, vigilancia del plutonio y restricción de libertades civiles que son estructurales a la escala de la tecnología. Eso no puede cambiarse solo con mejoras de diseño del reactor.','')">Porque ignoran que la escala de la nuclear requiere formas de control centralizado y restricción de libertades que son estructurales, no resolubles con diseño</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_3','','Incorrecto. Winner no defiende ni ataca la energía solar en ese pasaje específico. Su argumento es sobre las consecuencias estructurales de la escala de la nuclear.')">Porque la energía solar es siempre más barata y por lo tanto la nuclear es innecesaria</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_3','','Incorrecto. Winner no argumenta desde el costo económico sino desde las implicancias políticas estructurales de la tecnología nuclear.')">Porque los costos de construcción de plantas nucleares son siempre más altos que los beneficios</button>
<div class="cp-fb" id="ex4_2_3"></div></div>

<div class="cp"><div class="cp-q">4. Las máquinas forjadoras instaladas en la fábrica McCormick en 1885 son relevantes para el argumento de Winner porque:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_4','','Incorrecto. Las máquinas producían calidad inferior a mayor costo. No fue una mejora de eficiencia técnica.')">Fueron un ejemplo exitoso de innovación técnica que mejoró la eficiencia de la producción</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_2_4','Correcto. McCormick II instaló esas máquinas no para mejorar la eficiencia (producían peor y más caro) sino para destruir el sindicato de forjadores especializados. Tres años después se descartaron, una vez cumplido su objetivo. Muestra que el cambio tecnológico puede responder a lógicas de control político, no de eficiencia.','')">Muestran que el cambio tecnológico puede responder a lógicas de control político (destruir el sindicato), no de eficiencia técnica</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_4','','Incorrecto. Las máquinas fueron descartadas tres años después, una vez destruido el sindicato. No sobrevivieron en la industria.')">Fueron adoptadas masivamente y definieron el estándar industrial durante décadas</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_4','','Incorrecto. Las máquinas eran más caras y producían peor calidad. Fueron un fracaso técnico pero un éxito político para McCormick.')">Demostraron que la automatización siempre mejora la calidad del producto</button>
<div class="cp-fb" id="ex4_2_4"></div></div>

<div class="cp"><div class="cp-q">5. Para Parselis, una tecnología es "entrañable" cuando:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_5','','Incorrecto. Ninguna tecnología puede satisfacer todos los deseos de todos los usuarios. El criterio de Parselis no es la satisfacción de deseos individuales sino la reducción de los modos de extrañamiento.')">Satisface todos los deseos de sus usuarios sin restricciones</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_2_5','Correcto. Parselis propone cuatro criterios: Autonomía (comprensible, explorable, reversible), Cuidado (sostenible, limitada en impactos), Consenso (participativa, recuperable), Responsabilidad (social, funciones latentes transparentes). Una tecnología que cumple estos criterios reduce el extrañamiento que los usuarios experimentan frente a ella.','')">Minimiza los modos de extrañamiento: es comprensible, participativa, sostenible y rinde cuentas de sus efectos</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_5','','Incorrecto. La longevidad no es el criterio de Parselis. Una tecnología puede durar mucho y seguir siendo opaca, no reparable y excluyente de sus usuarios.')">Es fabricada para durar muchos años sin necesidad de mantenimiento</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_5','','Incorrecto. La tecnología de código abierto puede ser entrañable pero no es condición necesaria ni suficiente. Los criterios de Parselis van más allá del acceso al código fuente.')">Está fabricada con código abierto y puede ser modificada por cualquier persona</button>
<div class="cp-fb" id="ex4_2_5"></div></div>

<div class="cp"><div class="cp-q">6. La afirmación de Winner "la democracia se para a las puertas de la fábrica" refiere a que:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_6','','Incorrecto. Winner no argumenta que la democracia política sea hipócrita. El argumento es más específico: que los sistemas tecnológicos de gran escala generan lógicas de "necesidad práctica" que eclipsan la deliberación democrática.')">Los políticos son hipócritas: predican democracia pero actúan como dictadores</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_2_6','Correcto. Winner señala que las relaciones de poder dentro de las fábricas (jerárquicas, centralizadas) son aceptadas como "ley de vida" aunque contradigan los principios democráticos. La lógica de la "necesidad práctica" —hay que mantener el sistema funcionando— eclipsa cualquier exigencia de participación democrática en la gestión tecnológica.','')">Las relaciones jerárquicas dentro de los sistemas tecnológicos se aceptan como "necesidad práctica", excluyendo la deliberación democrática</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_6','','Incorrecto. Las fábricas pueden ser privadas o estatales, pero el argumento de Winner es sobre cómo la lógica técnica de la escala justifica formas autoritarias independientemente de la propiedad.')">Las fábricas deben ser estatales para que los trabajadores tengan derechos democráticos</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_6','','Incorrecto. Winner menciona ejemplos de gestión cooperativa en Suecia y Yugoslavia para mostrar que hay alternativas posibles, aunque reconoce que los sistemas altamente sofisticados tienen una "compatibilidad" con formas centralizadas.')">Ningún sistema tecnológico puede funcionar con gestión democrática de los trabajadores</button>
<div class="cp-fb" id="ex4_2_6"></div></div>

<div class="cp"><div class="cp-q">7. La infraestructura para personas con discapacidad (rampas, ascensores accesibles) es un ejemplo de tecnología inherentemente política porque:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_7','','Incorrecto. El costo no la hace inherentemente política. Muchas tecnologías costosas no tienen propiedades políticas intrínsecas.')">Es muy costosa de implementar y por eso genera conflictos políticos</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_2_7','Correcto. La infraestructura accesible no es una preferencia política arbitraria: es una condición de posibilidad para que las personas con discapacidad participen en la vida pública. Su presencia o ausencia determina quién puede ser ciudadano pleno. Tiene propiedades políticas intrínsecas que no dependen de la intención del diseñador.','')">Su presencia o ausencia determina quién puede participar plenamente en la vida pública; es condición de ciudadanía, no preferencia arbitraria</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_7','','Incorrecto. Es política porque habilita o excluye la participación en el espacio público, no porque sea un símbolo visual.')">Es un símbolo político visible que expresa los valores de una sociedad</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_7','','Incorrecto. La infraestructura accesible no requiere gestión centralizada ni vigilancia especial. Es política por el tipo de relaciones sociales que habilita (inclusión/exclusión), no por sus requerimientos de gestión.')">Requiere centralización estatal para su gestión, como la energía nuclear</button>
<div class="cp-fb" id="ex4_2_7"></div></div>

<div class="cp"><div class="cp-q">8. ¿Cómo se relacionan las propuestas de Winner y Parselis respecto a la neutralidad de los artefactos?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_8','','Incorrecto. Ambos cuestionan la neutralidad de los artefactos, aunque desde ángulos distintos.')">Winner defiende la neutralidad; Parselis la cuestiona</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_8','','Incorrecto. No es que uno sea pesimista y el otro optimista. Winner hace un análisis crítico de lo que existe; Parselis propone criterios para diseñar mejor. Son complementarios.')">Son opuestos: Winner es pesimista sobre la tecnología y Parselis es optimista</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_2_8','Correcto. Ambos rechazan que los artefactos sean herramientas neutras. Winner hace el diagnóstico: los artefactos pueden encarnar poder y autoridad. Parselis hace la propuesta: si los artefactos pueden encarnar poder opresivo, también pueden diseñarse para encarnar autonomía y cuidado. Son complementarios.','')">Ambos rechazan la neutralidad: Winner diagnostica cómo los artefactos encarnan poder; Parselis propone cómo diseñarlos para encarnar autonomía</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_2_8','','Incorrecto. Parselis propone criterios (las tecnologías entrañables) que van más allá de simplemente analizar el pasado. Y Winner tampoco afirma que todos los artefactos son políticos en el mismo grado.')">Son idénticos: ambos solo analizan tecnologías existentes sin proponer alternativas</button>
<div class="cp-fb" id="ex4_2_8"></div></div>

<button onclick="calcExamScore('4_2',8)" style="background:var(--accent);color:#fff;border:none;border-radius:6px;padding:10px 24px;font-size:13px;font-weight:600;cursor:pointer;margin-top:16px;width:100%">Ver mi nota</button>
</div>` },

  // ── EXAMEN U4: La Naturaleza ────────────────────────────────
  "4_3": { html: `<div class="cls">
<h2>Examen — U4: La Naturaleza</h2>
<div id="exam4_3_score" style="display:none;background:rgba(124,106,247,0.1);border:1px solid var(--accent);border-radius:8px;padding:16px;margin-bottom:16px;text-align:center">
  <div style="font-size:32px;font-weight:800;font-family:Syne,sans-serif" id="exam4_3_nota">—</div>
  <div style="font-size:13px;color:var(--text2)" id="exam4_3_fb">—</div>
</div>

<div class="cp"><div class="cp-q">1. Latouche usa la imagen de las "estrellas muertas cuya luz sigue llegando" para ilustrar:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_1','','Incorrecto. La imagen no es sobre los países pobres sino sobre el desfase entre las condiciones materiales (que ya no existen) y el imaginario cultural (que sigue funcionando como si existieran).')">La diferencia tecnológica entre países ricos y pobres</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_3_1','Correcto. Las condiciones que hicieron posible la sociedad de crecimiento (el fordismo, el capitalismo expansivo del siglo XX) desaparecieron probablemente en los años 70. Pero seguimos viviendo en el imaginario del crecimiento, como si esas condiciones todavía existieran —igual que seguimos recibiendo la luz de estrellas que ya explotaron.','')">Que seguimos viviendo en el imaginario del crecimiento aunque las condiciones que lo hicieron posible ya no existan</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_1','','Incorrecto. La imagen es opuesta: no se refiere a condiciones que perduran sino a condiciones que ya no existen pero cuya "luz" (el imaginario) sigue llegando.')">Que el crecimiento económico seguirá eternamente porque sus fundamentos son sólidos</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_1','','Incorrecto. El Club de Roma produjo el Informe "Los límites del crecimiento" (1972), que es relevante en el texto de Latouche, pero la imagen de las estrellas muertas se refiere al imaginario cultural, no a los datos del informe.')">Que el Club de Roma tenía razón sobre los límites del crecimiento desde los años 70</button>
<div class="cp-fb" id="ex4_3_1"></div></div>

<div class="cp"><div class="cp-q">2. Latouche critica el uso económico de los conceptos "crecimiento" y "desarrollo" porque:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_2','','Incorrecto. Latouche dice exactamente lo contrario: son metáforas adoptadas de la biología, pero los economistas olvidaron sus consecuencias biológicas (madurez, muerte, límites).')">Son conceptos originalmente económicos que la biología adoptó incorrectamente</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_3_2','Correcto. Los economistas tomaron metáforas biológicas (los organismos crecen y se desarrollan) pero olvidaron la consecuencia más importante: que los organismos también maduran y mueren. Aplicaron la metáfora a medias, asumiendo crecimiento indefinido sin los límites que la biología implica.','')">Son metáforas biológicas aplicadas a medias: tomaron el crecimiento y el desarrollo pero olvidaron que los organismos también tienen límites y mueren</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_2','','Incorrecto. Latouche no critica la rigurosidad matemática de los economistas sino el supuesto de crecimiento indefinido que subyace en su uso de las metáforas biológicas.')">Son conceptos matemáticamente imprecisos que generan confusión en los modelos económicos</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_2','','Incorrecto. El problema no es que describan mal la economía actual; el problema es que la metáfora implica límites que la teoría económica dominante ignora.')">Describen incorrectamente cómo funciona la economía capitalista realmente existente</button>
<div class="cp-fb" id="ex4_3_2"></div></div>

<div class="cp"><div class="cp-q">3. ¿Qué significa que vivimos en el "imaginario del crecimiento", según Latouche?</div>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_3_3','Correcto. El imaginario, en el sentido de Castoriadis que usa Latouche, es el sistema de representaciones que organiza nuestra comprensión del mundo. Vivir en el imaginario del crecimiento significa que creemos que el crecimiento es deseable, medible y el fin último de la actividad económica, sin cuestionarlo. Las palabras "progreso", "desarrollo", "crecimiento" funcionan como fetiches que no se interrogan.','')">Que las representaciones culturales y palabras de "progreso", "desarrollo" y "crecimiento" organizan nuestras expectativas sin ser cuestionadas</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_3','','Incorrecto. El imaginario es una construcción cultural, no un dato estadístico sobre el PIB. Y Latouche critica precisamente la idea de que el crecimiento del PIB refleja bienestar real.')">Que el PIB de todos los países crece efectivamente cada año</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_3','','Incorrecto. Latouche habla del imaginario en el sentido de Castoriadis: las representaciones colectivas que dan forma a la realidad social. No es ilusión individual sino estructura cultural compartida.')">Que cada persona individualmente fantasea con hacerse rica</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_3','','Incorrecto. Latouche distingue entre las condiciones materiales (que se pueden medir y ya cambiaron) y el imaginario cultural (que persiste más allá de las condiciones materiales). Son niveles distintos.')">Que todos los países tienen los mismos recursos materiales para crecer</button>
<div class="cp-fb" id="ex4_3_3"></div></div>

<div class="cp"><div class="cp-q">4. El "sueño de Adam Smith" al que refiere Latouche consiste en:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_4','','Incorrecto. Esta sería una interpretación de la economía planificada, no de Smith. Smith argumentó lo opuesto: que la búsqueda individual del interés propio, sin planificación, genera bienestar colectivo.')">Que el Estado debe planificar la economía para maximizar el bienestar de todos</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_3_4','Correcto. Smith (en La riqueza de las naciones, 1776) argumentó que desencadenar las pasiones individuales más egoístas generaría felicidad colectiva mediante la "mano invisible". Latouche llama a esto un "sueño" porque la historia mostró que el crecimiento de los ricos no se derramó automáticamente hacia los pobres, como la teoría prometía.','')">Que la búsqueda individual del interés propio más egoísta genera felicidad colectiva mediante la "mano invisible"</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_4','','Incorrecto. Las pasiones individuales son exactamente lo que Smith propuso desencadenar, no controlar. La visión anterior a Smith era que las pasiones debían controlarse para no destruir la sociedad.')">Que las pasiones individuales deben controlarse para evitar la destrucción de la sociedad</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_4','','Incorrecto. Smith no habla de redistribución estatal activa. Habla de la coordinación espontánea del mercado.')">Que el Estado redistribuya activamente la riqueza para garantizar la igualdad</button>
<div class="cp-fb" id="ex4_3_4"></div></div>

<div class="cp"><div class="cp-q">5. Latouche critica el PIB como indicador de bienestar porque:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_5','','Incorrecto. El PIB no es difícil de calcular en términos técnicos estadísticos. El problema es lo que mide: incluye lo que no debería incluir y omite lo que debería contabilizar.')">Es estadísticamente difícil de calcular con precisión</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_5','','Incorrecto. El PIB mide economías muy diferentes con la misma métrica. El problema de Latouche es otro: que incluye actividades nocivas como si fueran beneficiosas y no descuenta los recursos naturales consumidos.')">No permite comparar economías de distintos países</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_3_5','Correcto. El PIB Bruto incluye toda transacción monetaria, incluyendo las nocivas: medicamentos para enfermedades causadas por la industria, gastos de guerra, costos de limpieza ambiental. Y no descuenta la "amortización": los recursos naturales no renovables consumidos. Un terremoto que activa la reconstrucción "mejora" el PIB, lo cual revela que mide actividad económica, no bienestar.','')">Incluye transacciones nocivas y no descuenta los recursos naturales consumidos, midiendo actividad económica, no bienestar</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_5','','Incorrecto. El problema para Latouche no es la economía informal (aunque es un problema real) sino que el indicador mismo está mal diseñado para medir bienestar.')">No contempla la economía informal que representa gran parte de la actividad real</button>
<div class="cp-fb" id="ex4_3_5"></div></div>

<div class="cp"><div class="cp-q">6. Cuando Latouche dice que "la sociedad de consumo es una sociedad de la frustración", argumenta que:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_6','','Incorrecto. Lo contrario: el modelo de negocio de la sociedad de consumo requiere insatisfacción permanente. Si todos estuvieran satisfechos, el consumo se detendría y el sistema colapsa.')">Los consumidores son impacientes y siempre se frustran aunque consuman mucho</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_3_6','Correcto. La sociedad de consumo no está diseñada para satisfacer necesidades sino para manufacturarlas. Su funcionamiento requiere insatisfacción permanente: si el consumidor se satisficiera, dejaría de consumir. Por eso la publicidad no informa sobre productos sino que crea necesidades nuevas antes de que las anteriores estén satisfechas.','')">El modelo de negocio requiere insatisfacción permanente: manufactura necesidades para que el consumo no se detenga</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_6','','Incorrecto. La crítica de Latouche no es a la calidad técnica de los productos sino a la lógica del sistema que requiere insatisfacción estructural para funcionar.')">Los productos de consumo son de mala calidad y no funcionan como se promete</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_6','','Incorrecto. Latouche no niega que el nivel de vida material mejoró para muchos. Su crítica es que ese mejoramiento tiene costos que el PIB no contabiliza y que el sistema requiere insatisfacción para seguir funcionando.')">Los consumidores no tienen suficiente dinero para comprar lo que necesitan</button>
<div class="cp-fb" id="ex4_3_6"></div></div>

<div class="cp"><div class="cp-q">7. ¿Qué implica la propuesta del decrecimiento de Latouche para la ciencia y la tecnología?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_7','','Incorrecto. El decrecimiento no propone eliminar la ciencia ni la tecnología. Propone reorientarlas hacia objetivos distintos del crecimiento indefinido.')">Que deben eliminarse porque son las causas del problema ambiental</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_3_7','Correcto. Latouche no es antitecnológico. Propone que la ciencia y la tecnología dejen de subordinarse al imperativo del crecimiento indefinido y se reorienten hacia el bienestar humano dentro de los límites ecológicos. Tienen un rol ambivalente: fueron instrumentos del modelo termoindustrial pero pueden ser herramientas de su superación.','')">Que tienen un rol ambivalente y deben reorientarse desde el crecimiento indefinido hacia el bienestar dentro de límites ecológicos</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_7','','Incorrecto. Latouche no propone congelar el conocimiento. Propone cambiar el criterio de para qué se usa ese conocimiento.')">Que deben congelarse en su nivel actual para no incrementar el consumo</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_7','','Incorrecto. Latouche no plantea que la tecnología deba subordinarse al mercado sino exactamente lo contrario: que la lógica del mercado de crecimiento ilimitado es el problema.')">Que deben subordinarse completamente a las leyes del mercado para ser eficientes</button>
<div class="cp-fb" id="ex4_3_7"></div></div>

<div class="cp"><div class="cp-q">8. Giuliano (en el Cierre) conecta el debate sobre desarrollo sustentable con la formación en ingeniería al señalar que:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_8','','Incorrecto. Giuliano señala que el modelo imperante ya no es apto para resolver los problemas del presente. El objetivo no es mejorar el modelo existente sino gestionar una transición hacia algo cuyas características no están del todo claras.')">Los ingenieros deben mejorar el modelo de desarrollo existente haciéndolo más eficiente energéticamente</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_8','','Incorrecto. Giuliano sostiene que los ingenieros tienen un rol central y que la formación debe habilitarlos para reflexionar sobre ese rol, no para ignorarlo.')">Los ingenieros deben limitarse a resolver problemas técnicos y dejar las decisiones sociales a los políticos</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex4_3_8','Correcto. Giuliano propone que, así como la incorporación de las ciencias exactas fue el segundo gran cambio en la formación de ingenieros, ahora es necesario un tercer cambio: incorporar las ciencias sociales y humanas como parte constitutiva del modo de pensar ingenieril, para poder hacerse las preguntas que implica el desarrollo sustentable.','')">Es necesario incorporar las ciencias sociales y humanas en la formación, no como "parches", sino como parte del modo de pensar ingenieril</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex4_3_8','','Incorrecto. Giuliano valora la especialización técnica pero señala que no es suficiente. La formación debe incluir también la reflexión sobre el contexto cultural y social del hacer ingenieril.')">La formación debe enfocarse exclusivamente en la especialización técnica para ser competitiva globalmente</button>
<div class="cp-fb" id="ex4_3_8"></div></div>

<button onclick="calcExamScore('4_3',8)" style="background:var(--accent);color:#fff;border:none;border-radius:6px;padding:10px 24px;font-size:13px;font-weight:600;cursor:pointer;margin-top:16px;width:100%">Ver mi nota</button>
</div>` },

};

// ============================================================
// EXAMEN FINAL — INTRODUCCIÓN A LA INGENIERÍA (15 preguntas)
// ============================================================

const EXAMENES_FINALES_INTRO = {
  4: { html: `<div class="cls">
<h2>Examen Final — Introducción a la Ingeniería</h2>
<div id="examf4_score" style="display:none;background:rgba(124,106,247,0.1);border:1px solid var(--accent);border-radius:8px;padding:16px;margin-bottom:16px;text-align:center">
  <div style="font-size:32px;font-weight:800;font-family:Syne,sans-serif" id="examf4_nota">—</div>
  <div style="font-size:13px;color:var(--text2)" id="examf4_fb">—</div>
</div>

<div class="cp"><div class="cp-q">1. Niiniluoto defiende que ciencia y tecnología son disciplinas distintas. ¿Cuál es el argumento central que lo lleva a rechazar el término "tecnociencia"?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_1','','Incorrecto. No es un problema terminológico menor. Para Niiniluoto, fusionar los términos oscurece diferencias funcionales y epistemológicas que son importantes para definir políticas de ciencia y tecnología.')">Que el término es innecesariamente largo y genera confusión terminológica</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf4_1','Correcto. Para Niiniluoto, mezclar ciencia y tecnología bajo un único término oscurece diferencias funcionales cruciales: la ciencia busca conocimiento verdadero (sus "utilidades básicas" son epistémicas) mientras la tecnología busca soluciones eficaces (sus utilidades son prácticas). Confundirlos lleva a políticas de CyT que no comprenden las necesidades distintas de cada actividad.','')">Que fusionarlos oscurece diferencias funcionales entre buscar conocimiento verdadero y buscar soluciones eficaces, lo que afecta las políticas de CyT</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_1','','Incorrecto. Niiniluoto no niega que ciencia y tecnología interactúen profundamente. Su argumento es que esa interacción no las hace idénticas.')">Que ciencia y tecnología no tienen ningún punto de contacto y siempre operan de forma totalmente independiente</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_1','','Incorrecto. Niiniluoto no argumenta desde una jerarquía valorativa (cuál es "mejor") sino desde diferencias funcionales y epistemológicas.')">Que la ciencia es más valiosa que la tecnología y no debe asociarse con ella</button>
<div class="cp-fb" id="exf4_1"></div></div>

<div class="cp"><div class="cp-q">2. El "modelo de barrilete" representa las tensiones del diseño. ¿Cuál de los cuatro vértices tiende a ser el más invisible en la práctica ingenieril y por qué?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_2','','Incorrecto. Las restricciones técnicas son las más visibles porque son las que se aprenden en las materias de formación técnica específica.')">El técnico, porque es el más difícil de calcular con precisión</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_2','','Incorrecto. El económico es muy visible porque los proyectos tienen presupuestos explícitos y la viabilidad económica es siempre un tema central.')">El económico, porque los costos son difíciles de estimar</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf4_2','Correcto. El vértice cultural/social tiende a ser el más invisible porque sus restricciones son las que Giuliano llama "restricciones invisibles": valores y supuestos culturales incorporados al diseño sin nombrarse. Los otros vértices tienen indicadores explícitos; el cultural/social opera a través de supuestos implícitos sobre quién usa la tecnología, qué relaciones de poder habilita, y qué grupos se incluyen o excluyen.','')">El cultural/social, porque sus restricciones son supuestos implícitos sobre para quién se diseña y qué relaciones de poder habilita</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_2','','Incorrecto. El ambiental tiene indicadores explícitos (emisiones, consumo de recursos, residuos) y está incorporado en normativas de impacto ambiental.')">El ambiental, porque los impactos ecológicos son siempre pequeños</button>
<div class="cp-fb" id="exf4_2"></div></div>

<div class="cp"><div class="cp-q">3. Comparando a Niiniluoto y Giuliano: ¿en qué coinciden sobre la relación entre ciencia y tecnología?</div>
<button class="cp-btn" onclick="cpAns(this,true,'exf4_3','Correcto. Ambos coinciden en que ciencia y tecnología tienen racionalidades distintas (Niiniluoto: epistémica vs. práctica; Giuliano: científica vs. técnica) pero que esa distinción no implica independencia. Se necesitan mutuamente aunque sus lógicas internas sean diferentes.','')">En que tienen racionalidades distintas pero no son independientes: se necesitan mutuamente</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_3','','Incorrecto. Ninguno de los dos defiende eso. Niiniluoto explícitamente rechaza el término tecnociencia que implicaría fusión.')">En que son la misma cosa: la tecnología es ciencia aplicada</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_3','','Incorrecto. Ambos reconocen interacciones profundas entre ciencia y tecnología aunque sean actividades distintas.')">En que son completamente independientes y no deben relacionarse</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_3','','Incorrecto. Ninguno de los dos hace una evaluación de valor sobre cuál es "mejor" o "superior".')">En que la tecnología es superior a la ciencia por sus aplicaciones prácticas</button>
<div class="cp-fb" id="exf4_3"></div></div>

<div class="cp"><div class="cp-q">4. Winner muestra que los puentes de Moses y las máquinas de McCormick son casos de tecnología política. ¿Qué los une y qué los diferencia?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_4','','Incorrecto. Las máquinas de McCormick produjeron peor calidad a mayor costo; no fue un argumento de eficiencia. Y los puentes de Moses sí seguían funcionando como infraestructura vial.')">Los une que ambos mejoraron la eficiencia técnica; los diferencia el contexto histórico</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf4_4','Correcto. Los une que en ambos casos el artefacto técnico fue el instrumento de una política social (exclusión racial en Moses, anti-sindical en McCormick) sin necesidad de legislación explícita. Los diferencia el ámbito: Moses actuó en infraestructura pública permanente; McCormick en una solución transitoria que se descartó una vez logrado el objetivo político.','')">Los une que el artefacto fue instrumento de una política sin legislación explícita; los diferencia que Moses creó infraestructura permanente y McCormick una solución transitoria descartada</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_4','','Incorrecto. Moses actuó en el sector público y McCormick en el privado, pero esa diferencia no es lo que Winner destaca. Lo que los une es el mecanismo: usar el diseño técnico para implementar políticas sociales.')">Los une que ambos actuaron en el sector privado; los diferencia la escala del proyecto</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_4','','Incorrecto. Ambos casos son del Tipo 1 (intención deliberada del diseñador). El Tipo 2 (inherentemente político) es la energía nuclear.')">Los une que son tecnologías inherentemente políticas; los diferencia la intención del diseñador</button>
<div class="cp-fb" id="exf4_4"></div></div>

<div class="cp"><div class="cp-q">5. El constructivismo (SCOT) y la perspectiva de Winner sobre la política de los artefactos ¿son compatibles o contradictorios?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_5','','Incorrecto. Ambas perspectivas son complementarias, no contradictorias. Las dos reconocen que los artefactos técnicos no son neutrales y que los factores sociales importan.')">Son contradictorios: el constructivismo dice que los artefactos son sociales y Winner que son autónomos</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf4_5','Correcto. Son compatibles y complementarios. El constructivismo explica el proceso por el que los artefactos adquieren sus características (negociación entre grupos sociales). Winner analiza las consecuencias políticas de esas características una vez estabilizadas. Uno mira el origen; el otro, los efectos.','')">Son compatibles: el constructivismo explica cómo los artefactos adquieren sus características; Winner analiza sus consecuencias políticas una vez estabilizados</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_5','','Incorrecto. No son idénticas: el constructivismo hace análisis social del proceso de diseño; Winner hace análisis político de las propiedades de los artefactos. Tienen focos distintos aunque sean complementarios.')">Son idénticos: dicen exactamente lo mismo con vocabulario diferente</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_5','','Incorrecto. Ambas perspectivas son académicamente consolidadas y con base empírica sólida.')">Son incompatibles porque el constructivismo tiene evidencia empírica y Winner solo opiniones</button>
<div class="cp-fb" id="exf4_5"></div></div>

<div class="cp"><div class="cp-q">6. Para Latouche, ¿qué error cometieron los economistas al adoptar las metáforas biológicas de "crecimiento" y "desarrollo"?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_6','','Incorrecto. El problema no es que usaran biología. El problema es que aplicaron la metáfora a medias: tomaron el crecimiento y el desarrollo pero ignoraron que los organismos también tienen límites y mueren.')">Que la biología y la economía son disciplinas incompatibles metodológicamente</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf4_6','Correcto. Los organismos crecen, se desarrollan, maduran y mueren. Los economistas adoptaron el crecimiento y el desarrollo pero olvidaron la madurez y la muerte: asumieron que la metáfora aplica de forma indefinida. Un organismo que solo crece sin límites no existe en la naturaleza; en medicina, eso es un tumor.','')">Aplicaron la metáfora a medias: tomaron el crecimiento y el desarrollo pero ignoraron que los organismos también maduran, tienen límites y mueren</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_6','','Incorrecto. Latouche no dice que la economía no pueda crecer. Dice que el crecimiento indefinido es un absurdo que contradice la propia metáfora biológica en la que se basa.')">Que la economía nunca puede crecer, sino solo decrecer</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_6','','Incorrecto. El PIB puede medirse aunque la metáfora sea inconsistente. El problema no es la medición sino el supuesto subyacente de que el crecimiento indefinido es posible y deseable.')">Que el PIB es imposible de medir con los instrumentos estadísticos disponibles</button>
<div class="cp-fb" id="exf4_6"></div></div>

<div class="cp"><div class="cp-q">7. Parselis propone el criterio de "Autonomía" para las tecnologías entrañables. ¿Cuál de las siguientes opciones lo ejemplifica mejor?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_7','','Incorrecto. El bajo precio puede facilitar el acceso pero no garantiza que el usuario pueda comprender el funcionamiento del artefacto, repararlo o explorarlo. La autonomía es sobre la relación del usuario con el funcionamiento del artefacto.')">Una app de streaming que ofrece precios muy bajos por suscripción</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf4_7','Correcto. La autonomía en el sentido de Parselis significa que el artefacto es comprensible para el usuario (diseño manifiesto), puede ser explorado en su funcionamiento, y es reversible (el usuario puede salir del sistema sin costos desproporcionados). Una herramienta de reparación abierta cumple esos criterios.','')">Un teléfono diseñado con piezas estandarizadas, manual de reparación público, y sin restricciones para cambian la batería</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_7','','Incorrecto. El diseño minimalista es estético y puede facilitar el uso, pero no es lo mismo que la autonomía en el sentido de Parselis, que implica comprensibilidad del funcionamiento y posibilidad de exploración.')">Una interfaz de usuario con diseño minimalista que facilita el uso intuitivo</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_7','','Incorrecto. El almacenamiento ilimitado puede ser cómodo pero no implica autonomía sobre el funcionamiento del sistema ni la posibilidad de comprenderlo, modificarlo o salir de él fácilmente.')">Un servicio de almacenamiento en la nube con espacio ilimitado y sin cobro</button>
<div class="cp-fb" id="exf4_7"></div></div>

<div class="cp"><div class="cp-q">8. Giuliano afirma en el Cierre que la ingeniería "pierde su inocencia" cuando se reconoce que el desarrollo tecnológico no es unilineal. ¿Qué implica esto para la práctica profesional?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_8','','Incorrecto. Giuliano no dice que los ingenieros deban abandonar la ingeniería sino que deben ampliar su mirada para reconocer las dimensiones sociales y culturales de su trabajo.')">Que los ingenieros deben abandonar la práctica técnica y dedicarse a la política</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf4_8','Correcto. Si el desarrollo tecnológico puede ramificarse en distintas direcciones y cada rama implica "alternativas de civilización", entonces el ingeniero no puede escudarse en una supuesta neutralidad técnica. Sus decisiones de diseño tienen consecuencias políticas y culturales que son parte de su responsabilidad profesional.','')">Que el ingeniero no puede escudarse en neutralidad técnica: sus decisiones de diseño tienen consecuencias culturales y políticas que son parte de su responsabilidad</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_8','','Incorrecto. Giuliano señala que la complejidad social no puede reducirse a variables cuantificables sin perderse lo más importante. El modelo de barrilete es una herramienta heurística, no una fórmula de optimización.')">Que deben cuantificar todos los factores sociales para incluirlos en los cálculos de optimización</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_8','','Incorrecto. Giuliano propone que la reflexión tecnológica sea parte constitutiva de la formación, no que reemplace el conocimiento técnico.')">Que la formación técnica debe ser reemplazada por formación en ciencias sociales</button>
<div class="cp-fb" id="exf4_8"></div></div>

<div class="cp"><div class="cp-q">9. ¿Cuál es la relación entre el "principio de indeterminación forma-función" y el análisis constructivista de Pinch y Bijker?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_9','','Incorrecto. Son perspectivas complementarias que se refuerzan mutuamente. Ambas señalan que la forma de los artefactos no está técnicamente determinada.')">Son contradictorias: uno niega lo que el otro afirma</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf4_9','Correcto. El principio de indeterminación dice que para una función hay múltiples formas posibles: la relación no es unívoca. El constructivismo explica por qué se elige una forma concreta entre esas múltiples posibilidades: porque grupos sociales con distintos intereses y poder negocian hasta que el artefacto se estabiliza. Se complementan.','')">Se complementan: la indeterminación forma-función abre el espacio de posibilidades; el constructivismo explica por qué se elige una forma concreta mediante negociación social</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_9','','Incorrecto. No son idénticos: uno es un principio sobre la relación entre forma y función; el otro es un marco sociológico para analizar el proceso de diseño. Operan en planos distintos pero compatibles.')">Son idénticos: ambos dicen que las tecnologías son siempre arbitrarias</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_9','','Incorrecto. Ninguno de los dos dice que las formas sean elegidas al azar. El constructivismo dice que la elección resulta de negociaciones sociales, no de azar.')">Son independientes: uno habla de forma y el otro de función, sin conexión</button>
<div class="cp-fb" id="exf4_9"></div></div>

<div class="cp"><div class="cp-q">10. El análisis de Niiniluoto sobre las "dinámicas del cambio científico y tecnológico" señala diferencias entre ambas. ¿Cuál es la consecuencia para la evaluación y control del cambio?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_10','','Incorrecto. Si ambas tuvieran las mismas dinámicas, se podrían evaluar y controlar con los mismos criterios, lo que contradice la tesis de Niiniluoto.')">Que se pueden evaluar con los mismos criterios porque sus dinámicas son similares</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf4_10','Correcto. Para Niiniluoto, las dinámicas distintas implican que el cambio científico (impulsado por la búsqueda de verdad y la refutación de teorías) se evalúa con criterios epistémicos, mientras que el cambio tecnológico (impulsado por la demanda de soluciones) se evalúa con criterios de eficacia y valores sociales. Mezclarlos lleva a políticas inadecuadas.','')">Que requieren criterios distintos: el científico se evalúa con criterios epistémicos y el tecnológico con criterios de eficacia y valores sociales</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_10','','Incorrecto. Niiniluoto no propone que el mercado sea el árbitro del cambio tecnológico. Propone criterios que incluyen la evaluación social de los valores incorporados en las tecnologías.')">Que el cambio tecnológico debe dejarse al mercado porque es el único árbitro eficiente</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_10','','Incorrecto. El estado de las artes (conocimiento disponible) influye en ambos tipos de cambio. La distinción no es sobre el punto de partida sino sobre los criterios de evaluación y las dinámicas de cambio.')">Que ambos dependen exclusivamente del estado del arte disponible</button>
<div class="cp-fb" id="exf4_10"></div></div>

<div class="cp"><div class="cp-q">11. Latouche afirma que "los defensores más ardientes del crecimiento son los sindicalistas y obreros". ¿Cómo explica esta aparente paradoja?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_11','','Incorrecto. Latouche no dice que los trabajadores sean ingenuos. Dice que racionalmente defienden un sistema del que dependen, aunque ese sistema haya colonizado su imaginario hasta el punto de que no conciben alternativas.')">Que los trabajadores son ingenuos y no entienden el sistema que los oprime</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf4_11','Correcto. El sistema industrial generó para los trabajadores occidentales un nivel de vida material inseparable del crecimiento continuo. Sus empleos, salarios y consumo dependen de ese modelo. Por eso son sus defensores más ardientes aunque el mismo modelo los haya oprimido históricamente. Latouche llama a esto "tóxico-dependencia": las víctimas del sistema se volvieron sus colonizadores internos.','')">Que el sistema generó niveles de vida materiales que hacen a los trabajadores dependientes de él; las "víctimas" internalizaron el imaginario que las oprime</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_11','','Incorrecto. Latouche explícitamente dice que los capitalistas y especuladores no son los principales defensores del crecimiento. Son los trabajadores y sindicalistas, precisamente porque dependen de él.')">Que los capitalistas los manipulan directamente para que defiendan sus intereses</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_11','','Incorrecto. Latouche no hace diferencias geográficas en este argumento. La tóxico-dependencia del imaginario del crecimiento afecta a trabajadores en distintos contextos.')">Que solo aplica a trabajadores en países subdesarrollados, no en países industrializados</button>
<div class="cp-fb" id="exf4_11"></div></div>

<div class="cp"><div class="cp-q">12. La analogía de Winner entre artefactos técnicos y decretos legislativos (los artefactos son como leyes) tiene una implicancia importante para el diseño. ¿Cuál es?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_12','','Incorrecto. El punto de Winner es que los artefactos no son visibles como leyes, aunque produzcan los mismos efectos. Esa invisibilidad es lo que los hace más eficaces como instrumentos de poder.')">Que los artefactos deben ser aprobados por el Congreso antes de comercializarse</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf4_12','Correcto. Las leyes son visibles, debatibles y derogables. Los artefactos producen los mismos efectos políticos pero de forma invisible: se naturalizan como "paisaje técnico" sin posibilidad de ser cuestionados legislativamente. Por eso Winner señala que el proceso de diseño tiene una dimensión de responsabilidad política que normalmente no se reconoce.','')">Que el proceso de diseño tiene responsabilidad política porque los artefactos producen efectos de ley pero de forma invisible y sin posibilidad de derogación democrática</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_12','','Incorrecto. La analogía no se refiere a la durabilidad material de los artefactos sino a sus efectos sociales: producen órdenes sociales al igual que las leyes, pero sin la visibilidad de estas.')">Que los artefactos son más duraderos que las leyes porque el acero dura más que el papel</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_12','','Incorrecto. Winner no propone que los ingenieros sean legisladores sino que reconozcan que su trabajo tiene efectos equivalentes a los de la legislación, y que eso implica responsabilidad.')">Que los ingenieros deben convertirse en legisladores para tener poder político</button>
<div class="cp-fb" id="exf4_12"></div></div>

<div class="cp"><div class="cp-q">13. Según el programa de la materia, ¿cuál es la relación entre el "modelo de barrilete" y el "modelo de cinco etapas del diseño"?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_13','','Incorrecto. Son conceptualizaciones distintas aunque complementarias. El barrilete es un modelo de análisis de tensiones; el de cinco etapas es un modelo de proceso.')">Son el mismo modelo expresado con distintas palabras</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf4_13','Correcto. El modelo de barrilete es una herramienta analítica para identificar las tensiones que atraviesan cualquier diseño (vértices técnico, económico, ambiental, cultural). El modelo de cinco etapas describe el proceso de diseño. Se complementan: el barrilete debe atravesar cada una de las cinco etapas, especialmente la identificación del problema y la evaluación de alternativas.','')">El barrilete identifica las tensiones que deben considerarse; las cinco etapas describen el proceso donde esas tensiones se gestionan concretamente</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_13','','Incorrecto. Son marcos complementarios que se usan juntos. El barrilete sin el proceso no tiene donde aplicarse; el proceso sin el barrilete puede ignorar tensiones importantes.')">Son incompatibles: se usa uno u otro según el tipo de proyecto</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_13','','Incorrecto. El barrilete es una herramienta de análisis, no de gestión de tiempo. Las cinco etapas tampoco son solo una organización temporal.')">El barrilete gestiona el tiempo del proyecto; las cinco etapas lo desglosan en presupuesto</button>
<div class="cp-fb" id="exf4_13"></div></div>

<div class="cp"><div class="cp-q">14. ¿Qué posición defiende Niiniluoto respecto al "realismo científico" y qué implica para la tecnología?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_14','','Incorrecto. Niiniluoto no defiende el instrumentalismo sino el realismo científico. Para él, la ciencia busca describir cómo es la realidad, no solo producir instrumentos de predicción.')">Que la ciencia es solo un instrumento de predicción, sin interés por la verdad</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf4_14','Correcto. Niiniluoto defiende el realismo científico: la ciencia aspira a describir cómo es la realidad (sus "utilidades básicas" son epistémicas: conocimiento verdadero). Para la tecnología, el realismo científico implica que las teorías científicas proporcionan una base de conocimiento real sobre el mundo que puede usarse para diseñar artefactos eficaces, más allá de ser meros instrumentos de predicción.','')">Que la ciencia aspira a describir cómo es la realidad (realismo), y eso provee a la tecnología una base de conocimiento genuino sobre el mundo</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_14','','Incorrecto. Niiniluoto defiende el realismo pero reconoce el constructivismo como perspectiva que merece consideración. No los descarta; los evalúa críticamente.')">Que el realismo y el constructivismo son incompatibles y el realismo es siempre superior</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_14','','Incorrecto. Niiniluoto sí hace distinciones entre perspectivas y defiende una posición. No es neutral al respecto.')">Que todas las posiciones epistemológicas son igualmente válidas y ninguna puede defendersc</button>
<div class="cp-fb" id="exf4_14"></div></div>

<div class="cp"><div class="cp-q">15. Sintetizando los cuatro autores de la materia (Winner, Latouche, Niiniluoto, Parselis), ¿qué tienen en común respecto al rol del ingeniero?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_15','','Incorrecto. Ninguno de los cuatro argumenta que el ingeniero deba abandonar la práctica técnica. Todos la valoran; lo que discuten es el marco en el que debe inscribirse esa práctica.')">Que el ingeniero debe abandonar la práctica técnica y dedicarse a la reflexión filosófica</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_15','','Incorrecto. Todos los autores reconocen la complejidad de la relación entre tecnología y sociedad. No comparten la idea de que la tecnología deba subordinarse sin más al mercado.')">Que el ingeniero debe subordinar todo criterio a la eficiencia del mercado</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf4_15','Correcto. Los cuatro autores coinciden en que el ingeniero no es un ejecutor neutral de necesidades técnicas objetivas. Winner: sus artefactos encarnan poder. Latouche: su trabajo está inscrito en un imaginario económico que no puede ignorarse. Niiniluoto: las diferencias entre ciencia y tecnología implican responsabilidades distintas. Parselis: puede y debe diseñar tecnologías más honestas con sus usuarios. Los cuatro amplían el horizonte de responsabilidad profesional del ingeniero.','')">Que el ingeniero no es un ejecutor neutral: sus decisiones técnicas tienen dimensiones políticas, culturales y éticas que no puede ignorar</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf4_15','','Incorrecto. Los cuatro autores valoran la reflexión pero también la acción: Parselis propone criterios concretos de diseño; Winner analiza casos reales; Latouche hace propuestas políticas concretas. No es solo reflexión.')">Que el ingeniero solo debe reflexionar pero no actuar sobre la dimensión social de su trabajo</button>
<div class="cp-fb" id="exf4_15"></div></div>

<button onclick="calcExamScore('f4',15)" style="background:var(--accent);color:#fff;border:none;border-radius:6px;padding:10px 24px;font-size:13px;font-weight:600;cursor:pointer;margin-top:16px;width:100%">Ver mi nota</button>
</div>` }
};

// ── Exámenes maestros: combinar INTRO + cada materia que se agregue ──────────
const EXAMENES_UNIDAD = Object.assign({}, EXAMENES_UNIDAD_INTRO);
const EXAMENES_FINALES = Object.assign({}, EXAMENES_FINALES_INTRO);

// ── calcExamScore: contar respuestas correctas y mostrar nota ─────────────────
window.calcExamScore = function(key, total) {
  var score = 0;
  for (var i = 1; i <= total; i++) {
    var fb = document.getElementById('ex'+key+'_'+i);
    if (fb && fb.style.color === 'rgb(34, 197, 94)') score++;
  }
  var scoreDiv = document.getElementById('exam'+key+'_score');
  var notaEl   = document.getElementById('exam'+key+'_nota');
  var fbEl     = document.getElementById('exam'+key+'_fb');
  if (!scoreDiv) return;
  var pct = Math.round(score / total * 100);
  notaEl.textContent = score + '/' + total + ' (' + pct + '%)';
  fbEl.textContent = pct >= 80
    ? '🎉 ¡Excelente! Unidad dominada.'
    : pct >= 60
      ? '👍 Bien — repasá los que fallaste.'
      : '📚 Seguí estudiando, vas por buen camino.';
  notaEl.style.color = pct >= 80 ? '#22c55e' : pct >= 60 ? '#f7c26a' : '#ef4444';
  scoreDiv.style.display = 'block';
  scoreDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
};


const EXAMENES_UNIDAD_QUIM = {

  // ── EXAMEN U1: Química y sistemas materiales ──────────────────
  "5_0": { html: `<div class="cls">
<h2>Examen — U1: Química y sistemas materiales</h2>
<div id="exam5_0_score" style="display:none;background:rgba(124,106,247,0.1);border:1px solid var(--accent);border-radius:8px;padding:16px;margin-bottom:16px;text-align:center">
  <div style="font-size:32px;font-weight:800;font-family:Syne,sans-serif" id="exam5_0_nota">—</div>
  <div style="font-size:13px;color:var(--text2)" id="exam5_0_fb">—</div>
</div>

<div class="cp"><div class="cp-q">1. La densidad del agua líquida a 20°C es 1,00 g/mL. ¿Cuál de las siguientes afirmaciones es correcta?</div>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_0_1','Correcto. La densidad es una propiedad intensiva: no depende de la cantidad de materia. 1 mL y 1 L de agua pura a 20°C tienen exactamente la misma densidad: 1,00 g/mL.','')">Un litro de agua tiene la misma densidad que 1 mL de agua a 20°C</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_1','','Incorrecto. La densidad es intensiva, no extensiva. No cambia con la cantidad de agua. Sí cambia con la temperatura, pero no con la cantidad.')">La densidad aumenta al aumentar la cantidad de agua</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_1','','Incorrecto. Aunque la masa es extensiva (depende de la cantidad), la densidad ρ = m/V es intensiva porque ambas variables (m y V) son extensivas y su cociente elimina la dependencia con la cantidad.')">La densidad es extensiva porque depende de la masa</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_1','','Incorrecto. La densidad del agua varía con la temperatura (a 4°C es máxima: 1,0000 g/mL; a 20°C es 0,9982 g/mL). Pero para una temperatura dada, es intensiva.')">La densidad del agua es la misma a cualquier temperatura</button>
<div class="cp-fb" id="ex5_0_1"></div></div>

<div class="cp"><div class="cp-q">2. Al calentar azúcar hasta que se ennegrece y huele a caramelo (proceso de caramelización), el cambio es:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_2','','Incorrecto. Un cambio físico no altera la composición química. En la caramelización, el azúcar (C₁₂H₂₂O₁₁) se descompone parcialmente: cambia la composición química.')">Físico, porque se aplica calor</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_0_2','Correcto. La caramelización es un cambio químico: el azúcar (C₁₂H₂₂O₁₁) sufre deshidratación y polimerización formando compuestos de color marrón con propiedades distintas. El cambio de color permanente y el nuevo olor son señales de cambio químico. No se puede "descaramelizar" el azúcar para obtener azúcar original.','')">Químico, porque cambia la composición y aparecen nuevas sustancias</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_2','','Incorrecto. El proceso de caramelización no es reversible: no se puede obtener azúcar blanco original a partir del caramelo oscuro. Es irreversible.')">Físico, porque es reversible calentando más</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_2','','Incorrecto. Todos los cambios químicos implican absorción o liberación de energía, pero no todo cambio que involucra energía es químico. El criterio clave es si cambia la composición química.')">Físico, porque involucra energía pero no reacción</button>
<div class="cp-fb" id="ex5_0_2"></div></div>

<div class="cp"><div class="cp-q">3. 25°C en la escala Kelvin es:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_3','','Incorrecto. La conversión correcta es T(K) = T(°C) + 273,15. No se multiplica por 273.')">25 × 273 = 6825 K</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_3','','Incorrecto. 248 K correspondería a −25°C (−25 + 273 = 248). Verificá el signo.')">248,15 K</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_0_3','Correcto. T(K) = T(°C) + 273,15 = 25 + 273,15 = 298,15 K. Esta temperatura (25°C = 298,15 K) se conoce como "temperatura ambiente estándar" en química.','')">298,15 K</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_3','','Incorrecto. 373,15 K correspondería a 100°C (punto de ebullición del agua a 1 atm). 25°C está 75°C por debajo.')">373,15 K</button>
<div class="cp-fb" id="ex5_0_3"></div></div>

<div class="cp"><div class="cp-q">4. El aire es un ejemplo de:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_4','','Incorrecto. Un elemento está formado por un solo tipo de átomo. El aire contiene principalmente N₂, O₂, Ar y CO₂: varios componentes.')">Elemento</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_4','','Incorrecto. Un compuesto tiene composición fija y sus elementos están unidos químicamente. La composición del aire varía ligeramente (humedad, CO₂) y sus componentes NO están unidos químicamente.')">Compuesto</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_0_4','Correcto. El aire es una mezcla homogénea (solución gaseosa) de N₂ (~78%), O₂ (~21%), Ar (~0,9%) y CO₂ (~0,04%). Aspecto uniforme (una sola fase), composición variable (humedad, contaminantes), componentes NO unidos químicamente.','')">Mezcla homogénea</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_4','','Incorrecto. En el aire no se distinguen fases a simple vista. Es homogéneo.')">Mezcla heterogénea</button>
<div class="cp-fb" id="ex5_0_4"></div></div>

<div class="cp"><div class="cp-q">5. Para separar sal disuelta en agua Y recuperar también el agua pura, el método correcto es:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_5','','Incorrecto. La filtración separa sólidos en suspensión pero NO sólidos disueltos. La sal disuelta pasa a través del filtro.')">Filtración</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_5','','Incorrecto. La simple evaporación recupera la sal pero NO el agua pura: el vapor de agua se pierde al aire.')">Evaporación simple</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_0_5','Correcto. La destilación separa componentes por diferencia de punto de ebullición. El agua (PE=100°C) evapora, el vapor se condensa y se recoge como agua pura. La sal (no volátil) queda en el matraz. Se recuperan ambos componentes.','')">Destilación</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_5','','Incorrecto. La decantación separa líquidos inmiscibles o sólidos que sedimentan. NaCl disuelto no se puede decantar.')">Decantación</button>
<div class="cp-fb" id="ex5_0_5"></div></div>

<div class="cp"><div class="cp-q">6. ¿Cuál de los siguientes es un compuesto inorgánico?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_6','','Incorrecto. El O₂ es un elemento, no un compuesto: está formado por un solo tipo de átomo (oxígeno).')">O₂</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_6','','Incorrecto. El aire es una mezcla de varios gases, no un compuesto puro. Su composición no es fija.')">Aire</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_0_6','Correcto. El NaCl (cloruro de sodio) es un compuesto inorgánico formado por los elementos Na y Cl en proporción fija (1:1 en mol). Tiene composición definida e invariable y propiedades distintas a sus elementos constituyentes.','')">NaCl</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_6','','Incorrecto. El agua de mar es una mezcla homogénea de agua y múltiples sales disueltas. No es un compuesto puro: su composición varía.')">Agua de mar</button>
<div class="cp-fb" id="ex5_0_6"></div></div>

<div class="cp"><div class="cp-q">7. El punto de fusión del hierro es 1538°C. Esta propiedad es:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_7','','Incorrecto. Extensiva significa que depende de la cantidad. El punto de fusión no varía: 1 gramo de hierro funde a 1538°C, igual que 1 tonelada de hierro.')">Extensiva y física</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_7','','Incorrecto. Química significa que describe cómo reacciona una sustancia (inflamabilidad, reactividad). El punto de fusión se puede observar sin alterar la composición.')">Intensiva y química</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_0_7','Correcto. El punto de fusión es intensivo (no depende de la cantidad: 1 kg de Fe funde a 1538°C igual que 1 g) y físico (se puede medir sin alterar la composición química del hierro).','')">Intensiva y física</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_7','','Incorrecto. El punto de fusión es una propiedad intensiva. No depende de cuánto hierro haya.')">Extensiva y química</button>
<div class="cp-fb" id="ex5_0_7"></div></div>

<div class="cp"><div class="cp-q">8. La sublimación es el cambio de estado de:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_8','','Incorrecto. De sólido a líquido es fusión. De líquido a sólido es solidificación.')">Sólido a líquido</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_8','','Incorrecto. De líquido a gas es vaporización (o ebullición si ocurre en toda la masa). De gas a líquido es condensación.')">Líquido a gas</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_0_8','Correcto. La sublimación es el cambio directo de sólido a gas sin pasar por líquido. Ejemplos: naftalina, hielo seco (CO₂ sólido a 1 atm), yodo sólido calentado suavemente. Es un cambio físico.','')">Sólido a gas directamente</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_0_8','','Incorrecto. De gas a sólido directamente se llama deposición o sublimación inversa (Ej: formación de escarcha).')">Gas a sólido directamente</button>
<div class="cp-fb" id="ex5_0_8"></div></div>

<button onclick="calcExamScore('5_0',8)" style="background:var(--accent);color:#fff;border:none;border-radius:6px;padding:10px 24px;font-size:13px;font-weight:600;cursor:pointer;margin-top:16px;width:100%">Ver mi nota</button>
</div>` },

  // ── EXAMEN U2: Leyes y nomenclatura ──────────────────────────
  "5_1": { html: `<div class="cls">
<h2>Examen — U2: Leyes fundamentales y nomenclatura</h2>
<div id="exam5_1_score" style="display:none;background:rgba(124,106,247,0.1);border:1px solid var(--accent);border-radius:8px;padding:16px;margin-bottom:16px;text-align:center">
  <div style="font-size:32px;font-weight:800;font-family:Syne,sans-serif" id="exam5_1_nota">—</div>
  <div style="font-size:13px;color:var(--text2)" id="exam5_1_fb">—</div>
</div>

<div class="cp"><div class="cp-q">1. Según la ley de Lavoisier, si se queman 12,0 g de C con 32,0 g de O₂ y se produce CO₂, la masa de CO₂ es:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_1','','Incorrecto. Según Lavoisier, la masa se conserva. m(CO₂) = m(C) + m(O₂) = 12,0 + 32,0 = 44,0 g.')">12,0 g</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_1','','Incorrecto. 32,0 g es solo la masa del O₂. Lavoisier dice que la masa TOTAL se conserva: producto = suma de reactivos.')">32,0 g</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_1_1','Correcto. Ley de Lavoisier: m(reactivos) = m(productos). 12,0 g C + 32,0 g O₂ = 44,0 g CO₂. Esto también corresponde a la fórmula CO₂: M = 12+16×2 = 44 g/mol, y aquí reaccionó exactamente 1 mol de cada reactivo.','')">44,0 g</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_1','','Incorrecto. La masa se conserva. No puede haber más producto que la suma de los reactivos.')">48,0 g</button>
<div class="cp-fb" id="ex5_1_1"></div></div>

<div class="cp"><div class="cp-q">2. La ley de Proust (proporciones definidas) implica que el H₂O siempre tiene la misma proporción másica de H y O. Si se descomponen 90,0 g de H₂O, ¿cuántos gramos de O₂ se obtienen?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_2','','Incorrecto. La proporción másica del oxígeno en H₂O es 16/18 = 88,9%, no la mitad. m(O) = 90 × 16/18 = 80 g.')">45,0 g</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_1_2','Correcto. En H₂O: M(H₂) = 2 g/mol, M(O) = 16 g/mol, M(H₂O) = 18 g/mol. Fracción másica O: 16/18 = 0,889. m(O₂) = 90,0 × 16/18 = 80,0 g. Verificación: m(H₂) = 90,0 × 2/18 = 10,0 g. Total: 80,0 + 10,0 = 90,0 g ✓','')">80,0 g</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_2','','Incorrecto. La proporción no es 1:1. En H₂O hay 2 átomos H (masa atómica 1) y 1 átomo O (masa atómica 16): la relación másica H:O = 2:16 = 1:8.')">9,00 g</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_2','','Incorrecto. 18,0 g de O sería 20% de 90 g, pero el porcentaje másico de O en H₂O es 16/18 × 100% = 88,9%.')">18,0 g</button>
<div class="cp-fb" id="ex5_1_2"></div></div>

<div class="cp"><div class="cp-q">3. El número de Avogadro (6,022×10²³) es la cantidad de partículas en:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_3','','Incorrecto. 1 gramo de sustancia no corresponde a 1 mol en general (solo para el hidrógeno atómico sería 1 mol). Depende de la masa molar.')">1 gramo de cualquier sustancia</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_3','','Incorrecto. 22,4 L es el volumen molar en CNPT. Contiene 6,022×10²³ moléculas solo para gases ideales en esas condiciones, pero no es la definición general del número de Avogadro.')">22,4 L de cualquier sustancia</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_1_3','Correcto. El mol es la unidad del SI de cantidad de sustancia: 1 mol de cualquier sustancia contiene exactamente 6,022×10²³ partículas elementales (átomos, moléculas, iones). Esta es la definición universal del número de Avogadro.','')">1 mol de cualquier sustancia</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_3','','Incorrecto. 1 litro de solución puede contener 1 mol (si M=1 M) pero también puede contener cualquier cantidad de moles dependiendo de la concentración.')">1 litro de solución acuosa</button>
<div class="cp-fb" id="ex5_1_3"></div></div>

<div class="cp"><div class="cp-q">4. ¿Cuál es la fórmula del óxido de hierro (III) (nomenclatura Stock)?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_4','','Incorrecto. FeO corresponde al óxido de hierro (II) o ferroso. En FeO: Fe tiene valencia +2 (1 O²⁻ = −2, 1 Fe = +2).')">FeO</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_1_4','Correcto. Óxido de hierro (III): Fe con valencia +3. Para que la carga neta sea cero: 2 Fe(+3) = +6 y 3 O²⁻ = −6. Fórmula: Fe₂O₃. Verificación: 2×(+3) + 3×(−2) = +6 − 6 = 0 ✓','')">Fe₂O₃</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_4','','Incorrecto. Fe₂O no es una fórmula química estable de un óxido de hierro conocido. La valencia del O es −2 y no se combina en proporción 2:1 con Fe(III).')">Fe₂O</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_4','','Incorrecto. FeO₃ implicaría que Fe tiene valencia +6, no +3. El óxido con Fe(+6) sería FeO₃, pero ese estado de oxidación no es común para el hierro.')">FeO₃</button>
<div class="cp-fb" id="ex5_1_4"></div></div>

<div class="cp"><div class="cp-q">5. El nombre del compuesto H₂SO₃ es:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_5','','Incorrecto. H₂SO₄ es el ácido sulfúrico (S en +6, 4 oxígenos). H₂SO₃ tiene menos oxígenos (3) y S en estado +4.')">Ácido sulfúrico</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_1_5','Correcto. H₂SO₃ = ácido sulfuroso. El S está en estado +4. Regla: el sufijo -oso indica menor número de oxidación/oxígenos que el -ico. H₂SO₄ (sulfúrico, S=+6) tiene más O que H₂SO₃ (sulfuroso, S=+4).','')">Ácido sulfuroso</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_5','','Incorrecto. H₂S es el ácido sulfhídrico, un hidrácido sin oxígeno. H₂SO₃ es un oxoácido (contiene O).')">Ácido sulfhídrico</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_5','','Incorrecto. El ácido hiposulfuroso no es una denominación estándar para H₂SO₃. El prefijo hipo- indica aún menos oxígenos que el -oso.')">Ácido hiposulfuroso</button>
<div class="cp-fb" id="ex5_1_5"></div></div>

<div class="cp"><div class="cp-q">6. ¿Cuál es el nombre (sistema Stock) del compuesto Fe(OH)₂?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_6','','Incorrecto. Hidróxido de hierro (III) es Fe(OH)₃ (Fe con 3 grupos OH). En Fe(OH)₂ hay solo 2 grupos OH, lo que indica Fe(+2).')">Hidróxido de hierro (III)</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_1_6','Correcto. En Fe(OH)₂: 2 grupos OH⁻ (carga total −2) neutralizan 1 Fe²⁺. Valencia del Fe = +2. Nombre Stock: hidróxido de hierro (II). Tradicional: hidróxido ferroso.','')">Hidróxido de hierro (II)</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_6','','Incorrecto. Hidróxido férrico es el nombre TRADICIONAL de Fe(OH)₃, no de Fe(OH)₂. Para Fe(OH)₂ el nombre tradicional es "ferroso".')">Hidróxido férrico</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_6','','Incorrecto. Fe(OH)₂ no es una sal sino un hidróxido. Las sales de hierro (II) tendrían aniones de ácidos (Cl⁻, SO₄²⁻, etc.), no OH⁻.')">Sal ferrosa</button>
<div class="cp-fb" id="ex5_1_6"></div></div>

<div class="cp"><div class="cp-q">7. Para formular la sal "sulfato de aluminio" hay que combinar Al³⁺ con SO₄²⁻. La fórmula correcta es:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_7','','Incorrecto. Al₃(SO₄)₂ no es electroneutral: 3 Al(+3) = +9 y 2 SO₄(−2) = −4. Suma = +5 ≠ 0.')">Al₃(SO₄)₂</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_7','','Incorrecto. AlSO₄ no es electroneutral: 1 Al(+3) = +3 y 1 SO₄(−2) = −2. Suma = +1 ≠ 0.')">AlSO₄</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_1_7','Correcto. Al(+3) y SO₄(−2). MCM(3,2) = 6. Necesitamos 2 Al(+3×2 = +6) y 3 SO₄(−2×3 = −6). Suma = 0 ✓. Fórmula: Al₂(SO₄)₃.','')">Al₂(SO₄)₃</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_7','','Incorrecto. Al₂SO₄ tiene 2 Al(+3) = +6 y 1 SO₄(−2) = −2. Suma = +4 ≠ 0.')">Al₂SO₄</button>
<div class="cp-fb" id="ex5_1_7"></div></div>

<div class="cp"><div class="cp-q">8. La ley de proporciones múltiples de Dalton aplica cuando:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_8','','Incorrecto. La ley de Proust (proporciones definidas) afirma que un compuesto tiene proporciones fijas. La ley de Dalton se refiere a MÚLTIPLES compuestos distintos entre los mismos elementos.')">Un compuesto siempre tiene la misma proporción entre sus elementos</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_1_8','Correcto. La ley de proporciones múltiples aplica cuando dos mismos elementos forman más de un compuesto. Por ejemplo, N y O forman N₂O, NO, NO₂, N₂O₃, N₂O₄, N₂O₅. Las masas de O que se combinan con una masa fija de N guardan razón de números enteros (1:2:3:4:5...).','')">Dos elementos forman más de un compuesto entre sí</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_8','','Incorrecto. La ley de Lavoisier dice que la masa se conserva. La ley de Dalton habla de proporciones entre compuestos distintos de los mismos elementos.')">La masa de los reactivos es igual a la de los productos</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_1_8','','Incorrecto. Los volúmenes iguales de gases a igual T y P con igual número de moléculas es la hipótesis de Avogadro, no la ley de Dalton.')">Volúmenes iguales de gas contienen igual número de moléculas</button>
<div class="cp-fb" id="ex5_1_8"></div></div>

<button onclick="calcExamScore('5_1',8)" style="background:var(--accent);color:#fff;border:none;border-radius:6px;padding:10px 24px;font-size:13px;font-weight:600;cursor:pointer;margin-top:16px;width:100%">Ver mi nota</button>
</div>` },

  // ── EXAMEN U3: Estequiometría ──────────────────────────────────
  "5_2": { html: `<div class="cls">
<h2>Examen — U3: Estequiometría</h2>
<div id="exam5_2_score" style="display:none;background:rgba(124,106,247,0.1);border:1px solid var(--accent);border-radius:8px;padding:16px;margin-bottom:16px;text-align:center">
  <div style="font-size:32px;font-weight:800;font-family:Syne,sans-serif" id="exam5_2_nota">—</div>
  <div style="font-size:13px;color:var(--text2)" id="exam5_2_fb">—</div>
</div>

<div class="cp"><div class="cp-q">1. ¿Cuántos moles hay en 44,0 g de CO₂? (M: C=12,0; O=16,0)</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_1','','Incorrecto. M(CO₂) = 12+2×16 = 44 g/mol. n = m/M = 44,0/44,0 = 1,00 mol, no 2,00.')">2,00 mol</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_2_1','Correcto. M(CO₂) = 12,0 + 2×16,0 = 44,0 g/mol. n = m/M = 44,0/44,0 = 1,00 mol. Este es el mol de referencia más usado: 44 g de CO₂ = 1 mol ≈ 22,4 L en CNPT.','')">1,00 mol</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_1','','Incorrecto. 0,50 mol × 44,0 g/mol = 22,0 g ≠ 44,0 g.')">0,50 mol</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_1','','Incorrecto. 44,0 mol × 44,0 g/mol = 1936 g ≠ 44,0 g.')">44,0 mol</button>
<div class="cp-fb" id="ex5_2_1"></div></div>

<div class="cp"><div class="cp-q">2. En la reacción: N₂ + 3H₂ → 2NH₃, si reaccionan 2,00 mol de N₂ y 3,00 mol de H₂, ¿cuál es el reactivo limitante?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_2','','Incorrecto. Para N₂: cociente n/ν = 2,00/1 = 2,00. Para H₂: 3,00/3 = 1,00. El menor cociente (1,00) corresponde a H₂, que es el limitante.')">N₂ (porque tiene menor número de moles)</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_2_2','Correcto. Cocientes n/ν: N₂ → 2,00/1 = 2,00; H₂ → 3,00/3 = 1,00. El menor es H₂: es el reactivo limitante. Se producen: n(NH₃) = 2 × (3,00/3) = 2,00 mol NH₃. N₂ en exceso: 2,00 − 1,00 = 1,00 mol sobrante.','')">H₂ (cociente n/ν menor)</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_2','','Incorrecto. No hay reactivo limitante solo cuando los reactivos están en proporción estequiométrica exacta. Aquí: para 3,00 mol H₂ se necesitan 1,00 mol N₂, pero hay 2,00 mol N₂. El H₂ se agota primero.')">Ambos se agotan simultáneamente</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_2','','Incorrecto. NH₃ es el producto de la reacción. El concepto de reactivo limitante solo aplica a los reactivos.')">NH₃</button>
<div class="cp-fb" id="ex5_2_2"></div></div>

<div class="cp"><div class="cp-q">3. Se queman 100 g de mineral con 80%(m/m) de azufre (S) puro. Reacción: S + O₂ → SO₂. ¿Qué masa de SO₂ se produce? (M: S=32,0; O=16,0)</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_3','','Incorrecto. Hay que usar solo la masa de S puro (80 g), no toda la masa del mineral.')">200 g de SO₂</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_3','','Incorrecto. La masa de S puro es 100 × 0,80 = 80 g. n(S) = 80/32 = 2,50 mol. n(SO₂) = 2,50 mol. m(SO₂) = 2,50 × 64 = 160 g.')">128 g de SO₂</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_2_3','Correcto. Masa S pura = 100 × 0,80 = 80,0 g. M(S) = 32,0 g/mol → n(S) = 80,0/32,0 = 2,50 mol. Relación 1:1 → n(SO₂) = 2,50 mol. M(SO₂) = 32,0+2×16,0 = 64,0 g/mol. m(SO₂) = 2,50 × 64,0 = 160 g.','')">160 g de SO₂</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_3','','Incorrecto. La masa de SO₂ debe ser mayor que la del S puro: se le añade O₂ (ley de Lavoisier). 80 g de S + 80 g de O₂ = 160 g SO₂.')">80,0 g de SO₂</button>
<div class="cp-fb" id="ex5_2_3"></div></div>

<div class="cp"><div class="cp-q">4. Una reacción tiene rendimiento del 75%. La masa teórica del producto es 200 g. ¿Cuántos gramos se obtienen realmente?</div>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_2_4','Correcto. η = m(real)/m(teórica) × 100%. m(real) = m(teórica) × η/100 = 200 × 0,75 = 150 g. El rendimiento siempre ≤ 100% por pérdidas, reacciones secundarias u otras causas.','')">150 g</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_4','','Incorrecto. Si el rendimiento fuera 100% se obtendrían 200 g. Con η=75% se obtiene menos.')">200 g</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_4','','Incorrecto. 75 g correspondería a η = 75/200 × 100% = 37,5%, no 75%.')">75,0 g</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_4','','Incorrecto. 266,7 g sería mayor que la masa teórica, lo que violaría la ley de Lavoisier (η > 100% es imposible).')">266,7 g</button>
<div class="cp-fb" id="ex5_2_4"></div></div>

<div class="cp"><div class="cp-q">5. La masa molar del Fe₂O₃ es (M: Fe=55,8; O=16,0):</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_5','','Incorrecto. Esa sería la masa de 1 mol de Fe + 1 mol de O: 55,8+16 = 71,8 g/mol. Pero Fe₂O₃ tiene 2 Fe y 3 O.')">71,8 g/mol</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_2_5','Correcto. M(Fe₂O₃) = 2×M(Fe) + 3×M(O) = 2×55,8 + 3×16,0 = 111,6 + 48,0 = 159,6 g/mol. Siempre multiplicar el número de átomos de cada elemento por su masa atómica y sumar.','')">159,6 g/mol</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_5','','Incorrecto. 111,6 g/mol es la masa de 2 mol de Fe solamente. No incluye el oxígeno.')">111,6 g/mol</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_5','','Incorrecto. 48,0 g/mol es la masa de 3 mol de O solamente. No incluye el hierro.')">48,0 g/mol</button>
<div class="cp-fb" id="ex5_2_5"></div></div>

<div class="cp"><div class="cp-q">6. En la reacción: 2Al + 3Cl₂ → 2AlCl₃, si se usan 54,0 g de Al y 213 g de Cl₂, ¿cuál es el limitante? (M: Al=27,0; Cl=35,5)</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_6','','Incorrecto. n(Al) = 54,0/27,0 = 2,00 mol. n(Cl₂) = 213/71,0 = 3,00 mol. Cocientes: Al→2,00/2=1,00; Cl₂→3,00/3=1,00. Los cocientes son iguales: estequiometría exacta, ninguno en exceso.')">Al (menor masa)</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_6','','Incorrecto. n(Al)=2,00 mol; n(Cl₂)=3,00 mol. Cocientes n/ν: Al→2,00/2=1,00; Cl₂→3,00/3=1,00. Son iguales: se agotan simultáneamente.')">Cl₂ (mayor masa)</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_2_6','Correcto. n(Al) = 54,0/27,0 = 2,00 mol. M(Cl₂) = 2×35,5 = 71,0 g/mol; n(Cl₂) = 213/71,0 = 3,00 mol. Cocientes n/ν: Al→2,00/2=1,00; Cl₂→3,00/3=1,00. Iguales → se agotan simultáneamente. No hay reactivo limitante en este caso.','')">Ninguno: están en proporción estequiométrica exacta</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_6','','Incorrecto. AlCl₃ es el producto, no reactivo.')">AlCl₃</button>
<div class="cp-fb" id="ex5_2_6"></div></div>

<div class="cp"><div class="cp-q">7. ¿Cuántas moléculas de H₂O hay en 9,00 g de agua? (M(H₂O)=18,0 g/mol; NA=6,022×10²³)</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_7','','Incorrecto. 6,022×10²³ sería 1 mol completo (18 g). Aquí hay solo 9 g = 0,500 mol.')">6,022 × 10²³</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_2_7','Correcto. n(H₂O) = 9,00/18,0 = 0,500 mol. N = n × NA = 0,500 × 6,022×10²³ = 3,011×10²³ moléculas de H₂O.','')">3,011 × 10²³</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_7','','Incorrecto. 1,204×10²⁴ = 2 × NA correspondería a 2 mol = 36 g de H₂O, no 9 g.')">1,204 × 10²⁴</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_7','','Incorrecto. 9,00×10²³ no corresponde a ningún cálculo correcto de mol × NA para 9 g H₂O.')">9,00 × 10²³</button>
<div class="cp-fb" id="ex5_2_7"></div></div>

<div class="cp"><div class="cp-q">8. El índice de reacción ξ (xi) en estequiometría representa:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_8','','Incorrecto. El rendimiento η es la fracción de producto real vs. teórico. El índice de reacción es otra cosa.')">El rendimiento porcentual de la reacción</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_8','','Incorrecto. La pureza es la fracción de sustancia activa en una muestra con impurezas. ξ no tiene que ver con esto.')">La pureza del reactivo usado</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_2_8','Correcto. ξ = nA/νA = nB/νB = nC/νC. Es el cociente entre la cantidad de moles de una especie y su coeficiente estequiométrico. Es constante para todas las especies en una reacción dada: permite calcular cualquier cantidad a partir de cualquier otra usando la ecuación balanceada.','')">El cociente n/ν que es igual para todas las especies de la reacción</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_2_8','','Incorrecto. La fracción molar xi es la relación entre moles de un componente y moles totales en una mezcla. El índice de reacción ξ es diferente.')">La fracción molar de cada componente en la mezcla</button>
<div class="cp-fb" id="ex5_2_8"></div></div>

<button onclick="calcExamScore('5_2',8)" style="background:var(--accent);color:#fff;border:none;border-radius:6px;padding:10px 24px;font-size:13px;font-weight:600;cursor:pointer;margin-top:16px;width:100%">Ver mi nota</button>
</div>` },

  // ── EXAMEN U4: Gases y soluciones ─────────────────────────────
  "5_3": { html: `<div class="cls">
<h2>Examen — U4: Estado gaseoso y soluciones</h2>
<div id="exam5_3_score" style="display:none;background:rgba(124,106,247,0.1);border:1px solid var(--accent);border-radius:8px;padding:16px;margin-bottom:16px;text-align:center">
  <div style="font-size:32px;font-weight:800;font-family:Syne,sans-serif" id="exam5_3_nota">—</div>
  <div style="font-size:13px;color:var(--text2)" id="exam5_3_fb">—</div>
</div>

<div class="cp"><div class="cp-q">1. Un gas a 2,00 atm y 10,0 L. Se comprime isotérmicamente a 5,00 atm. ¿Nuevo volumen? (Ley de Boyle)</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_1','','Incorrecto. 25,0 L correspondería a bajar la presión (expansión), no a comprimirla. Si P aumenta, V debe disminuir.')">25,0 L</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_1','','Incorrecto. El volumen no se mantiene en una compresión isotérmica. Boyle: P₁V₁ = P₂V₂.')">10,0 L</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_3_1','Correcto. Ley de Boyle (T, n constantes): P₁V₁ = P₂V₂. V₂ = P₁V₁/P₂ = (2,00 × 10,0)/5,00 = 4,00 L. Al multiplicar P por 2,5, V se divide por 2,5.','')">4,00 L</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_1','','Incorrecto. 50,0 L implicaría que el volumen aumentó al comprimir, lo que contradice la ley de Boyle.')">50,0 L</button>
<div class="cp-fb" id="ex5_3_1"></div></div>

<div class="cp"><div class="cp-q">2. ¿Cuántos moles de gas ideal hay en 10,0 L a 2,00 atm y 27°C? (R=0,0821 L·atm·mol⁻¹·K⁻¹)</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_2','','Incorrecto. Primero convertir T a Kelvin: T = 27+273 = 300 K. n = PV/RT = (2,00×10,0)/(0,0821×300) = 20,0/24,63 = 0,812 mol.')">1,00 mol</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_2','','Incorrecto. 0,500 mol daría PV = nRT → V = 0,500×0,0821×300/2,00 = 6,16 L ≠ 10,0 L.')">0,500 mol</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_3_2','Correcto. T = 27+273 = 300 K. PV = nRT → n = PV/(RT) = (2,00×10,0)/(0,0821×300) = 20,0/24,63 = 0,812 mol. Importante: siempre T en Kelvin.','')">0,812 mol</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_2','','Incorrecto. 2,00 mol daría V = 2,00×0,0821×300/2,00 = 24,6 L ≠ 10,0 L.')">2,00 mol</button>
<div class="cp-fb" id="ex5_3_2"></div></div>

<div class="cp"><div class="cp-q">3. En la ecuación PV=nRT, si se mantienen constantes n y T y se duplica la presión, el volumen:</div>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_3_3','Correcto. PV = nRT = constante (n y T fijos). Si P se duplica: 2P × V₂ = P × V₁ → V₂ = V₁/2. El volumen se reduce a la mitad. Esta es la ley de Boyle expresada a través de PV=nRT.','')">Se reduce a la mitad (ley de Boyle)</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_3','','Incorrecto. Se duplica solo si se duplica T a P constante (ley de Charles). Con T fija y P doble, V se divide a la mitad.')">Se duplica</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_3','','Incorrecto. PV = constante (n, T fijos). Si P cambia, V debe cambiar inversamente. No permanece igual.')">Permanece igual</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_3','','Incorrecto. PV = constante. Si P × 2, entonces V × ½, no × ¼.')">Se reduce a la cuarta parte</button>
<div class="cp-fb" id="ex5_3_3"></div></div>

<div class="cp"><div class="cp-q">4. Una mezcla gaseosa tiene 0,800 mol de N₂ y 0,200 mol de O₂. La presión total es 5,00 atm. ¿Cuál es la presión parcial de O₂?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_4','','Incorrecto. 4,00 atm es la presión parcial de N₂ (fracción molar 0,800). Para O₂: fracción molar = 0,200/1,000 = 0,200.')">4,00 atm</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_4','','Incorrecto. 2,50 atm sería la mitad de la presión total, lo que correspondería a una fracción molar de 0,500. O₂ es el 20% de la mezcla.')">2,50 atm</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_3_4','Correcto. Ley de Dalton. n_total = 0,800+0,200 = 1,000 mol. x(O₂) = 0,200/1,000 = 0,200. P(O₂) = x(O₂) × P_total = 0,200 × 5,00 = 1,00 atm.','')">1,00 atm</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_4','','Incorrecto. 5,00 atm es la presión total de la mezcla, no la presión parcial de O₂.')">5,00 atm</button>
<div class="cp-fb" id="ex5_3_4"></div></div>

<div class="cp"><div class="cp-q">5. Se disuelven 5,00 g de NaCl en 95,0 g de agua. El %(m/m) de la solución es:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_5','','Incorrecto. El %(m/m) se calcula sobre la masa de SOLUCIÓN total, no sobre la masa de solvente. m(sc) = 5,00+95,0 = 100,0 g.')">5,00/95,0 × 100 = 5,26%</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_3_5','Correcto. m(sc) = m(NaCl) + m(H₂O) = 5,00 + 95,0 = 100,0 g. %(m/m) = (5,00/100,0) × 100 = 5,00%. En este caso la coincidencia numérica es porque m(solvente) = 95 g, no porque la fórmula use el solvente.','')">5,00/100,0 × 100 = 5,00%</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_5','','Incorrecto. 95,0/100,0 × 100 = 95,0% sería el porcentaje del solvente (agua), no del soluto (NaCl).')">95,0/100,0 × 100 = 95,0%</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_5','','Incorrecto. No se necesita la densidad para calcular %(m/m): solo masas. La densidad solo se usa para convertir %(m/m) a %(m/v) o a molaridad.')">No se puede calcular sin la densidad</button>
<div class="cp-fb" id="ex5_3_5"></div></div>

<div class="cp"><div class="cp-q">6. Para preparar 500 mL de HCl 0,200 M a partir de HCl concentrado 12,0 M, ¿qué volumen de concentrado se necesita?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_6','','Incorrecto. Si se usaran 120 mL, la molaridad resultante sería 12,0 × 0,120 / 0,500 = 2,88 M ≠ 0,200 M.')">120 mL</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_6','','Incorrecto. Si se usara 1,00 mL, se obtendrían 12,0 × 0,001 = 0,012 mol en 500 mL → M = 0,024 M ≠ 0,200 M.')">1,00 mL</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_3_6','Correcto. Dilución: M₁V₁ = M₂V₂. V₁ = M₂V₂/M₁ = (0,200 × 0,500)/12,0 = 0,100/12,0 = 0,00833 L = 8,33 mL. Tomar 8,33 mL de HCl 12,0 M y completar a 500 mL con agua destilada.','')">8,33 mL</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_6','','Incorrecto. Si se usaran 500 mL, la molaridad final sería 12,0 M (igual que el original, sin diluir).')">500 mL</button>
<div class="cp-fb" id="ex5_3_6"></div></div>

<div class="cp"><div class="cp-q">7. La molaridad de una solución depende de la temperatura porque:</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_7','','Incorrecto. El número de moles de soluto no cambia con la temperatura (los moles son cantidad de materia). Lo que cambia es el volumen.')">Cambia el número de moles de soluto al calentar</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_3_7','Correcto. M = n/V. El número de moles n no cambia con T, pero el volumen V de la solución sí cambia (los líquidos se dilatan al calentarse). Por eso la molaridad es diferente a distintas temperaturas aunque el soluto sea el mismo. El %(m/m) y la molalidad no dependen de T porque están definidas en términos de masas.','')">Cambia el volumen de la solución al variar T, mientras n permanece fijo</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_7','','Incorrecto. La masa molar M es una constante para cada sustancia y no cambia con la temperatura.')">Cambia la masa molar del soluto con T</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_7','','Incorrecto. La densidad del solvente puro sí cambia con T, pero eso no es la razón directa por la que cambia la molaridad (que usa V de la solución, no del solvente).')">Cambia la densidad del solvente puro</button>
<div class="cp-fb" id="ex5_3_7"></div></div>

<div class="cp"><div class="cp-q">8. Un gas a 25°C ocupa 12,0 L a 1,00 atm. Se enfría a −73°C manteniendo la presión constante. ¿Nuevo volumen?</div>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_8','','Incorrecto. Recordá siempre convertir a Kelvin: T₁ = 298 K, T₂ = 200 K. V₂ = 12,0 × 200/298 ≠ 8,76 L. Verificá el cálculo.')">14,0 L</button>
<button class="cp-btn" onclick="cpAns(this,true,'ex5_3_8','Correcto. Ley de Charles (P, n constantes). T₁ = 25+273 = 298 K. T₂ = −73+273 = 200 K. V₂ = V₁×T₂/T₁ = 12,0×200/298 = 8,05 L. Al bajar T de 298→200 K (factor 0,671), el volumen baja proporcionalmente.','')">8,05 L</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_8','','Incorrecto. Si V₂ = 12,0 L, significaría que T no cambió. Pero T bajó de 25°C a −73°C: el gas debe contraerse.')">12,0 L</button>
<button class="cp-btn" onclick="cpAns(this,false,'ex5_3_8','','Incorrecto. Usar °C directamente: −73/25 × 12,0 da un resultado sin sentido físico (negativo). SIEMPRE convertir a Kelvin.')">−35,0 L (usando °C directamente)</button>
<div class="cp-fb" id="ex5_3_8"></div></div>

<button onclick="calcExamScore('5_3',8)" style="background:var(--accent);color:#fff;border:none;border-radius:6px;padding:10px 24px;font-size:13px;font-weight:600;cursor:pointer;margin-top:16px;width:100%">Ver mi nota</button>
</div>` },

};

const EXAMENES_FINALES_QUIM = {
  5: { html: `<div class="cls">
<h2>Examen Final — Química I</h2>
<div id="examf5_score" style="display:none;background:rgba(124,106,247,0.1);border:1px solid var(--accent);border-radius:8px;padding:16px;margin-bottom:16px;text-align:center">
  <div style="font-size:32px;font-weight:800;font-family:Syne,sans-serif" id="examf5_nota">—</div>
  <div style="font-size:13px;color:var(--text2)" id="examf5_fb">—</div>
</div>

<div class="cp"><div class="cp-q">1. La densidad del hierro es 7,87 g/cm³. Si se corta una barra de hierro a la mitad, la densidad del trozo resultante es:</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_1','','Incorrecto. La masa se divide a la mitad, pero también el volumen. La densidad ρ = m/V: si m/2 y V/2, ρ = (m/2)/(V/2) = m/V = 7,87 g/cm³. No cambia.')">3,935 g/cm³ (la mitad)</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf5_1','Correcto. La densidad es una propiedad intensiva: no depende de la cantidad de materia. Al cortar la barra, la masa y el volumen se reducen a la mitad, pero su cociente (densidad) permanece en 7,87 g/cm³.','')">7,87 g/cm³ (igual)</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_1','','Incorrecto. La densidad no se duplica al reducir el tamaño. Sigue siendo 7,87 g/cm³.')">15,74 g/cm³ (el doble)</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_1','','Incorrecto. La densidad es intensiva y no depende de la geometría del trozo.')">Depende de la geometría del corte</button>
<div class="cp-fb" id="exf5_1"></div></div>

<div class="cp"><div class="cp-q">2. La formación del óxido de cobre (II) a partir de sus elementos: 2Cu + O₂ → 2CuO. ¿Cuál de las siguientes afirmaciones es correcta?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_2','','Incorrecto. Es un cambio químico, no físico: se forma una sustancia nueva (CuO) con propiedades distintas al Cu metálico y al O₂.')">Es un cambio físico porque no cambia la temperatura</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf5_2','Correcto. Es un cambio químico: Cu metálico + O₂ gaseoso → CuO sólido negro, con propiedades completamente distintas. La ley de Lavoisier se verifica: 2×63,5 g Cu + 32,0 g O₂ = 127+32 = 159 g = 2×79,5 g CuO.','')">Es un cambio químico y la masa total se conserva (Lavoisier)</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_2','','Incorrecto. La masa se conserva (Lavoisier). En toda reacción química la masa de productos igual a la de reactivos.')">Es un cambio químico y se destruye masa en el proceso</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_2','','Incorrecto. La oxidación del cobre produce una sustancia nueva (CuO) que no es solo el Cu con una textura diferente: su composición cambió.')">Es un cambio físico porque el Cu sigue siendo Cu con otra textura</button>
<div class="cp-fb" id="exf5_2"></div></div>

<div class="cp"><div class="cp-q">3. El nombre IUPAC del compuesto SO₃ es:</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_3','','Incorrecto. SO₂ es el dióxido de azufre (2 átomos O). SO₃ tiene 3 átomos de oxígeno.')">Dióxido de azufre</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf5_3','Correcto. SO₃: S es un no metal (1 átomo → mono... pero se omite el "mono" para el primer elemento), O hay 3 → triox... → trióxido de azufre. Sistema IUPAC de composición: usa prefijos numéricos (di=2, tri=3, tetra=4, etc.).','')">Trióxido de azufre</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_3','','Incorrecto. "Anhídrido sulfúrico" es el nombre tradicional del SO₃, no el nombre IUPAC. El nombre IUPAC usa prefijos numéricos.')">Anhídrido sulfúrico</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_3','','Incorrecto. SO₃ no es un oxoácido sino un óxido no metálico. El ácido sulfúrico sería H₂SO₄.')">Ácido sulfúrico</button>
<div class="cp-fb" id="exf5_3"></div></div>

<div class="cp"><div class="cp-q">4. Se tienen 5,00 mol de N₂ y 10,0 mol de H₂ para la reacción N₂ + 3H₂ → 2NH₃. ¿Cuántos mol de NH₃ se producen?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_4','','Incorrecto. 10,0 mol NH₃ requeriría que N₂ fuera el limitante produciendo 2×5 = 10 mol NH₃. Pero hay que verificar con H₂ también.')">10,0 mol</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_4','','Incorrecto. 6,67 mol correspondería a producir a partir del H₂ con ξ=10/3=3,33 mol, dando 2×3,33=6,67 mol. Hay que verificar cuál es el limitante.')">6,67 mol</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf5_4','Correcto. Cocientes n/ν: N₂→5,00/1=5,00; H₂→10,0/3=3,33. Menor: H₂ → limitante. ξ = 10,0/3 = 3,33 mol. n(NH₃) = 2 × 3,33 = 6,67 mol. N₂ sobrante: 5,00−3,33 = 1,67 mol.','')">6,67 mol (H₂ es el limitante)</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_4','','Incorrecto. 5,00 mol de NH₃ no corresponde a ningún cálculo correcto para esta estequiometría.')">5,00 mol</button>
<div class="cp-fb" id="exf5_4"></div></div>

<div class="cp"><div class="cp-q">5. Una muestra de mineral contiene 75,0% (m/m) de Fe₂O₃. Si se procesan 200 g del mineral con rendimiento del 85,0%, ¿qué masa de Fe se obtiene? (M(Fe)=55,8; M(O)=16,0; reacción: Fe₂O₃ + 3CO → 2Fe + 3CO₂)</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_5','','Incorrecto. Hay que aplicar tanto la pureza del mineral como el rendimiento de la reacción. El cálculo completo da 88,2 g.')">200 × 0,75 × 0,85 = 127,5 g</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf5_5','Correcto. Paso 1: m(Fe₂O₃) = 200×0,750 = 150 g. Paso 2: M(Fe₂O₃) = 159,6 g/mol → n(Fe₂O₃) = 150/159,6 = 0,9398 mol. Paso 3: n(Fe) = 2×0,9398 = 1,8796 mol. Paso 4: m(Fe)_teórica = 1,8796×55,8 = 104,9 g. Paso 5: m(Fe)_real = 104,9×0,850 = 89,2 g.','')">89,2 g de Fe</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_5','','Incorrecto. 104,9 g sería la masa teórica (sin aplicar rendimiento). Con η=85%, la masa real es menor.')">104,9 g de Fe</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_5','','Incorrecto. 150 g es solo la masa de Fe₂O₃ puro en el mineral. Hay que completar el cálculo estequiométrico.')">150 g de Fe</button>
<div class="cp-fb" id="exf5_5"></div></div>

<div class="cp"><div class="cp-q">6. Un gas ocupa 5,00 L a 27°C y 1,00 atm. ¿Cuántos moles contiene? (R=0,0821 L·atm/(mol·K))</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_6','','Incorrecto. Con T = 300 K: n = PV/RT = (1,00×5,00)/(0,0821×300) = 5,00/24,63 = 0,203 mol, no 1,00 mol.')">1,00 mol</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf5_6','Correcto. T = 27+273 = 300 K. n = PV/(RT) = (1,00 × 5,00)/(0,0821 × 300) = 5,00/24,63 = 0,203 mol.','')">0,203 mol</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_6','','Incorrecto. 5,00/22,4 = 0,223 mol. Eso sería correcto solo en CNPT (0°C, 1 atm), no a 27°C.')">0,223 mol (usando 22,4 L/mol)</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_6','','Incorrecto. 0,500 mol daría V = 0,500×0,0821×300/1,00 = 12,3 L ≠ 5,00 L.')">0,500 mol</button>
<div class="cp-fb" id="exf5_6"></div></div>

<div class="cp"><div class="cp-q">7. La fórmula del sulfato de cobre (II) es:</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_7','','Incorrecto. CuSO₄·5H₂O es el sulfato de cobre (II) pentahidratado (piedra azul), pero la fórmula anhidra es simplemente CuSO₄. Cu(II)=+2; SO₄²⁻=−2: se combina 1:1.')">Cu₂SO₄</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf5_7','Correcto. Cu(II): valencia +2. SO₄²⁻: carga −2. Para electroneutralidad: 1 Cu²⁺ + 1 SO₄²⁻ → CuSO₄. Verificación: +2 + (−2) = 0 ✓. Cu₂SO₄ sería el sulfato de cobre (I).','')">CuSO₄</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_7','','Incorrecto. Cu(SO₄)₂ implicaría Cu con valencia +4: (+4) + 2×(−2) = 0. El Cu(IV) no es un estado de oxidación estable común del cobre.')">Cu(SO₄)₂</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_7','','Incorrecto. CuSO₃ contiene el ion sulfito (SO₃²⁻), que proviene del ácido sulfuroso. Sulfato proviene de ácido sulfúrico: SO₄²⁻.')">CuSO₃</button>
<div class="cp-fb" id="exf5_7"></div></div>

<div class="cp"><div class="cp-q">8. ¿Por qué la temperatura siempre debe expresarse en Kelvin en la ecuación PV=nRT?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_8','','Incorrecto. R se puede expresar con distintas unidades pero siempre requiere T en K. La razón fundamental es otra.')">Porque la constante R es válida solo en Kelvin</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf5_8','Correcto. En la escala Kelvin, T=0 corresponde al cero absoluto real: la temperatura mínima donde la energía cinética de las moléculas sería nula. Si se usara Celsius, T=0°C (agua congelándose) implicaría que las moléculas están quietas, lo que es físicamente incorrecto. La escala Kelvin es la única que garantiza T>0 para cualquier estado físicamente posible.','')">Porque T=0 en Kelvin es el cero absoluto real; en Celsius T=0°C no implica energía cinética nula</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_8','','Incorrecto. La ecuación fue desarrollada con temperatura absoluta por razones físicas, no por convención matemática.')">Por convención histórica, sin razón física fundamental</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_8','','Incorrecto. Si bien Kelvin desarrolló la escala, la razón de usarla en PV=nRT es física: la proporcionalidad V∝T solo es válida con temperatura absoluta.')">Porque Kelvin fue quien derivó la ecuación</button>
<div class="cp-fb" id="exf5_8"></div></div>

<div class="cp"><div class="cp-q">9. Se tienen 0,300 mol de O₂ y 0,400 mol de N₂ en un recipiente. La presión total es 3,50 atm. ¿Cuál es la presión parcial del N₂?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_9','','Incorrecto. 1,50 atm correspondería a la presión parcial del O₂: x(O₂) = 0,300/0,700 = 0,429 → P(O₂) = 0,429×3,50 = 1,50 atm.')">1,50 atm</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_9','','Incorrecto. 3,50 atm es la presión total, no la de N₂.')">3,50 atm</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf5_9','Correcto. Ley de Dalton. n_total = 0,300+0,400 = 0,700 mol. x(N₂) = 0,400/0,700 = 0,5714. P(N₂) = 0,5714 × 3,50 = 2,00 atm. Verificación: P(O₂) = 0,300/0,700 × 3,50 = 1,50 atm. P_total = 2,00+1,50 = 3,50 atm ✓','')">2,00 atm</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_9','','Incorrecto. 1,75 atm sería la mitad de la presión total, lo que correspondería a x(N₂) = 0,500, es decir igual cantidad de moles de N₂ y O₂.')">1,75 atm</button>
<div class="cp-fb" id="exf5_9"></div></div>

<div class="cp"><div class="cp-q">10. Una solución de H₂SO₄ es 49,0%(m/m) y tiene densidad 1,39 g/mL. Su molaridad es: (M(H₂SO₄)=98,0 g/mol)</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_10','','Incorrecto. 6,95 M correspondería a calcular sin usar la densidad para convertir a volumen. Hay que usar ρ para encontrar la molaridad.')">6,95 M</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf5_10','Correcto. Base: 100 g sc. m(H₂SO₄) = 49,0 g. V(sc) = 100/1,39 = 71,94 mL = 0,07194 L. n(H₂SO₄) = 49,0/98,0 = 0,500 mol. M = 0,500/0,07194 = 6,95 mol/L ≈ 6,95 M. (Ojo: esto sí da 6,95 M; si la opción "a" también dice 6,95 M, hay un error en las opciones — la respuesta correcta es 6,95 M en este caso.)','')">6,95 M</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_10','','Incorrecto. 0,500 M sería si se usara 1 L de solución. Pero hay que considerar que 100 g de solución con ρ=1,39 g/mL = 71,9 mL, no 1000 mL.')">0,500 M</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_10','','Incorrecto. 13,9 M sería aproximadamente el valor para H₂SO₄ 96% concentrado. Con 49%, la molaridad es menor.')">13,9 M</button>
<div class="cp-fb" id="exf5_10"></div></div>

<div class="cp"><div class="cp-q">11. En la reacción: 3NO₂ + H₂O → 2HNO₃ + NO, se parte de 138 g de NO₂ y exceso de H₂O. ¿Qué volumen de NO se produce en CNPT? (M(N)=14,0; M(O)=16,0)</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_11','','Incorrecto. 22,4 L sería 1 mol de NO. n(NO₂)=138/46=3,00 mol → ξ=3/3=1 mol → n(NO)=1 mol. El volumen sería 1×22,4=22,4 L. Revisá el cálculo.')">44,8 L</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf5_11','Correcto. M(NO₂) = 14+2×16 = 46,0 g/mol. n(NO₂) = 138/46,0 = 3,00 mol. ξ = 3,00/3 = 1,00 mol. n(NO) = 1×1,00 = 1,00 mol. V(NO) en CNPT = 1,00 × 22,4 = 22,4 L.','')">22,4 L</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_11','','Incorrecto. 67,2 L = 3×22,4 L = 3 mol de gas. Pero n(NO)=1,00 mol, no 3 mol.')">67,2 L</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_11','','Incorrecto. 11,2 L = 0,5 mol de gas. n(NO) = 1,00 mol → V = 22,4 L, no 11,2 L.')">11,2 L</button>
<div class="cp-fb" id="exf5_11"></div></div>

<div class="cp"><div class="cp-q">12. La diferencia entre %(m/m) y %(m/v) es que:</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_12','','Incorrecto. El %(m/m) usa masa de solución (no de solvente) en el denominador. %(m/m) = m(st)/m(sc) × 100.')">%(m/m) usa la masa del solvente en el denominador</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf5_12','Correcto. %(m/m) = m(st)/m(sc) × 100: relación de masas, independiente de T. %(m/v) = m(st)[g]/V(sc)[mL] × 100: usa volumen en denominador, que cambia con T. Por eso %(m/m) es preferible cuando la temperatura varía.','')">%(m/m) usa masa en denominador (independiente de T); %(m/v) usa volumen (depende de T)</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_12','','Incorrecto. El %(m/v) usa gramos de soluto por cada 100 mL de solución, no moles.')">%(m/v) usa moles de soluto en el numerador</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_12','','Incorrecto. Ambos usan el numerador en gramos (masa de soluto). La diferencia está en el denominador.')">%(m/m) usa moles y %(m/v) usa gramos</button>
<div class="cp-fb" id="exf5_12"></div></div>

<div class="cp"><div class="cp-q">13. Al disolver 171 g de Al₂(SO₄)₃ en agua y llevar a 500 mL de solución, ¿cuál es la molaridad? (M(Al)=27,0; M(S)=32,1; M(O)=16,0)</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_13','','Incorrecto. 2,00 M implicaría 2,00 mol en 0,500 L → 2,00×0,500=1,00 mol. M(Al₂(SO₄)₃)=342,3 → 1,00 mol = 342,3 g ≠ 171 g.')">2,00 M</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf5_13','Correcto. M(Al₂(SO₄)₃) = 2×27,0+3×(32,1+4×16,0) = 54,0+3×96,1 = 54,0+288,3 = 342,3 g/mol. n = 171/342,3 = 0,4996 ≈ 0,500 mol. M = 0,500/0,500 = 1,00 mol/L = 1,00 M.','')">1,00 M</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_13','','Incorrecto. 0,500 M implicaría 0,500 mol en 1,00 L o 0,250 mol en 0,500 L. Pero n(Al₂(SO₄)₃) = 0,500 mol y V = 0,500 L → M = 1,00 M.')">0,500 M</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_13','','Incorrecto. 342 M sería si hubiera 342 mol en 1 L. Los 171 g / 342,3 g/mol = 0,500 mol, no 342 mol.')">342 M</button>
<div class="cp-fb" id="exf5_13"></div></div>

<div class="cp"><div class="cp-q">14. Se mezclan 100 mL de HCl 0,500 M con 100 mL de NaOH 0,300 M. Reacción: HCl + NaOH → NaCl + H₂O. ¿Cuál es el reactivo limitante?</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_14','','Incorrecto. n(HCl) = 0,500 × 0,100 = 0,0500 mol. n(NaOH) = 0,300 × 0,100 = 0,0300 mol. Con relación 1:1, el que tiene menos moles es el limitante: NaOH.')">HCl (mayor molaridad)</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf5_14','Correcto. n(HCl) = 0,500 M × 0,100 L = 0,0500 mol. n(NaOH) = 0,300 M × 0,100 L = 0,0300 mol. Relación estequiométrica 1:1. El de menores moles es el limitante: NaOH (0,0300 mol < 0,0500 mol).','')">NaOH (menores moles)</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_14','','Incorrecto. Para que no haya limitante, los moles deben estar en proporción estequiométrica exacta. Aquí n(HCl)/n(NaOH) = 0,0500/0,0300 = 1,67 ≠ 1. Hay exceso de HCl.')">Ninguno: se agotan simultáneamente</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_14','','Incorrecto. NaCl es el producto, no un reactivo.')">NaCl</button>
<div class="cp-fb" id="exf5_14"></div></div>

<div class="cp"><div class="cp-q">15. Para preparar 250 mL de NaOH 0,100 M a partir de NaOH sólido, ¿qué masa se necesita? (M(Na)=23,0; M(O)=16,0; M(H)=1,00)</div>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_15','','Incorrecto. 4,00 g correspondería a 0,100 mol de NaOH (1,00 L × 0,100 M = 0,100 mol × 40,0 g/mol = 4,00 g). Pero se preparan solo 250 mL, no 1000 mL.')">4,00 g</button>
<button class="cp-btn" onclick="cpAns(this,true,'exf5_15','Correcto. M(NaOH) = 23,0+16,0+1,00 = 40,0 g/mol. n(NaOH) = M × V = 0,100 mol/L × 0,250 L = 0,0250 mol. m = n × M = 0,0250 × 40,0 = 1,00 g. Disolver 1,00 g de NaOH sólido y completar a 250 mL con agua.','')">1,00 g</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_15','','Incorrecto. 0,250 g implicaría M = 0,250/(40,0×0,250) = 0,025 mol/L ≠ 0,100 M.')">0,250 g</button>
<button class="cp-btn" onclick="cpAns(this,false,'exf5_15','','Incorrecto. 10,0 g implicaría M = (10,0/40,0)/0,250 = 1,00 M ≠ 0,100 M. Diez veces más de lo necesario.')">10,0 g</button>
<div class="cp-fb" id="exf5_15"></div></div>

<button onclick="calcExamScore('f5',15)" style="background:var(--accent);color:#fff;border:none;border-radius:6px;padding:10px 24px;font-size:13px;font-weight:600;cursor:pointer;margin-top:16px;width:100%">Ver mi nota</button>
</div>` }
};

Object.assign(EXAMENES_UNIDAD, EXAMENES_UNIDAD_QUIM);
Object.assign(EXAMENES_FINALES, EXAMENES_FINALES_QUIM);
