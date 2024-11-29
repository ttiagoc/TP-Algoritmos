class Nodo {
    constructor(caracter, frecuencia) {
        this.caracter = caracter;
        this.frecuencia = frecuencia;
        this.izquierda = null;
        this.derecha = null;
    }
}

// Paso 1: Contar frecuencias
const contarFrecuencias = (texto) => {
    const mapa = new Map();
    for (const char of texto) {
        mapa.set(char, (mapa.get(char) || 0) + 1);
    }
    return mapa;
};

// Paso 2: Construir árbol de Huffman
const construirArbol = (frecuencias) => {
    const nodos = [...frecuencias].map(([caracter, frecuencia]) => new Nodo(caracter, frecuencia));
    while (nodos.length > 1) {
        nodos.sort((a, b) => a.frecuencia - b.frecuencia);
        const izquierda = nodos.shift();
        const derecha = nodos.shift();
        const nuevoNodo = new Nodo(null, izquierda.frecuencia + derecha.frecuencia);
        nuevoNodo.izquierda = izquierda;
        nuevoNodo.derecha = derecha;
        nodos.push(nuevoNodo);
    }
    return nodos[0];
};

// Paso 3: Generar códigos
const generarCodigos = (nodo, codigo = "", mapa = {}) => {
    if (!nodo) return;
    if (nodo.caracter !== null) {
        mapa[nodo.caracter] = codigo;
    }
    generarCodigos(nodo.izquierda, codigo + "0", mapa);
    generarCodigos(nodo.derecha, codigo + "1", mapa);
    return mapa;
};

// Paso 4: Codificar texto
const codificarTexto = (texto, codigos) => {
    return texto.split("").map(char => codigos[char]).join("");
};

// Función principal
const algoritmoHuffman = (texto) => {
    const frecuencias = contarFrecuencias(texto);
    const arbol = construirArbol(frecuencias);
    const codigos = generarCodigos(arbol);
    const textoCodificado = codificarTexto(texto, codigos);
    return { codigos, textoCodificado, arbol };
};

// Ejemplo
const texto = "huffman coding example";
const resultado = algoritmoHuffman(texto);

console.log("Códigos generados:", resultado.codigos);
console.log("Texto codificado:", resultado.textoCodificado);

export default algoritmoHuffman
