import { Button, AboutGirls } from '../components';

export const About = () => {
  return (
    <div className='max-w-screen-small mx-auto text-md1 wide:max-w-screen-wide flex wide:justify-between gap-[103px] items-center tracking-wider wide:items-start'>
      <div className='hidden wide:flex relative mt-[17px] justify-center'>
        <AboutGirls />
      </div>

      <div>
        <h2 className='text-primary-navy text-4xl3 wide:text-5xl tracking-widest text-center wide:text-left mb-8 wide:mb-14'>
          Be your best self.
        </h2>

        <div className='wide:hidden relative mb-12'>
          <AboutGirls />
        </div>

        <div className='flex flex-col gap-y-8'>
          <p>Hi! My name’s [Insert Name], and I founded [Insert] in ____.</p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.
          </p>

          <p>
            Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
            placerat volutpat ligula, ac consectetur felis varius non. Aliquam a
            nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu
            congue, faucibus libero nec, placerat ligula.
          </p>

          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
          </p>

          <p>
            Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
            mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus,
            ac convallis urna massa at nibh.
          </p>

          <p>
            Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod
            leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in
            sapien.
          </p>

          <p>Cras mattis varius mollis.</p>
        </div>

        <div className='hidden wide:flex mt-8'>
          <Button arrowMode={'hidden'} />
        </div>
      </div>
    </div>
  );
};
