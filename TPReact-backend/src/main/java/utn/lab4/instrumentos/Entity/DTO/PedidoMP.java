package utn.lab4.instrumentos.Entity.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PedidoMP {
    private long id;
    private String titulo;
    private String montoTotal;
}
