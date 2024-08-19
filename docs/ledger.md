# Ledger

O ledger atua como um registro contábil que armazena, de forma permanente e inalterável, todas as transações financeiras, saldos de conta e auditorias realizadas.

## Funcionalidades
  - Registro de transações
  - Manutenção de Saldos
  - Auditoria e Rastreamento

## Fluxo

Ao ser realizada uma transação, o serviço de ledger é acionado. Esse serviço é responsável por garantir a integridade dos registros de forma semelhante a um blockchain. Para isso, ele solicita o ID do registro anterior e, após validar a integridade da cadeia de registros, gera um novo ID para a transação atual. Se a validação for bem-sucedida, o serviço registra a transação, assegurando que todos os registros sejam imutáveis e integros.
> Dps que criar os endpoints, melhorar as coisas aqui
