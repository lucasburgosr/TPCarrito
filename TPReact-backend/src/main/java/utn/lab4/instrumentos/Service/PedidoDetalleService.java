package utn.lab4.instrumentos.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.lab4.instrumentos.Entity.DTO.PedidoDetalleDTO;
import utn.lab4.instrumentos.Entity.Instrumento;
import utn.lab4.instrumentos.Entity.Pedido;
import utn.lab4.instrumentos.Entity.PedidoDetalle;
import utn.lab4.instrumentos.Repository.InstrumentoRepository;
import utn.lab4.instrumentos.Repository.PedidoDetalleRepository;
import utn.lab4.instrumentos.Repository.PedidoRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PedidoDetalleService {

    @Autowired
    private PedidoDetalleRepository pedidoDetalleRepository;

    @Autowired
    private InstrumentoRepository instrumentoRepository;

    @Autowired
    private PedidoRepository pedidoRepository;

    public List<PedidoDetalle> getPedidoDetalles() {
        return pedidoDetalleRepository.findAll();
    }

    public Optional<PedidoDetalle> getPedidoDetalle(Long id) {
        return pedidoDetalleRepository.findById(id);
    }

    public void deletePedidoDetalle(Long id) {
        pedidoDetalleRepository.deleteById(id);
    }

    public void saveOrUpdatePedidoDetalle(PedidoDetalleDTO pedidoDetalleDTO) {
        PedidoDetalle pedidoD = new PedidoDetalle();
        Optional<Instrumento> instrumento = instrumentoRepository.findById(pedidoDetalleDTO.getInstrumentoId());
        Optional<Pedido> pedido = pedidoRepository.findById(pedidoDetalleDTO.getPedidoId());

        if (instrumento.isPresent() && pedido.isPresent()) {
            pedidoD.setInstrumento(instrumento.get());
            pedidoD.setPedido(pedido.get());
            pedidoD.setCantidad(pedidoDetalleDTO.getCantidad());

            pedidoDetalleRepository.save(pedidoD);
        } else {
            // Manejar el caso en que el instrumento o el pedido no se encuentran
            throw new IllegalArgumentException("Instrumento o Pedido no encontrado");
        }
    }
}
