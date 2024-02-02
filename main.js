<script type="text/javascript">
  function formatarMoeda() {
        var elemento = document.getElementById('ValorPrestacaoServico');
        var valor = elemento.value;

        valor = valor + '';
        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';
        valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }

        if (isNaN(parseFloat(valor.replace(',', '.'))) || valor.trim() === '') {
            return;
        }
        elemento.value = valor;
    }
</scritp>
