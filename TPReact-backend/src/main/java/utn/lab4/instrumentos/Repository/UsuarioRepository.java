package utn.lab4.instrumentos.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.lab4.instrumentos.Entity.Usuario;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByNombreUsuarioAndClave(String nombreUsuario, String encriptada);

    Optional<Usuario> findByNombreUsuario(String nombreUsuario);
}
