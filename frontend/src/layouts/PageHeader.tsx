import { Menu } from 'lucide-react';
import logo from '../assets/logo.svg'

export function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className="flex gap-4 flex-shrink-0 items-center">
        <button>
            <Menu/>
        </button>
        <img src={logo} className='h-10' />
      </div>

      <div>seachbar</div>

      <div>rightside</div>
    </div>
  );
}
