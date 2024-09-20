import { toast } from "sonner";

export function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  fetch('https://httpbin.org/post', { method: 'post', body: data }).then(response => {
    if (response.ok) {
      toast.success(
        "¡Información enviada con éxito! En breve nuestro equipo se pondrá en contacto contigo."
      );
      event.target.reset();
    } else {
      toast.warning(
        "Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde."
      );
    }
  })
}
