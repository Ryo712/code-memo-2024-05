const handleCheckboxChange = async (taskId: string) => {
    try {
      // Firestore のドキュメントを更新
      const taskDocRef = doc(db, 'tasks', taskId);
      await updateDoc(taskDocRef, { status: 3 }); // ステータスを3に変更
      fetchUnreadTasks(); // データを再取得
    } catch (error) {
      console.error('ステータスの更新に失敗しました:', error);
    }
  };

//'status: 3'と保存することで数値型でデータ保存できる