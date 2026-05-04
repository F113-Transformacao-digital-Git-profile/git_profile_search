# Relatório de Evidências — Transformação Digital F113

## Etapa 2: Pipeline CI/CD, Deploy e Monitoramento

### Tarefa: [INFRA] Configurar projetos na Vercel (main e dev)
**Ação Realizada:** Resolução de erro de *build* no Vercel devido a *Case Sensitivity*.

**Descrição:** Durante o primeiro teste de deploy na branch `dev` (ambiente de staging) na Vercel, o *build* quebrou. Isso ocorreu porque o sistema Linux da Vercel é *case-sensitive* e não conseguiu mapear o import feito no `main.tsx` (`import Home from "./routes/Home.tsx";`), pois o arquivo físico estava salvo com inicial minúscula (`home.tsx`), algo que o Windows ignora localmente. Corrigimos o problema renomeando o arquivo para `Home.tsx` através do comando do Git, padronizando a nomenclatura do React e garantindo a compatibilidade entre o Windows local e o servidor da Vercel.

**Evidências (Prints):**

> **Antes (Falha no Build da Vercel):**
> ![Antes - Erro Vercel](.img-evidencias\antes-da-correcao-Home.png)


> **Depois (Deploy com Sucesso na Vercel):**
> ![Depois - Vercel Sucesso](./caminho-da-imagem/depois-vercel-deploy-sucesso.png)
> *(Adicione aqui o print do painel da Vercel mostrando o status "Ready" ou verdinho)*
