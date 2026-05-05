# Relatório de Evidências — Transformação Digital F113

> 💡 **GUIA DA EQUIPE:** ALIMENTAR `relatorio-de-evidencias.md` com as mudanças feitas com prints importados da pasta `img-evidencias/`. 
> Tire o print, coloque na pasta `img-evidencias/`, copie o caminho relativo, faça um breve relato da mudança e coloque tudo no doc `relatorio-de-evidencias.md`.




## Etapa 2: Pipeline CI/CD, Deploy e Monitoramento

### Tarefa: [INFRA] Configurar projetos na Vercel (main e dev)
**Ação Realizada:** Resolução de erro de *build* no Vercel devido a *Case Sensitivity*.

**Descrição:** Durante o primeiro teste de deploy na branch `dev` (ambiente de staging) na Vercel, o *build* quebrou. Isso ocorreu porque o sistema Linux da Vercel é *case-sensitive* e não conseguiu mapear o import feito no `main.tsx` (`import Home from "./routes/Home.tsx";`), pois o arquivo físico estava salvo com inicial minúscula (`home.tsx`), algo que o Windows ignora localmente. Corrigimos o problema renomeando o arquivo para `Home.tsx` através do comando do Git, padronizando a nomenclatura do React e garantindo a compatibilidade entre o Windows local e o servidor da Vercel.

**Evidências (Prints):**

> **Antes (Falha no Build da Vercel):**
> ![Antes - Erro Vercel](img-evidencias\antes-da-correcao-Home.png)


> **Depois (Deploy com Sucesso na Vercel):**
> ![Depois - Vercel Sucesso](img-evidencias\depois-dacorrecao-home.png)

---

### Tarefa: [INFRA] Configuração de GitHub Personal Access Token (Rate Limit)
**Ação Realizada:** Implementação de autenticação via Token nas requisições da API do GitHub.

**Descrição:** Para contornar o limite restrito de 60 requisições por hora para chamadas não autenticadas, configuramos a aplicação para utilizar um *Personal Access Token* (PAT). O token foi configurado como variável de ambiente (`VITE_GITHUB_TOKEN`) no arquivo `.env` local e no painel administrativo da Vercel. O código nos componentes `Home.tsx` e `Repos.tsx` foi atualizado para incluir este token no cabeçalho `Authorization` das requisições `fetch`. Esta medida previne que a aplicação pare de funcionar por excesso de requisições durante a fase de testes e avaliação do projeto.

