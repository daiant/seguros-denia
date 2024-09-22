import { toast } from "sonner";

export async function handleSubmit(event, executeRecaptcha, callback) {
  event.preventDefault();

  const token = await executeRecaptcha('form');

  const data = new FormData(event.target);
  data.append('token', token);

  fetch('https://mail.asisadenia.es', { method: 'post', body: data }).then(response => {
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

    if (callback) {
      setTimeout(() => {
        callback();
      }, 150);
    };
  })
}
