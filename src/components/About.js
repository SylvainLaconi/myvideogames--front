import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

const About = () => {
  return (
    <Container>
      <Grid>
        <Grid.Column width={4}>
          <Image src="https://media0.giphy.com/media/3ohzdEjrJsQ7QEl0Na/giphy.gif" />
        </Grid.Column>
        <Grid.Column width={8}>
          <Container textAlign="justified">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem eius blanditiis nemo soluta rem mollitia, molestias
            doloremque quae consequuntur suscipit ullam aperiam quam pariatur ex
            distinctio explicabo aspernatur recusandae? Cumque aperiam
            recusandae harum eveniet dignissimos dicta quas quam corrupti
            tempora ut nisi veniam velit, architecto facilis consequuntur
            accusantium est placeat ab dolore magni? Corporis, doloribus! Animi
            maxime, quae cupiditate harum iusto ducimus eaque sunt, quod,
            voluptates ratione perspiciatis totam eos aut quos aliquid soluta!
            Vel ex, voluptate ducimus fugiat commodi modi dolor non architecto
            eos? Tempora illum provident rem fuga impedit totam itaque.
            Consequatur repellat fugiat rerum possimus sunt ipsum, animi quidem
            qui placeat adipisci nemo ducimus tenetur illum explicabo in at iste
            nam, esse, a vel vero inventore? Nihil, mollitia repellendus nam
            obcaecati rerum dolore atque, quas temporibus deleniti illum quod,
            enim sed officiis velit ipsam perferendis debitis dolores
            repudiandae reiciendis maxime saepe! Iusto, reiciendis libero.
            Explicabo labore provident voluptas vero in dolor est quo ea
            accusantium voluptates quos mollitia rerum reiciendis ipsam
            molestiae enim voluptatem placeat, quaerat blanditiis unde magnam.
            Qui aliquid ipsa sed ipsum consequuntur eligendi, quos illum cum.
            Molestias repellat at numquam incidunt ea eveniet tempore eum quod
            fugit. Cum, eligendi? Repudiandae assumenda possimus id
            perspiciatis!
          </Container>
        </Grid.Column>
        <Grid.Column width={4}>
          <Image src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.18169-9/15826168_10154897136663953_8037559762750791247_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hu69znVmQn8AX_DJ1mm&_nc_ht=scontent-cdt1-1.xx&oh=67bfa4d9e5208489c211de3f2137ce1e&oe=60B881B8" />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default About;
