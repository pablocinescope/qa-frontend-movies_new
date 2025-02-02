import { Button } from '../../views/button';
import { Card, CardFooter, CardHeader } from '../../views/card';
import { Link } from 'react-router';

function ForbiddenPage() {
  return (
    <div className="w-full h-full mt-36 flex flex-col items-center justify-center">
      <Card className="w-[500px] mx-auto">
        <CardHeader>
          <h2 className="text-xl">У вас нет доступа к этой странице</h2>
        </CardHeader>
        <CardFooter className="flex flex-row-reverse">
          <Link to="/">
            <Button type="button">Вернуться на главную</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ForbiddenPage;
