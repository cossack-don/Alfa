namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Routing\Controller;

class TestController extends Controller
{
    public function index() {
        return response()->json('1111');
    }
}
