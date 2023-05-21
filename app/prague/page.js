import Image from 'next/image'

const Prague = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 mx-auto max-w-3xl">
      <Image
        src="/assets/infant-jesus-prague.jpeg"
        alt="Infant Jesus"
        width={180}
        height={180}
        priority
        className='rounded-full object-contain'
      />
    <h3>아기 예수님께 드리는 9일 기도</h3>
      <p>아기 예수님, 저는 하느님이신 당신이 저를 도와주실 것을 굳게 믿고, 당신의 거룩하신 은혜 얻을 것을 확신하고 바라며, 이 요긴한 사정을 당신의 거룩한 모친을 통하여 당신께 봉헌하오며 도움을 청하나이다. 예수님, 저의 온 마음과 영혼을 다하여 당신을 사랑하고 남을 나와 같이 사랑하리이다. 제가 지은 죄를 깊이 통회하오니, 착하신 예수님, 제게 힘을 주시어 이 죄악을 물리치게 하여 주소서. 저는 당신의 마음을 아프게 해드리는 것 보다 차라리 모든 괴로움을 받겠사오며, 죄를 범치 않기로 굳게 결심하나이다. 이후부터는 당신을 충심으로 섬기겠사오니, 오! 거룩하신 아기 예수님, 이 요긴한 사정에 있어 저의 도움이 되어 주소서.  
      </p>
      <p>(은혜 청함) </p>
      <p>오! 프라그의 거룩하신 아기 예수님, 당신 어머니의 힘있는 전달과, 하느님으로서 가지신 전능하심의 한없는 자비를 의지하여 애원하오니, 제가 이 9일 기도로써 열심히 청하는 것을 들어 허락하여 주소서. 성모 마리아와 성 요셉 그리고 모든 천사와 성인 성녀들과 함께 당신을 영원히 모시고 흠숭하는 은혜를 주소서.</p>
      <p>오! 프라그의 아기 예수님, 제 기도를 들어 주시고 제가 청하는 바를 허락하여 주소서. (3번)</p>
      <h4>주님의 기도, 성모송, 영광송.</h4>
    </main>
  )
}

export default Prague