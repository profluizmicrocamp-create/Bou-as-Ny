import { getAllVagas, adicionarVaga, atualizarVaga, excluirVaga } from './app.js';

// Login Admin (mock)
const ADMIN_USER = 'admin';
const ADMIN_PASSWORD = 'admin123';

let editandoVagaId = null;

// Verificar se já está logado
function verificarLoginAdmin() {
    const adminLogado = sessionStorage.getItem('adminLogado');
    if (adminLogado === 'true') {
        mostrarPainel();
    }
}

// Fazer login admin
window.fazerLoginAdmin = function(event) {
    event.preventDefault();
    const user = document.getElementById('admin-user').value;
    const password = document.getElementById('admin-password').value;

    if (user === ADMIN_USER && password === ADMIN_PASSWORD) {
        sessionStorage.setItem('adminLogado', 'true');
        mostrarPainel();
    } else {
        alert('Credenciais inválidas. Use: admin / admin123');
    }
};

// Mostrar painel admin
function mostrarPainel() {
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'block';
    carregarListaVagas();
}

// Salvar vaga (criar ou editar)
window.salvarVaga = function(event) {
    event.preventDefault();

    const titulo = document.getElementById('vaga-titulo').value;
    const tipo = document.getElementById('vaga-tipo').value;
    const area = document.getElementById('vaga-area').value;
    const duracao = document.getElementById('vaga-duracao').value;
    const descricao = document.getElementById('vaga-descricao').value;
    const requisitosStr = document.getElementById('vaga-requisitos').value;
    const beneficiosStr = document.getElementById('vaga-beneficios').value;
    const status = document.getElementById('vaga-status').value;

    const requisitos = requisitosStr.split(',').map(r => r.trim()).filter(r => r);
    const beneficios = beneficiosStr.split(',').map(b => b.trim()).filter(b => b);

    const dadosVaga = {
        titulo,
        tipo,
        area,
        duracao,
        descricao,
        requisitos,
        beneficios,
        status
    };

    if (editandoVagaId) {
        // Editar
        const sucesso = atualizarVaga(editandoVagaId, dadosVaga);
        if (sucesso) {
            alert('Vaga atualizada com sucesso!');
            limparFormulario();
            carregarListaVagas();
        } else {
            alert('Erro ao atualizar vaga.');
        }
    } else {
        // Criar
        adicionarVaga(dadosVaga);
        alert('Vaga criada com sucesso!');
        limparFormulario();
        carregarListaVagas();
    }
};

// Limpar formulário
window.limparFormulario = function() {
    document.getElementById('vaga-form').reset();
    document.getElementById('vaga-id').value = '';
    editandoVagaId = null;
};

// Carregar lista de vagas
function carregarListaVagas() {
    const vagas = getAllVagas();
    const container = document.getElementById('vagas-list');

    if (vagas.length === 0) {
        container.innerHTML = '<p>Nenhuma vaga cadastrada.</p>';
        return;
    }

    container.innerHTML = vagas.map(vaga => `
        <div class="admin-vaga-item">
            <h4>${vaga.titulo}</h4>
            <div class="admin-vaga-item-meta">
                <span><strong>Tipo:</strong> ${vaga.tipo}</span>
                <span><strong>Área:</strong> ${vaga.area}</span>
                <span><strong>Duração:</strong> ${vaga.duracao}</span>
                <span class="tag ${vaga.status === 'publicada' ? 'tag-tipo' : ''}" style="background: ${vaga.status === 'publicada' ? '#dbeafe' : '#f1f5f9'}; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.75rem;">
                    ${vaga.status === 'publicada' ? 'Publicada' : 'Rascunho'}
                </span>
            </div>
            <p style="color: #64748b; font-size: 0.9rem; margin-bottom: 1rem;">${vaga.descricao.substring(0, 150)}...</p>
            <div class="admin-vaga-item-actions">
                <button onclick="editarVaga(${vaga.id})" class="btn btn-primary btn-sm">Editar</button>
                <button onclick="excluirVagaAdmin(${vaga.id})" class="btn btn-secondary btn-sm">Excluir</button>
                <button onclick="toggleStatusVaga(${vaga.id})" class="btn btn-sm" style="background: ${vaga.status === 'publicada' ? '#fbbf24' : '#10b981'}; color: white;">
                    ${vaga.status === 'publicada' ? 'Despublicar' : 'Publicar'}
                </button>
            </div>
        </div>
    `).join('');
}

// Editar vaga
window.editarVaga = function(id) {
    const vagas = getAllVagas();
    const vaga = vagas.find(v => v.id === id);

    if (!vaga) {
        alert('Vaga não encontrada.');
        return;
    }

    editandoVagaId = id;
    document.getElementById('vaga-titulo').value = vaga.titulo;
    document.getElementById('vaga-tipo').value = vaga.tipo;
    document.getElementById('vaga-area').value = vaga.area;
    document.getElementById('vaga-duracao').value = vaga.duracao;
    document.getElementById('vaga-descricao').value = vaga.descricao;
    document.getElementById('vaga-requisitos').value = vaga.requisitos.join(', ');
    document.getElementById('vaga-beneficios').value = vaga.beneficios.join(', ');
    document.getElementById('vaga-status').value = vaga.status;
    document.getElementById('vaga-id').value = id;

    // Scroll para o formulário
    document.getElementById('vaga-form').scrollIntoView({ behavior: 'smooth' });
};

// Excluir vaga
window.excluirVagaAdmin = function(id) {
    if (!confirm('Tem certeza que deseja excluir esta vaga?')) {
        return;
    }

    const sucesso = excluirVaga(id);
    if (sucesso) {
        alert('Vaga excluída com sucesso!');
        carregarListaVagas();
    } else {
        alert('Erro ao excluir vaga.');
    }
};

// Toggle status (publicar/despublicar)
window.toggleStatusVaga = function(id) {
    const vagas = getAllVagas();
    const vaga = vagas.find(v => v.id === id);

    if (!vaga) return;

    const novoStatus = vaga.status === 'publicada' ? 'rascunho' : 'publicada';
    atualizarVaga(id, { status: novoStatus });
    carregarListaVagas();
};

// Inicializar ao carregar
window.addEventListener('DOMContentLoaded', () => {
    verificarLoginAdmin();
});

