

        const $html = document.querySelector('html')
        const $chk = document.querySelector('#chk')

        $chk.addEventListener('change', function() {
            $html.classList.toggle('dark-mode')
        })



        var screen = document.querySelector('#screen');
        var btn = document.querySelectorAll('.btn');

        for(item of btn)
        {
            item.addEventListener('click',(e)=>{
                btntext=e.target.innerText;
                if(btntext=='×')
                {
                    btntext='*';
                }

                if(btntext=='÷')
                {
                    btntext='/';
                }
                screen.value += btntext;
            })
        }

        function sin()
        {
            let radians = screen.value * Math.PI / 180;
            let result = Math.sin(radians);
            
            if (result < 0.0000001 > 0) { 
                screen.value = result.toFixed(0);
            } else {
                screen.value = result;
            }
        }

        function cos()
        {
            let radians = screen.value * Math.PI / 180;
            let result = Math.cos(radians);
            
            if (result < 0.0000001 > 0) { 
                screen.value = result.toFixed(0);
            } else {
                screen.value = result;
            }
        }

        function tan()
        {
            let radians = screen.value * Math.PI / 180;
            let result = Math.tan(radians);
            
            if (result < 0.0000001 > 0) { 
                screen.value = result.toFixed(0);
            } else {
                screen.value = result;
            }
        }

        function porc() {
            let inputValue = parseFloat(screen.value); // Valor na tela da calculadora
            let percentage = parseFloat(prompt("Digite a porcentagem:")); // Solicita a porcentagem
            if (!isNaN(inputValue) && !isNaN(percentage)) {
                let result = (inputValue * percentage) / 100;
                screen.value = result.toFixed(2);
            } else {
                screen.value = "Erro";
            }
        }

        function pow()
        {
            screen.value=Math.pow(screen.value,2);
        }

        function sqrt()
        {
            screen.value=Math.sqrt(screen.value,2);
        }

        function log()
        {
            screen.value=Math.log(screen.value);
        }

        function pi()
        {
            screen.value=screen.value + Math.PI;
        }

        function e()
        {
            screen.value=screen.value + Math.E;
        }

        function fact()
        {
            var i, num, f;
            f=1
            num=screen.value;
            for(i=1; i<=num; i++)
            {
                f=f*i;
            }

            i=i-1;

            screen.value=f;
        }

        function backspc()
        {
            screen.value=screen.value.substr(0,screen.value.length-1)
        }
