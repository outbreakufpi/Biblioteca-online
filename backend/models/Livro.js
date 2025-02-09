import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  // Adicione outros campos conforme necessário
});

const Livro = mongoose.model('Livro', livroSchema);

export default Livro;  // Exportação padrão
