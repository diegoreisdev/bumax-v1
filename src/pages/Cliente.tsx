import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ClientCard from "@/components/ClientCard";
import CTABlock from "@/components/CTABlock";
import { CLIENTS } from "@/data/clients";
import { WHATS } from "@/data/contact";

const Cliente = () => {
    useEffect(() => {
        document.title = "Cliente — Bumax Contabilidade";
    }, []);

    return (
        <Layout>
            <PageHero
                eyebrow="Cliente"
                title="Área do Cliente"
                subtitle="Escolha abaixo a Área do Cliente que deseja acessar"
            />

            <section className="section-light">
                <div className="container-wide py-20 md:py-24">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 ">
                        {CLIENTS.map((client) => (
                            <ClientCard
                                key={client.id}
                                logo={client.logo}
                                href={client.href}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <CTABlock
                title="Precisa de ajuda para acessar?"
                subtitle="Entre em contato com nosso suporte."
                buttonLabel="Fale conosco"
                buttonHref={WHATS}
            />
        </Layout>
    );
};

export default Cliente;
