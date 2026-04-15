import { useState } from "react";

export default function Form() {
  const [hoverRating, setHoverRating] = useState(0);

  const [form, setForm] = useState({
    nom: "",
    email: "",
    message: "",
    rating: 0,
    isAvis: false,
  });
  const visible = (condition: boolean) =>
    condition ? "flex flex-col" : "hidden";

  function handleSubmit() {
    console.log(
      "nom : " +
        form.nom +
        ", message : " +
        form.message +
        ", mail : " +
        form.email,
    );
  }

  return (
    <div className="flex flex-col">
      {/* Choisir entre avis et mail...  */}
      {/* <button
        onClick={() => {
          setForm({ ...form, isAvis: !form.isAvis });
        }}
      >
        {form.isAvis ? "Laisser un avis" : "Envoyer un mail"}
      </button> */}
      <label htmlFor="email">Email</label>
      <input
        className={`border-2 rounded-lg shadow-md bg-cream border-sand focus:outline-none focus:border-pine transition-colors  mx-4 p-0.5`}
        type="text"
        placeholder="Votre email s'il vous plait"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      {/* Pour laisser Avis...  */}
      {/* <label className={visible(form.isAvis)} htmlFor="rating">
        Note
      </label>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setForm({ ...form, rating: star })}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className={`cursor-pointer ${visible(form.isAvis)}
              ${
                star <= (hoverRating || form.rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }
            `}
          >
            ★
          </span>
        ))}
      </div> */}
      <label htmlFor="name">Nom</label>
      <input
        className="border-2 rounded-lg shadow-md bg-cream border-sand focus:outline-none focus:border-pine transition-colors mx-4 p-0.5"
        type="text"
        placeholder="Votre nom s'il vous plait"
        value={form.nom} // la valeur vient du state
        onChange={(e) => setForm({ ...form, nom: e.target.value })} // le state se met à jour à chaque frappe
      />
      <label htmlFor="message">Message</label>
      <textarea
        className="border-2 rounded-lg shadow-md bg-cream border-sand focus:outline-none focus:border-pine transition-colors mx-4 p-0.5"
        value={form.message}
        placeholder="Votre message s'il vous plait"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        rows={4} // hauteur en nombre de lignes
      />
      <button
        className="rounded-2xl bg-pine transition-colors align-bottom text-cream w-32 px-6 py-3 mx-4 my-2 hover:bg-espresso hover:cursor-pointer"
        onClick={handleSubmit}
      >
        Envoyer
      </button>
    </div>
  );
}
