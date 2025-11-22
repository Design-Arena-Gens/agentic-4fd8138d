"use client";

import PrintButton from "../components/PrintButton";

const intro = [
  "Bonjour, je m'appelle [Votre Nom]. Je suis technicien supérieur en génie civil avec plus de 7 ans d'expérience.",
  "Je travaille depuis longtemps dans la maintenance des ponts en béton et en acier. J'aime organiser les équipes sur le terrain, garder un planning clair et sécuriser le chantier.",
  "Je parle arabe et je peux communiquer en français simple et direct. Je suis motivé pour rejoindre votre entreprise et développer mes compétences en France."
];

const plans = [
  {
    title: "Plan de maintenance préventive",
    goal: "Garder le pont en bon état et éviter les pannes.",
    steps: [
      "Inspection visuelle complète avec fiches photos et notes (logiciel BrIM ou tableur).",
      "Mesure de fissures, corrosion et usure avec instruments simples et rapport mensuel.",
      "Planning de nettoyage, peinture et protection des câbles ou poutres."
    ],
    result:
      "Taux de disponibilité du pont à 99 % et réduction des interventions d'urgence de 40 %."
  },
  {
    title: "Programme de réparation structurelle",
    goal: "Réparer les zones abîmées sans bloquer la circulation.",
    steps: [
      "Diagnostic rapide avec carottages, essais au marteau et analyse des données anciennes.",
      "Conception d'un phasage de chantier : demi-chaussée, signalisation, travail de nuit.",
      "Coordination avec fournisseurs pour béton projeté, résines et ancrages."
    ],
    result:
      "Réouverture du tablier avec 2 semaines d'avance et respect complet des normes NF EN."
  },
  {
    title: "Plan de renforcement et modernisation",
    goal: "Préparer le pont à un trafic plus lourd et prolonger sa durée de vie.",
    steps: [
      "Modélisation simple (logiciel Robot ou SAP2000) pour vérifier les charges nouvelles.",
      "Ajout de platelages métalliques, remplacement de joints, pose d'éclairage LED.",
      "Contrôle final avec essais de charge et remise d'un dossier de suivi complet."
    ],
    result:
      "Capacité portante augmentée de 25 % et budget maîtrisé avec économies de 12 %."
  }
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div>
          <h1>Présentation pour l'entretien</h1>
          <p className="subtitle">
            Version en français simple pour entretien vidéo avec un responsable
            de maintenance de ponts.
          </p>
        </div>
        <PrintButton />
      </section>

      <section className="card">
        <h2>Présentation personnelle</h2>
        <div className="card-content">
          {intro.map((sentence) => (
            <p key={sentence}>{sentence}</p>
          ))}
        </div>
      </section>

      <section className="grid">
        {plans.map((plan) => (
          <article className="card" key={plan.title}>
            <h3>{plan.title}</h3>
            <div className="card-content">
              <p className="plan-goal">
                <strong>Objectif :</strong> {plan.goal}
              </p>
              <ul>
                {plan.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
              <p className="plan-result">
                <strong>Résultat obtenu :</strong> {plan.result}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="card">
        <h2>Compétences clés</h2>
        <ul className="skills">
          <li>Inspection et suivi des pathologies (fissures, corrosion, joints)</li>
          <li>Planification de chantier avec sécurité et signalisation</li>
          <li>Coordination d'équipe et communication simple en français</li>
          <li>Utilisation d'outils numériques : AutoCAD, tableurs, rapports photo</li>
          <li>Respect strict des normes européennes et des consignes clients</li>
        </ul>
      </section>

      <footer className="footer">
        <p>
          Document prêt à imprimer — cliquez sur le bouton ci-dessus ou utilisez
          <strong> Ctrl + P</strong> / <strong>Cmd + P</strong>.
        </p>
        <p className="footnote">
          Astuce : remplacez le texte [Votre Nom] et ajoutez vos années
          d'expérience précises avant l'entretien.
        </p>
      </footer>
    </main>
  );
}
