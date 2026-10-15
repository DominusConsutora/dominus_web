import React from "react";
import HeaderTwo from "./HeaderTwo";
import FooterTwo from "./FooterTwo";

type LegalSection = {
  title: string;
  body: string;
};

export default function LegalDocument({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main className="page-wrapper">
      <HeaderTwo />
      <section className="tmp-section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <article className="col-lg-9">
              <header className="mb--40">
                <h1 className="title">{title}</h1>
                <p className="description b1">{intro}</p>
              </header>
              {sections.map((section) => (
                <section className="mb--30" key={section.title}>
                  <h2 className="title h3">{section.title}</h2>
                  <p className="description b1">{section.body}</p>
                </section>
              ))}
            </article>
          </div>
        </div>
      </section>
      <FooterTwo />
    </main>
  );
}
