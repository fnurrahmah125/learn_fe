import "./App.css";
import { useRef } from "react";

function App() {
  const linkRef = useRef(null);
  const sectionRef = useRef(null);

  const goTo = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <h1 ref={linkRef}>Hello World</h1>
      <button
        onClick={() => console.log(linkRef.current)}
        style={{ marginRight: "20px" }}
      >
        Click here
      </button>
      <button onClick={() => goTo(sectionRef.current)}>
        Go to last section
      </button>
      <p>See console</p>

      <br />
      <br />
      <br />

      <h2>New Section</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est numquam
        fugiat aliquid reiciendis nesciunt exercitationem necessitatibus eius?
        Qui nihil voluptate totam officiis obcaecati nisi molestias dolorum
        perspiciatis distinctio mollitia, est ipsam sunt sint odit neque
        incidunt voluptas molestiae nam iure dolore iusto corrupti! Mollitia
        voluptate ea architecto impedit quos maiores ab nisi suscipit placeat
        nihil? Est vel molestiae adipisci debitis eligendi eum, enim iure harum
        voluptatibus atque eos impedit placeat dicta commodi quod alias
        repudiandae asperiores veniam blanditiis quo ipsum. Tempora eum ducimus
        quo sint ex dolorum iste tenetur veniam, exercitationem, corrupti, vitae
        neque. Sapiente inventore a quidem vel atque blanditiis et rerum ad,
        necessitatibus doloribus eius assumenda. Ad, ratione! Pariatur
        voluptates dicta impedit, dignissimos quibusdam excepturi repudiandae
        error reprehenderit. Explicabo et eligendi voluptatem nostrum, velit
        iusto placeat sequi dolores animi maiores, iure a vero aut ab temporibus
        reiciendis, nulla culpa. Suscipit hic ipsa exercitationem tempora,
        tenetur consectetur, minima nam officia, neque iusto quae quo similique
        repudiandae quod! A alias, sed tempora molestiae nihil vel at officia
        consequuntur deserunt esse rem sint in exercitationem eius illum aut,
        dolorum quam corrupti. Commodi praesentium quam qui iste distinctio enim
        eligendi porro necessitatibus. Veritatis assumenda et quaerat quos ullam
        placeat, sunt nam sit reprehenderit dolores nemo. Unde, quae eum!
        Eligendi, esse possimus! Esse assumenda nobis quasi non. Et eum amet
        libero saepe doloribus laborum minima dignissimos tempore, esse quod non
        ullam reiciendis modi cumque quisquam tempora odit quae, officiis nobis
        maiores, provident nihil delectus expedita! Quidem alias labore iure
        accusamus temporibus id necessitatibus quibusdam culpa nam a! Quod
        labore iste facere corporis fugiat, quaerat accusamus est hic? Veniam
        ratione praesentium itaque non eos at modi neque, et assumenda
        perspiciatis doloremque. Dolorum eaque esse vel id doloribus ab beatae
        eos nam necessitatibus officia officiis rerum iste, debitis nisi
        molestiae aperiam? Doloremque quod repudiandae nisi et distinctio
        perferendis aperiam dolores officiis est velit facere harum quae enim
        commodi illum exercitationem corporis fugiat temporibus animi iusto,
        quis rem dolorum. Labore modi, itaque, autem amet quos dolorem et ut
        repudiandae voluptatibus nobis totam molestiae iusto fuga maxime est
        doloremque provident non corporis reprehenderit voluptate, debitis
        assumenda temporibus doloribus? Facere, recusandae ipsa praesentium
        laborum, velit repellat, voluptas cum enim autem consequuntur cumque.
        Inventore aspernatur, commodi ducimus repudiandae quis ad odit aut,
        accusamus vel illum tenetur similique ullam reprehenderit quia? Numquam
        ipsa incidunt accusantium doloremque rem magnam consectetur molestias
        architecto asperiores. Sapiente, explicabo. Qui magni commodi totam
        laborum iste!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, tenetur
        fugit reprehenderit dignissimos doloremque itaque officiis tempore odit
        facilis ex enim vitae at magnam molestias inventore reiciendis commodi
        facere voluptas placeat, natus error eaque aspernatur obcaecati. Sed,
        maxime. Consequatur nostrum ad numquam ducimus eius quia reiciendis
        itaque mollitia aut velit cupiditate unde iure dignissimos amet, nulla,
        iusto tempore minima ipsa tempora qui vero eos dolorum, recusandae ab.
        Vitae dignissimos excepturi cumque repellat molestiae expedita atque
        aperiam quam dolor libero maiores nihil natus saepe, perspiciatis
        recusandae explicabo tempore minus culpa? Nihil enim inventore eligendi
        voluptatum, excepturi, laboriosam soluta ipsam dolorum facere deserunt
        labore quod temporibus ipsum. Explicabo incidunt nihil vero ab sapiente
        eligendi veniam nulla nam laboriosam, soluta itaque vitae rerum quidem
        illum ex eum, maxime provident placeat excepturi perspiciatis esse.
        Similique hic nisi a nihil modi obcaecati aliquam doloremque esse
        quidem, debitis, consequatur repudiandae eos quod, asperiores molestiae
        maiores officiis eveniet commodi magni dicta. Consequuntur officia
        voluptas ad dolorum ex fugiat, adipisci quod architecto, exercitationem
        aperiam eius? Asperiores modi officiis sunt eveniet possimus numquam
        unde libero, ut officia! Iure, dignissimos voluptates accusamus eligendi
        quidem tempore ratione et animi impedit. Laborum, ut tenetur! Nemo, iure
        accusantium deleniti repudiandae eligendi sed excepturi.
      </p>

      <br />
      <br />
      <br />

      <h2 ref={sectionRef}>Last Section</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        eveniet qui, ipsa ratione natus repellat sit est atque tenetur cumque
        accusamus placeat ut ex tempora soluta porro totam accusantium corrupti,
        ad odit officia temporibus! Iste provident id aperiam ducimus non
        molestiae facere aliquid pariatur quo voluptatibus tenetur, eveniet ex.
        Consectetur consequatur vitae, veniam aut aliquam incidunt corporis
        illum corrupti. Aliquid quo facere impedit necessitatibus expedita
        aspernatur rerum non, exercitationem, repellendus animi sed dolorem
        sapiente eligendi. Sed reiciendis a, itaque ad qui non perferendis.
        Consequatur ab quos eaque nulla, doloremque placeat tenetur illum est,
        optio itaque dolor sed ipsa magnam autem voluptatibus unde consectetur
        ut soluta incidunt deleniti aperiam assumenda quidem sunt ad. Quis,
        accusantium! Nihil non sequi quia consequatur corrupti. Praesentium
        magnam aliquam sint perferendis dicta, temporibus hic deserunt nihil cum
        ad repudiandae? Laudantium enim facilis quidem velit consequatur
        consequuntur eveniet nesciunt optio repudiandae. Quam ad, officiis ex
        eligendi et rem qui distinctio nostrum provident voluptate reiciendis
        itaque, velit odio? Amet commodi sint dolor. Natus commodi distinctio
        obcaecati deleniti expedita accusantium excepturi iure culpa! Ad, eius
        soluta temporibus provident quis consectetur eaque totam doloremque
        voluptate, dolorem fugit exercitationem quod consequatur iste quam natus
        eum sed pariatur, dolorum corporis ab. Dignissimos perferendis odit esse
        dolorum vel ex libero nulla aspernatur laudantium recusandae amet
        perspiciatis earum beatae deleniti explicabo assumenda officia, ipsa
        accusamus doloremque harum minima quis! Omnis ad dicta provident, quia
        vitae commodi laborum hic accusamus aut alias voluptatem ex amet
        pariatur blanditiis cumque iste, illo itaque facere cum. Asperiores,
        soluta! Cumque illum tempore necessitatibus dignissimos expedita
        repellendus aliquam distinctio neque perferendis mollitia veritatis odio
        fugit maiores animi saepe blanditiis soluta ullam ducimus ab, in
        pariatur optio maxime? Asperiores mollitia aspernatur quidem, suscipit
        rerum autem repudiandae explicabo, voluptate voluptatibus iure assumenda
        dignissimos magnam unde aliquam doloribus impedit modi velit a dolorum
        distinctio accusantium. Repellendus qui amet, vitae nostrum explicabo
        earum ab! Voluptate itaque quasi commodi totam error distinctio culpa
        architecto hic porro, magnam aspernatur. Sit quas praesentium libero.
        Aut vitae iste fuga cupiditate quos officiis itaque vel laudantium
        eligendi et facere ab libero, fugiat deserunt doloribus! Maxime, soluta
        quas temporibus quod architecto accusamus aspernatur quasi optio? Minima
        fuga pariatur dolorem vel libero porro possimus ullam cupiditate impedit
        praesentium qui ut eaque itaque sequi, dolor quibusdam et delectus
        commodi veritatis consequuntur! Tenetur quia veniam voluptates, dolorum
        labore doloribus quod libero ad nobis maiores, vero nesciunt. Voluptas
        quam atque eligendi placeat quis molestias.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        aspernatur ab odit ratione voluptate incidunt laudantium officiis
        tempora corrupti voluptates consectetur fugiat nesciunt totam, cumque
        hic quidem sint assumenda officia perferendis dolore nihil qui modi.
        Iure, magnam. Iure commodi ab quo ullam quam id, vero natus tenetur eos
        perferendis explicabo molestias quidem esse, eum incidunt assumenda! Nam
        obcaecati et voluptates tempora nemo asperiores autem optio vitae cum
        soluta aliquid reiciendis id enim dolores amet incidunt quos temporibus
        accusamus officiis nihil tenetur pariatur, ab alias. Sit enim voluptatem
        tempore. Nobis, atque. Tempora eveniet non expedita temporibus
        voluptatibus sequi! Veritatis unde rerum, ullam nulla consequuntur
        labore molestias similique. Minima fugiat ipsam ratione quaerat
        obcaecati quas maiores cum, qui voluptas recusandae maxime sint,
        excepturi voluptatum libero nisi reiciendis necessitatibus provident
        aut? Eveniet minus rerum quo, exercitationem fuga id numquam fugit
        impedit velit, mollitia amet alias obcaecati, autem itaque nesciunt
        fugiat corporis voluptatem nisi consequatur! Sit obcaecati pariatur quis
        recusandae, voluptatum animi ducimus doloribus similique consequuntur
        suscipit est sapiente iusto ipsum. Tenetur vero rem consectetur.
        Suscipit quidem quibusdam aut, ullam laudantium dignissimos sed iste.
        Cumque, labore eaque voluptas ratione temporibus qui eius reiciendis,
        voluptatum, consequuntur explicabo similique doloremque saepe fuga
        cupiditate reprehenderit quidem voluptatem!
      </p>
    </>
  );
}

export default App;
