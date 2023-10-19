import LinkButton from "@/components/_ui/LinkButton/LinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";

const JoinSignup = (): JSX.Element => {
  return (
    <section className="w-full bg-zinc-950 p-16">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row space-y-5 justify-center items-center text-center bg-zinc-900 p-5 rounded-lg">
        <div className="max-w-[700px]">
          <h6>
            Junte-se à tripulação! Crie um login e desfrute de ofertas
            exclusivas no nosso bar pirata. O tesouro espera por você!
          </h6>
        </div>
        <div className="min-w-fit mx-5">
          <LinkButton href="/signup">
            <span className="mr-2">
              <FontAwesomeIcon icon={faSkullCrossbones} />
            </span>
            Registrar-se!
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default JoinSignup;
