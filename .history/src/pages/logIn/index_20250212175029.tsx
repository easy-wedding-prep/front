import styles from './style.module.scss';
import classNames from 'classnames';
import logoImg from '@/../public/images/Workspace Logo.svg'
import Image from 'next/image';

const cn = classNames.bind(styles);

export default function LogIn() {
  return(
    <div>
      <div>
        <Image src={logoImg}></Image>
        <p>
          결혼 준비의 시작, <br />
          <span>웨디</span>와 함께 하세요.
        </p>
      </div>
      <button>
      <p></p>카카오톡으로 로그인하기
      </button>
    </div>
  );
};