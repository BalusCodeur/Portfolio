"use client";
import { useState } from "react";
const message = "",
  email = ["", ""];

const [nom, setNom] = useState("");
<div>
  <input
    type="text"
    value={nom} // la valeur vient du state
    onChange={(e) => setNom(e.target.value)} // le state se met à jour à chaque frappe
  />
  {/* // Pourquoi e.target.value ? e c'est l'événement, e.target c'est l'élément
  HTML, .value c'est ce qui est écrit dedans. // Champ texte simple */}
  <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
  {/* // Champ email */}
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  {/* // type="email" valide automatiquement le format // Zone de texte longue */}
  <textarea
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    rows={4} // hauteur en nombre de lignes
  />
  <button onClick={handleSubmit}>Envoyer</button>
</div>;

const [isAvis, setIsAvis] = useState(false);

<div onClick={() => setIsAvis(!isAvis)}>
  {isAvis ? "Laisser un avis" : "Envoyer un mail"}
</div>;

function setEmail(value: string): void {
  throw new Error("Function not implemented.");
}

function setMessage(value: string): void {
  throw new Error("Function not implemented.");
}

function handleSubmit() {
  console.log({ nom, email, message, isAvis });
  // plus tard : envoyer les données quelque part
}

const [form, setForm] = useState({
  nom: "",
  email: "",
  message: "",
  isAvis: false,
});

// Pour mettre à jour un champ sans écraser les autres :
setForm({ ...form, nom: "Nathan" });
// "...form" copie tous les champs existants, puis on écrase juste "nom"
