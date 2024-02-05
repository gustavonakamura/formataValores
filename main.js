<script type="text/javascript">
  function formatarMoeda() {
        var elemento = document.getElementById('valorPrestacaoServico');
        var valor = elemento.value;

        // Remove caracteres não numéricos
        valor = valor.replace(/\D/g, '');

        // Adiciona vírgula para separar os centavos
        valor = valor.replace(/([0-9]{2})$/g, ",$1");

        // Adiciona ponto para separar milhares
        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }

        // Atualiza o valor no campo
        elemento.value = valor;
    }  
</scritp>
